"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { Icon } from "@/components/Icon";
import { budgets, company, enquiryTypes, products, timelines } from "@/content/site";
import { submitEnquiry } from "./actions";
import { stepFields, type EnquiryField, type EnquiryState } from "./schema";

const steps = ["Your need", "Project", "Contact", "Review"];
const initialState: EnquiryState = { status: "idle" };

type Values = Record<EnquiryField, string>;

export function EnquiryForm() {
  const params = useSearchParams();
  const topicParam = params.get("topic") ?? "";
  const productParam = params.get("product") ?? "";

  const [state, action] = useActionState(submitEnquiry, initialState);
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Values>(() => ({
    topic: enquiryTypes.some((t) => t.value === topicParam) ? topicParam : "",
    product: products.some((p) => p.slug === productParam) ? productParam : "",
    description: "",
    timeline: "",
    budget: "",
    name: "",
    email: "",
    organization: "",
    role: "",
    consent: "",
  }));
  const fieldsets = useRef<(HTMLFieldSetElement | null)[]>([]);
  const startedAt = useRef(0);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const submit = (formData: FormData) => {
    formData.set("startedAt", String(startedAt.current));
    return action(formData);
  };

  const serverErrors = state.status === "error" ? state.errors ?? {} : {};
  const [shownErrorState, setShownErrorState] = useState<EnquiryState | null>(null);

  // When the server reports field errors, jump to the first step containing one.
  if (state.status === "error" && state !== shownErrorState) {
    setShownErrorState(state);
    const first = stepFields.findIndex((fields) => fields.some((f) => state.errors?.[f]));
    if (first !== -1 && first !== step) setStep(first);
  }

  const set = (field: EnquiryField) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const v = e.target instanceof HTMLInputElement && e.target.type === "checkbox" ? (e.target.checked ? "on" : "") : e.target.value;
    setValues((prev) => ({ ...prev, [field]: v }));
  };

  const go = (next: number) => {
    setStep(next);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const validateStep = () => {
    const fs = fieldsets.current[step];
    if (!fs) return true;
    for (const el of fs.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>("input, textarea, select")) {
      if (!el.checkValidity()) {
        el.reportValidity();
        return false;
      }
    }
    return true;
  };

  if (state.status === "success") {
    return <Success name={state.name} reference={state.reference} />;
  }

  const topic = enquiryTypes.find((t) => t.value === values.topic);
  const product = products.find((p) => p.slug === values.product);

  return (
    <div ref={topRef} className="scroll-mt-28">
      {/* Progress */}
      <ol className="grid grid-cols-4 gap-2" aria-label="Enquiry progress">
        {steps.map((label, i) => (
          <li key={label} aria-current={i === step ? "step" : undefined}>
            <div className={`h-1 rounded-full transition-colors duration-500 ${i <= step ? "bg-brand" : "bg-line"}`} />
            <p className={`mt-2.5 text-[13px] font-semibold ${i === step ? "text-brand" : "text-ink-muted"}`}>
              <span className="hidden sm:inline">0{i + 1} · </span>
              {label}
            </p>
          </li>
        ))}
      </ol>

      <form
        action={submit}
        className="mt-10"
        onSubmit={(e) => {
          // Only the final step submits; earlier steps advance via Continue.
          if (step < steps.length - 1) e.preventDefault();
        }}
      >
        {/* Spam protection */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label>
            Website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
          </label>
        </div>

        {/* Step 1 */}
        <fieldset ref={(el) => { fieldsets.current[0] = el; }} hidden={step !== 0}>
          <legend className="font-display text-[22px] leading-[1.25] tracking-[-0.02em] sm:text-[24px] font-semibold">What would you like help with?</legend>
          <p className="mt-2 text-[15px] text-ink-muted">Choose the option closest to your need — we&apos;ll refine it together.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {enquiryTypes.map((t) => (
              <label
                key={t.value}
                className="group relative flex cursor-pointer items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-line transition-all hover:ring-brand/30 has-[:checked]:bg-brand-tint/60 has-[:checked]:ring-2 has-[:checked]:ring-brand has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand-light"
              >
                <input
                  type="radio"
                  name="topic"
                  value={t.value}
                  checked={values.topic === t.value}
                  onChange={set("topic")}
                  required
                  className="peer sr-only"
                />
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-tint text-brand transition-colors peer-checked:bg-ink peer-checked:text-on-dark">
                  <Icon name={t.icon} className="size-5" />
                </span>
                <span>
                  <span className="block text-[16px] font-semibold tracking-tight">{t.label}</span>
                  <span className="mt-0.5 block text-[13px] text-ink-muted">{t.hint}</span>
                </span>
                <span className="absolute top-4 right-4 grid size-5 place-items-center rounded-full ring-1 ring-line transition-all peer-checked:bg-brand peer-checked:text-on-dark peer-checked:ring-brand">
                  <Icon name="check" className="size-3" />
                </span>
              </label>
            ))}
          </div>
          <FieldError message={serverErrors.topic} />
          {values.topic === "product" && (
            <div className="mt-6">
              <Label htmlFor="product">Which product?</Label>
              <select id="product" name="product" value={values.product} onChange={set("product")} required className={inputCls}>
                <option value="">Select a product</option>
                {products.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.name} — {p.category}
                  </option>
                ))}
              </select>
              <FieldError message={serverErrors.product} />
            </div>
          )}
          {values.topic !== "product" && <input type="hidden" name="product" value="" />}
        </fieldset>

        {/* Step 2 */}
        <fieldset ref={(el) => { fieldsets.current[1] = el; }} hidden={step !== 1}>
          <legend className="font-display text-[22px] leading-[1.25] tracking-[-0.02em] sm:text-[24px] font-semibold">Tell us about the project</legend>
          <p className="mt-2 text-[15px] text-ink-muted">
            What are you trying to improve? Describe the current situation, the systems involved and the outcome you need.
          </p>
          <div className="mt-8">
            <Label htmlFor="description">Project description</Label>
            <textarea
              id="description"
              name="description"
              rows={7}
              required
              minLength={20}
              maxLength={4000}
              value={values.description}
              onChange={set("description")}
              placeholder="e.g. We run three branches on spreadsheets and a standalone accounting package. We need inventory, purchasing and finance in one system with approvals…"
              className={`${inputCls} h-auto resize-y py-4 leading-relaxed`}
            />
            <div className="mt-2 flex justify-between text-[12px] text-ink-muted">
              <span>Please don&apos;t include passwords or confidential data.</span>
              <span className="tabular-nums">{values.description.length}/4000</span>
            </div>
            <FieldError message={serverErrors.description} />
          </div>
          <ChipGroup label="Expected timeline (optional)" name="timeline" options={timelines} value={values.timeline} onChange={set("timeline")} />
          <ChipGroup label="Budget range (optional)" name="budget" options={budgets} value={values.budget} onChange={set("budget")} />
        </fieldset>

        {/* Step 3 */}
        <fieldset ref={(el) => { fieldsets.current[2] = el; }} hidden={step !== 2}>
          <legend className="font-display text-[22px] leading-[1.25] tracking-[-0.02em] sm:text-[24px] font-semibold">How can we reach you?</legend>
          <p className="mt-2 text-[15px] text-ink-muted">We&apos;ll use these details only to respond to your enquiry.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="name">Full name</Label>
              <input id="name" name="name" required minLength={2} maxLength={120} autoComplete="name" value={values.name} onChange={set("name")} className={inputCls} />
              <FieldError message={serverErrors.name} />
            </div>
            <div>
              <Label htmlFor="email">Work email</Label>
              <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" value={values.email} onChange={set("email")} className={inputCls} />
              <FieldError message={serverErrors.email} />
            </div>
            <div>
              <Label htmlFor="organization">Organization</Label>
              <input id="organization" name="organization" required minLength={2} maxLength={160} autoComplete="organization" value={values.organization} onChange={set("organization")} className={inputCls} />
              <FieldError message={serverErrors.organization} />
            </div>
            <div>
              <Label htmlFor="role" optional>
                Role
              </Label>
              <input id="role" name="role" maxLength={120} autoComplete="organization-title" value={values.role} onChange={set("role")} className={inputCls} />
            </div>
          </div>
        </fieldset>

        {/* Step 4 */}
        <fieldset ref={(el) => { fieldsets.current[3] = el; }} hidden={step !== 3}>
          <legend className="font-display text-[22px] leading-[1.25] tracking-[-0.02em] sm:text-[24px] font-semibold">Review your enquiry</legend>
          <dl className="mt-8 divide-y divide-line overflow-hidden rounded-2xl bg-white ring-1 ring-line">
            <ReviewRow label="Need" value={`${topic?.label ?? "—"}${product ? ` — ${product.name}` : ""}`} onEdit={() => go(0)} />
            <ReviewRow label="Description" value={values.description} onEdit={() => go(1)} multiline />
            <ReviewRow label="Timeline · Budget" value={`${values.timeline || "Not specified"} · ${values.budget || "Not specified"}`} onEdit={() => go(1)} />
            <ReviewRow
              label="Contact"
              value={`${values.name} · ${values.email}\n${values.organization}${values.role ? ` · ${values.role}` : ""}`}
              onEdit={() => go(2)}
              multiline
            />
          </dl>
          <label className="mt-6 flex cursor-pointer items-start gap-3 text-[15px] leading-relaxed text-ink-muted">
            <input
              type="checkbox"
              name="consent"
              required
              checked={values.consent === "on"}
              onChange={set("consent")}
              className="mt-1 size-4.5 shrink-0 accent-brand"
            />
            <span>
              I agree that Techpoint may use these details to respond to my enquiry, as described in the{" "}
              <Link href="/privacy" className="font-medium text-brand underline underline-offset-4">
                privacy notice
              </Link>
              .
            </span>
          </label>
          <FieldError message={serverErrors.consent} />
        </fieldset>

        {state.status === "error" && (
          <p role="alert" className="mt-8 flex items-start gap-3 rounded-2xl bg-red-50 p-4 text-[15px] text-red-800 ring-1 ring-red-200">
            <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-red-600 text-[11px] font-bold text-white">!</span>
            {state.message}
          </p>
        )}

        <div className="mt-10 flex items-center justify-between gap-4 border-t border-line pt-8">
          {step > 0 ? (
            <button type="button" onClick={() => go(step - 1)} className="inline-flex h-12 items-center gap-2 rounded-full px-5 text-[15px] font-medium text-ink-muted ring-1 ring-ink/15 transition-colors hover:bg-ink/4">
              <Icon name="arrow" className="size-4 rotate-180" />
              Back
            </button>
          ) : (
            <span />
          )}
          {step < steps.length - 1 ? (
            <button
              type="button"
              onClick={() => validateStep() && go(step + 1)}
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-ink px-7 text-[15px] font-medium text-on-dark transition-colors hover:bg-ink-soft">
              Continue
              <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          ) : (
            <SubmitButton />
          )}
        </div>
      </form>
    </div>
  );
}

const inputCls =
  "mt-2 block h-13 w-full rounded-xl bg-white px-4 text-[15px] text-ink ring-1 ring-line transition-shadow outline-none placeholder:text-ink-muted/70 focus:ring-2 focus:ring-brand";

function Label({ htmlFor, children, optional }: { htmlFor: string; children: React.ReactNode; optional?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="text-[14px] font-medium text-ink">
      {children}
      {optional && <span className="ml-1.5 font-normal text-ink-muted">(optional)</span>}
    </label>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-2 text-[13px] text-red-700">
      {message}
    </p>
  );
}

function ChipGroup({
  label,
  name,
  options,
  value,
  onChange,
}: {
  label: string;
  name: string;
  options: readonly string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="mt-8" role="radiogroup" aria-label={label}>
      <p className="text-[14px] font-medium text-ink">{label}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((o) => (
          <label
            key={o}
            className="cursor-pointer rounded-full bg-white px-4 py-2.5 text-[14px] text-ink-muted ring-1 ring-line transition-all hover:ring-brand/30 has-[:checked]:bg-ink has-[:checked]:text-on-dark has-[:checked]:ring-ink has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand-light"
          >
            <input type="radio" name={name} value={o} checked={value === o} onChange={onChange} className="sr-only" />
            {o}
          </label>
        ))}
      </div>
    </div>
  );
}

function ReviewRow({ label, value, onEdit, multiline }: { label: string; value: string; onEdit: () => void; multiline?: boolean }) {
  return (
    <div className="flex gap-4 px-5 py-4">
      <div className="min-w-0 flex-1">
        <dt className="text-[13px] font-semibold text-ink-muted">{label}</dt>
        <dd className={`mt-1.5 text-[15px] text-ink ${multiline ? "line-clamp-4 whitespace-pre-line" : ""}`}>{value || "—"}</dd>
      </div>
      <button type="button" onClick={onEdit} className="self-start text-[13px] font-medium text-brand hover:underline">
        Edit
      </button>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex h-12 items-center gap-2 rounded-full bg-brand-light px-7 text-[15px] font-semibold text-ink transition-colors hover:bg-brand-light disabled:cursor-wait disabled:opacity-70"
    >
      {pending ? (
        <>
          <span className="size-4 animate-spin rounded-full border-2 border-forest-950/30 border-t-forest-950" />
          Sending…
        </>
      ) : (
        <>
          Submit enquiry
          <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-0.5" />
        </>
      )}
    </button>
  );
}

function Success({ name, reference }: { name: string; reference: string }) {
  return (
    <div role="status" className="rounded-4xl bg-white p-8 ring-1 ring-line sm:p-12">
      <span className="grid size-14 place-items-center rounded-2xl bg-ink text-brand-light">
        <Icon name="check" className="size-6" />
      </span>
      <h2 className="mt-8 text-[30px] leading-[1.15] tracking-[-0.025em] sm:text-[36px]">
        Thank you{name ? `, ${name}` : ""}. Your enquiry is with us.
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-ink-muted">
        Reference <span className="rounded-md bg-brand-tint px-2 py-0.5 font-semibold tabular-nums text-[15px] text-ink">{reference}</span>
      </p>
      <ol className="mt-10 space-y-5">
        {[
          ["We review your enquiry", `A member of our team reads every enquiry and replies within ${company.responseTime}.`],
          ["We arrange a discovery conversation", "If there's a fit, we'll suggest a time to discuss your requirements and constraints."],
          ["We propose a sensible first step", "That might be a scoped proposal, a product demo, or a short assessment."],
        ].map(([t, d], i) => (
          <li key={t} className="flex gap-4">
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-tint text-[13px] font-semibold tabular-nums text-ink">{i + 1}</span>
            <div>
              <p className="font-semibold tracking-tight">{t}</p>
              <p className="mt-0.5 text-[15px] text-ink-muted">{d}</p>
            </div>
          </li>
        ))}
      </ol>
      <Link href="/" className="mt-10 inline-flex items-center gap-2 text-[15px] font-medium text-brand">
        Back to home
        <Icon name="arrow" className="size-4" />
      </Link>
    </div>
  );
}
