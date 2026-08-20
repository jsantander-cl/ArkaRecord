import WhatsAppIcon from "./WhatsAppIcon";
import { EMPRESA } from "../data/empresa";

export default function WhatsAppButton() {
  return (
    <a
      href={EMPRESA.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 animate-[whatsappPulse_2.5s_ease-in-out_infinite]"
    >
      <WhatsAppIcon className="w-7 h-7 text-white" />
    </a>
  );
}