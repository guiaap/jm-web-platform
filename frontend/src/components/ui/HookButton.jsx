import { Link } from "react-router-dom";
import { useInView } from "../../hooks/useInView.js";

function HookButton({ to="/", children, variate=false }) {

    const { ref, isVisible } = useInView();

    return (
        <Link 
            to={to}
            ref={ref}
            className={`
                text-[clamp(0.8rem,2vw,0.9rem)]
                uppercase tracking-widest
                w-fit p-3
                transition-all duration-700
                bg-(--color-gold-500)
                hover:bg-(--color-gold-300)
                ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-15"
                }
                ${variate && `
                    bg-transparent
                    text-(--color-text-secondary)
                    border border-(--color-text-secondary)
                    hover:bg-transparent
                    hover:text-(--color-gold-400)
                    hover:border-(--color-gold-400)
                `}   
            `}
        >
            {children}
        </Link>
    );
}

export default HookButton;