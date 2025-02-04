const Testimonials = () => {
    const testimonials = [
      { name: "Maria S.", text: "A J&T CLEAN transformou nosso condomínio! Sempre impecável e com um atendimento incrível." },
      { name: "João P.", text: "Contratamos para limpeza do ginásio e os resultados foram surpreendentes. Recomendo!" },
      { name: "Carla M.", text: "Equipe muito profissional, serviço de alta qualidade. Meu escritório nunca esteve tão limpo!" },
    ];
  
    return (
      <section id="testimonials" className="py-16 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold text-[#0071bc] mb-10">O Que Nossos Clientes Dizem</h3>
  
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#0071bc] transition-transform duration-300 hover:scale-105"
            >
              {/* Ícone de aspas */}
              <div className="absolute top-4 left-4 text-[#0071bc] text-4xl">“</div>
  
              <p className="italic text-gray-700 text-lg">{testimonial.text}</p>
              <h4 className="font-semibold text-[#0071bc] mt-4">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  