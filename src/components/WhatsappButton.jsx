import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/351969032346" // Substitua pelo número desejado
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center text-3xl transition-transform transform hover:scale-110"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsappButton;
