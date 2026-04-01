
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573001234567" // 👈 tu número
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
    >
      💬
    </a>
  );
}