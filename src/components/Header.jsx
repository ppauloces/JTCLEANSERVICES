const Header = () => {
    return (
        <header className="fixed top-0 w-full bg-white shadow-md py-4 px-6 z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* Logo da empresa */}
                <a href="#">
                    <img src="/src/assets/logo.png" alt="J&T CleanServices Logo" className="h-12 md:h-16 object-contain" />
                </a>

                {/* Menu de Navegação 
                <nav>
                    <ul className="flex space-x-6 text-gray-700 font-medium">
                        <li><a href="#services" className="hover:text-blue-600">Serviços</a></li>
                        <li><a href="#testimonials" className="hover:text-blue-600">Depoimentos</a></li>
                        <li><a href="#contact" className="hover:text-blue-600">Contato</a></li>
                    </ul>
                </nav>*/}
            </div>
        </header>
    );
};

export default Header;
