import { useInView } from "../../hooks/useInView.js";

function Eyebrow({ children, color="var(--color-gold-400)" }) {

    const { ref, isVisible} = useInView();

    return (
        <span 
            ref={ref}
            style={{ color }}
            className={` 
                inline-flex items-center gap-2
                text-[clamp(0.7rem,2vw,0.9rem)]
                uppercase tracking-widest
                before:content-['']
                before:block
                before:h-px before:w-3
                before:bg-current
                transition-all duration-700
                ${isVisible 
                    ? "opacity-100 translate-x-0" 
                    : "opacity-0 -translate-x-25"
                }
            `}
        >
            {children}
        </span>
    );
}

export default Eyebrow;