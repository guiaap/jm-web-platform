import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Logo from "../ui/Logo";
import Icon from "../ui/Icon";

interface MenuProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MenuOption { 
    to: string; 
    text: string; 
}

function Menu({ isOpen, setIsOpen }: MenuProps) {

    const options: MenuOption[] = [
        { to: "/#inicio", text: "Início" },
        { to: "/#sobre", text: "Sobre Mim" },
        { to: "/#servicos", text: "Serviços" },
        { to: "/#produtos", text: "Produtos" },
        { to: "/#blog", text: "Blog" },
        { to: "/#contato", text: "Contato" },
    ];

    return (
        <ul className={`
            absolute lg:static top-18.5 left-0
            w-full lg:w-auto
            flex flex-col lg:flex-row lg:gap-3
            bg-(--color-brown-900) lg:bg-transparent
            transition-all duration-500
            ${ isOpen 
                ? "max-h-75 pt-3 pb-5 px-5 opacity-100" 
                : "max-h-0 overflow-hidden opacity-0"
            }
            lg:max-h-75 lg:opacity-100
        `}>
            {
                options.map(op => (
                    <li key={op.to}>
                        <Link
                            to={op.to}
                            aria-label={`ir para a seção ${op.text}`}
                            onClick={() => setIsOpen(false)}
                            className="
                                relative
                                flex justify-center
                                p-2 lg:p-1
                                text-[0.9rem]
                                uppercase tracking-widest
                                border-b lg:border-none
                                border-b-(--color-white-50)
                                transition-all duration-300
                                hover:text-(--color-gold-500)
                                hover:text-shadow-(--shadow-accent-golden)
                                after:content-[''] after:absolute
                                after:bottom-0 after:left-0
                                after:h-[1.5px] after:w-0
                                after:bg-(--color-gold-500)
                                after:transition-all after:duration-300
                                hover:after:w-full
                            "
                        >
                            {op.text}
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
}


function MenuButton({ isOpen, setIsOpen }: MenuProps) {

    return (
        <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={`${isOpen ? "Fechar" : "Abrir"} menu de navegação`}
            className="lg:hidden"
        >
            <Icon name={ isOpen ? "close" : "menu"} />
        </button>
    );
}

function HeaderWhatsAppButton() {

    return (
        <a 
            href="https://wa.me/5547991181188"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conversar por WhatsApp"
            className="
               hidden lg:flex gap-2 items-center
               px-3 py-2
               border-[1.5px] border-(--color-white)
               transition-all duration-300
               [&>svg]:transition-all [&>svg]:duration-300
               hover:border-(--color-gold-500)
               hover:text-(--color-gold-500)
               hover:text-shadow-(--shadow-accent-golden)
               hover:shadow-(--shadow-accent-golden)
               hover:[&>svg]:fill-(--color-gold-500)
               hover:[&>svg]:drop-shadow-(--shadow-accent-golden)
            "
        >
            <Icon name="whatsapp" size="20px" />

            <span className="text-[0.9rem] uppercase tracking-widest">
                Vamos Conversar
            </span>
        </a>
    );
}

function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {

        const handleListener = () => {
            setIsScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleListener);

        return () => {
            window.removeEventListener("scroll", handleListener);
        };
    });

    return (
        <header className={`
            sticky lg:fixed top-0 z-50 
            w-full max-w-(--container-page)
            bg-(--color-brown-900)
            transition-colors duration-300
            backdrop-blur-xs
            ${isScrolled ? "lg:bg-(--color-brown-95)" : "lg:bg-transparent"}
        `}>
            <Container>
                <nav className="
                    relative flex items-center justify-between 
                    p-4 text-(--color-text-secondary)
                ">
                    <Logo />
                    <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
                    <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
                    <HeaderWhatsAppButton />
                </nav>
            </Container>
        </header>
    );
}

export default Header;