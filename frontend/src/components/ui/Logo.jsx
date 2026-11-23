import { Link } from "react-router-dom";
import logoImageURL from "../../assets/images/logo.png";

function Logo() {

    return (
        <Link
            to="/"
            aria-label="Voltar para a página inicial"
            className="flex items-center gap-2"
        >
            <img 
                src={logoImageURL}
                alt="Logo da marca Joelma Matias | Gestão Inteligente"
                className="h-8 w-8"
             />

             <div className="flex flex-col">
                <span className="
                    text-[1.3rem] text-(--color-text-secondary)
                    font-serif font-bold
                ">
                    Joelma Matias
                </span>
                <span className="
                    text-[0.7rem] text-(--color-gold-300)
                    uppercase
                    leading-none tracking-widest
                ">
                    GESTÃO INTELIGENTE
                </span>
             </div>
        </Link>
    );
}

export default Logo;