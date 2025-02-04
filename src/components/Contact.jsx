import { FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-[#0071bc] text-white text-center">
      <h3 className="text-3xl font-bold mb-6 uppercase tracking-wide">Entre em Contato</h3>

      <div className="max-w-3xl mx-auto space-y-6 text-lg">
        {/* Instagram */}
        <div className="flex items-center justify-center space-x-3">
          <FaInstagram className="text-2xl text-white" />
          <p>
            <span className="font-semibold">Instagram:</span> 
            <a href="https://instagram.com/JT_cleanservices" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-200 ml-1">
              @JT_cleanservices
            </a>
          </p>
        </div>

        {/* Contato Geral */}
        <div className="flex items-center justify-center space-x-3">
          <FaPhoneAlt className="text-2xl text-white" />
          <p>
            <span className="font-semibold">Telefone:</span> 
            <a href="https://wa.me/351969032346" className="underline hover:text-gray-200 ml-1">
              +351 969 032 346
            </a>
          </p>
        </div>

        {/* Limpeza de Estofos */}
        <div className="flex items-center justify-center space-x-3">
          <FaWhatsapp className="text-2xl text-white" />
          <p>
            <span className="font-semibold">Limpeza de Estofos:</span> 
            <a href="https://wa.me/351920459866" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-200 ml-1">
              +351 920 459 866
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
