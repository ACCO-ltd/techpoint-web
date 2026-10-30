# Techpoint Solutions — corporate website

Next.js 16 (App Router, Cache Components) · TypeScript · Tailwind CSS v4 · Zod.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

> Windows note: Hyper-V reserves some port ranges (check with
> `netsh interface ipv4 show excludedportrange protocol=tcp`). If a port fails
> with `EACCES`, use another, e.g. `npm run dev -- -p 4321`.

## Where things live

| Path | Purpose |
| --- | --- |
| `src/content/site.ts` | **All public copy**: positioning, vision, mission, tagline, the six practices, products, process, differentiators. Edit here, not in pages. |
| `src/app/*` | Pages: home, solutions (+6 practice pages), products (+detail pages), how-we-work, company, our-work, contact, privacy. Old solution URLs redirect in `next.config.ts`. |
| `src/app/contact/` | Multi-step project enquiry: client form, Zod schema, server action |
| `src/lib/enquiry-delivery.ts` | Sends enquiries by email (Resend). Swap for a CRM later. |
| `src/components/illustrations/` | Animated systems map, coded product interfaces, solution diagrams |
| `public/images/` | Photography (Unsplash licence) |

## Environment

Copy `.env.example` to `.env.local`. Without `RESEND_API_KEY` and
`ENQUIRY_TO_EMAIL`, enquiries are **logged in development** and **rejected in
production**, so leads are never silently lost.

## Launch checklist

Everything marked `CONFIRM` in the code needs a decision before going live:

- [ ] Product status, ownership and public URLs for Sukaan, Rukna and Invoice generator (`products` in `site.ts`; set `externalUrl` to show a "Visit" button)
- [ ] Replace illustrative product interfaces with approved real screenshots
- [x] Logo, favicon, app icon and share image from Techpoint-Brand-Kit (`public/brand`, `src/app`)
- [ ] Office city/address, phone, registration details, founding year, leadership profiles (`company` page)
- [ ] Response-time commitment (`company.responseTime`, currently "two business days")
- [ ] Production domain (`NEXT_PUBLIC_SITE_URL`), verified sending domain in Resend
- [ ] Privacy notice reviewed
- [ ] Privacy-conscious analytics with an enquiry-submitted conversion event
- [ ] Named owner for incoming enquiries and content updates
- [ ] Case studies — add only with client approval and verified outcomes (`/our-work`)
- [ ] Core values from the corporate profile (`differentiators` note in `site.ts`)
- [ ] Confirm the three delivery teams map to the six practices as shown (`deliveryGroups`)
- [ ] Confirm the evidence offered on `/our-work` can be provided on request
- [ ] Add Insights to the navigation once the first articles are ready
- [ ] Refresh the share image (`src/app/opengraph-image.png`) with the new tagline
