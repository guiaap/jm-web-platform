import { Link, type To } from "react-router-dom";
import { useInView } from "../../hooks/useInView.js";

interface HookButtonProps { 
    to?: To; 
    ariaLabel?: string; 
    text: string; 
    index?: number; 
}

function HookButton({ 
    to = "/", 
    ariaLabel,
     text, 
     index = 0 
}: HookButtonProps) {

    const isEven = index % 2 === 0;

    const { ref, isVisible} = useInView();

    return (

        <Link
            ref={ref}
            to={to}
            aria-label={ariaLabel}
            className={`
                w-fit px-5 py-3
                text-[0.9rem] text-(--color-brown-900)
                font-medium uppercase tracking-widest
                transition-all duration-500
                hover:shadow-(--shadow-accent-golden)
                ${isVisible ? "opacity-100 translate-0" : "opacity-0 translate-y-10" }
                ${ isEven 
                    ? 
                    `bg-(--color-gold-500) hover:bg-(--color-gold-400) hover:-translate-y-1.25
                        `
                    : 
                    ` border-[1.2px] border-(--color-white) 
                    text-(--color-white) 
                    hover:text-(--color-gold-400) 
                    hover:text-shadow-(--shadow-accent-golden)
                    hover:border-(--color-gold-500)
                    `
                }
            `}> 
            {text}
        </Link>

    );
}

export default HookButton;