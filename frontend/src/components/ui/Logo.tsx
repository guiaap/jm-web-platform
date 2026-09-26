import { Link } from "react-router-dom";
import logoImage from "../../assets/images/logo.png";

function Logo() {

    return (

        <Link 
            to="/"
            aria-label="Ir para a página inicial"
            className="flex gap-2 items-center"
        >
            <img 
                src={logoImage} 
                alt="Logo da marca Joelma Matias | Gestão Inteligente"
                className="h-10 w-10"
             />

             <div className="flex flex-col leading-tight">

                <span className="text-[1.4rem] font-serif font-bold">
                    Joelma Matias
                </span>

                <span className="
                    text-[0.7rem] text-(--color-gold-500)
                    uppercase tracking-widest
                ">
                    Gestão Inteligente
                </span>

             </div>

        </Link>
    );
}

export default Logo;