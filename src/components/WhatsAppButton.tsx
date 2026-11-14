import { company } from "@/content/site";

export const whatsappHref = company.whatsapp ? `https://wa.me/${company.whatsapp.replace(/\D/g, "")}` : null;

/** Floating WhatsApp shortcut. Renders nothing until a number is set in the site content. */
export function WhatsAppButton() {
  if (!whatsappHref) return null;
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Techpoint on WhatsApp"
      className="fixed right-4 bottom-4 z-40 grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_12px_30px_-8px_rgba(0,0,0,0.35)] transition-transform hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7 fill-current">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.700 6.700 0 0 1-3.300-2.900c-.3-.4.300-.4.700-1.300.1-.2 0-.3 0-.5l-.800-1.800c-.2-.5-.4-.4-.600-.400h-.500c-.2 0-.5.100-.700.300-.8.800-1 1.900-.800 2.900.4 1.500 1.300 2.900 2.500 4 1.700 1.500 3.300 2.100 4.700 2.200.900 0 1.800-.500 2.200-1.300.2-.500.2-.900.200-1 0-.100-.200-.200-.400-.300Z" />
      </svg>
    </a>
  );
}
