const WhyChoose = () => {
    return (
      <section className="bg-yellow-500 py-16 text-center text-white">
        {/* Título */}
        <h2 className="text-2xl md:text-4xl font-extrabold">
          Por que escolher a <span className="text-[#0071bc]">J&T CLEAN?</span>
        </h2>
        <p className="px-4 mt-4 text-base md:text-xl text-[#0071bc] max-w-3xl mx-auto">
          Somos especialistas em limpeza profissional, garantindo qualidade, eficiência e compromisso com a satisfação dos nossos clientes.
        </p>
  
        {/* Grid com 4 itens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-8 text-left">
          {[
            { title: "Profissionais Qualificados", text: "Equipe treinada para garantir excelência." },
            { title: "Produtos de Qualidade", text: "Utilizamos produtos seguros e eficazes." },
            { title: "Flexibilidade", text: "Adaptamos nossos serviços às suas necessidades." },
            { title: "Satisfação Garantida", text: "Nosso compromisso é superar suas expectativas." }
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              {/* Traço Azul */}
              <div className="ml-4 w-1 h-6 bg-[#0071bc]"></div>
              {/* Texto */}
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-[#0071bc]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default WhyChoose;
  