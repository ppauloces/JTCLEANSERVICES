const services = [
    {
      title: "Limpeza Doméstica",
      image: "/servico1.webp",
      description: [
        "Limpeza geral e detalhada de residências.",
        "Serviços regulares ou pontuais, conforme sua preferência.",
        "Limpeza de cozinhas, banheiros, quartos, salas e áreas externas."
      ]
    },
    {
      title: "Limpeza de Condomínios",
      image: "/service2.webp",
      description: [
        "Manutenção de áreas comuns (hall de entrada, elevadores, escadas, etc.).",
        "Limpeza de piscinas, jardins e garagens.",
        "Serviços programados para garantir a higiene e a segurança dos moradores."
      ]
    },
    {
      title: "Limpeza de Ginásios e Academias",
      image: "/servico3.webp",
      description: [
        "Higienização de equipamentos, pisos e vestiários.",
        "Controle de odores e desinfecção de superfícies.",
        "Serviços especializados para garantir um ambiente saudável para os usuários."
      ]
    },
    {
      title: "Limpeza de Prédios Comerciais",
      image: "/servico4.webp",
      description: [
        "Limpeza de escritórios, salas de reunião e áreas comuns.",
        "Serviços diários, semanais ou mensais, conforme a necessidade.",
        "Uso de produtos eco-friendly para um ambiente sustentável."
      ]
    }
  ];
  
  const Services = () => {
    return (
      <section className="py-8 bg-gray-100 text-center">
        <h2 className="text-3xl py-8 md:text-4xl font-bold text-[#0071bc]">NOSSOS SERVIÇOS</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-8 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-[300px] md:h-[350px] flex flex-col justify-end rounded-lg shadow-lg overflow-hidden p-6"
              style={{ backgroundImage: `url(${service.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              {/* Sobreposição escura para legibilidade */}
              <div className="absolute inset-0 bg-black/70"></div>
  
              {/* Conteúdo */}
              <div className="relative z-10 text-left text-white">
                <h3 className="text-xl md:text-2xl font-bold">{service.title}</h3>
                <ul className="mt-2 text-sm md:text-base space-y-1">
                  {service.description.map((desc, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 bg-[#0071bc] rounded-full mr-2 mt-2"></span> {/* Pequeno ponto azul */}
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Services;
  