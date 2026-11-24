import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../layout/Container.jsx";
import Logo from "../ui/Logo.jsx";
import Icon from "../ui/Icon.jsx";

function Menu({ isMenuOpen, setIsMenuOpen }) {

    const options = [
        { to: "/#inicio", text: "Início" },
        { to: "/#sobre", text: "Sobre mim" },
        { to: "/#servicos", text: "Serviços" },
        { to: "/#produtos", text: "Produtos" },
        { to: "/#blog", text: "Blog" },
        { to: "/#contato", text: "Contato" }
    ];

    return (
        <ul className={`
            ${isMenuOpen ? "h-fit opacity-100" : "h-0 opacity-0 overflow-hidden"}
            absolute top-[66px] left-0
            w-full flex flex-col gap-1
            px-3 pb-5
            bg-(--color-brown-95)
            text-(--color-text-secondary)
            transition-opacity duration-300

            lg:static lg:opacity-100 lg:h-fit
            lg:w-fit lg:flex-row lg:gap-3
            lg:p-0 lg:bg-transparent
        `}>
            {options.map(op => (
                <li 
                    key={op.to}
                    className="
                        relative
                        bg-(--color-white-10)
                        border-b border-(--color-gold-300)

                        lg:border-none lg:bg-transparent
                        lg:after:inline-block 
                        lg:after:absolute lg:after:bottom-0 lg:after:left-0
                        lg:after:h-px lg:after:w-0
                        lg:after:bg-(--color-gold-300)
                        lg:after:transition-all lg:after:duration-500

                        lg:hover:after:w-full
                    "
                >
                    <Link 
                        to={op.to}
                        className="
                            inline-block w-full px-2 py-1
                            uppercase text-[0.9rem]
                            tracking-widest

                            lg:px-1
                            lg:transition-colors lg:duration-300
                            lg:hover:text-(--color-gold-300)
                        "
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {op.text}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

function MenuButton({ isMenuOpen, setIsMenuOpen }) {

    return (
        <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden cursor-pointer"
            aria-label={`${isMenuOpen ? "Fechar" : "Abrir"} menu de navegação`}
        >
            <Icon name={isMenuOpen ? "close" : "menu" } />
        </button>
    );
}

function WhatsAppButton() {

    return (
        <a 
            href="https://wa.me/5547991181188"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir para aconversa por WhatsApp"
            className="
                hidden lg:flex
                items-center gap-2
                px-3 py-2
                border border-(--color-text-secondary)
                text-(--color-text-secondary)
                transition-color duration-300
                hover:border-(--color-gold-300)
                hover:text-(--color-gold-300)

                [&>svg]:transition-colors [&>svg]:duration-300
                hover:[&>svg]:fill-(--color-gold-400)
            "
        >
            <Icon name="whatsapp" size={20}/> 
            <span className="
                text-[0.9rem] 
                uppercase tracking-widest
            ">
                Vamos Conversar
            </span>
        </a>
    );

}

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
        
    }, []);

    return (
        <header className={`
            fixed top-0 z-50
            w-full max-w-(--container-page)
            transition-colors duration-300
            ${ isScrolled ? "bg-transparent" : "bg-(--color-brown-95)"}
            backdrop-blur-md
        `}>
            <Container>
                <nav className="
                    relative p-3 
                    flex items-center justify-between
                ">
                    <Logo />

                    <Menu 
                        isMenuOpen={isMenuOpen} 
                        setIsMenuOpen={setIsMenuOpen}
                    />
                
                    <MenuButton 
                        isMenuOpen={isMenuOpen} 
                        setIsMenuOpen={setIsMenuOpen} 
                    />

                    <WhatsAppButton />
                </nav>
            </Container>
        </header>
    );
}

export default Header;