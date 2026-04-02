import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573225298246" // 👈 tu número
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-600 hover:bg-textPrimary text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:border hover:border-black"
    >
      <FaWhatsapp className="text-pageBase w-6 md:w-12 h-6 md:h-12 hover:scale-110 transition" />
    </a>
  );
}
