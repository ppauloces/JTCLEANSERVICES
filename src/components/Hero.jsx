const Hero = () => {
    return (
        <section
            className="h-screen flex flex-col justify-center items-center text-white text-center relative bg-cover bg-center bg-no-repeat pt-20"
            style={{ backgroundImage: "url('/hero2.webp')" }}
        >
            {/* Sobreposição sutil para melhorar a legibilidade sem cobrir o header */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

            {/* Conteúdo centralizado e destacado */}
            <div className="relative z-10 max-w-3xl p-12">
                <h1 className="text-5xl md:text-6xl font-extrabold uppercase drop-shadow-lg">
                    A Limpeza que Faz Diferença
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-200 drop-shadow-md">
                    Profissionalismo, eficiência e cuidado para tornar seu ambiente impecável.
                </p>

                {/* Botão de Ação */}
                <a
                    href="https://wa.me/351969032346"
                    className="mt-6 inline-block bg-[#D4AF37] text-[#0071bc] font-bold text-lg px-6 py-3  shadow-md"
                >
                    Solicitar Orçamento
                </a>







            </div>
        </section>
    );
};

export default Hero;
