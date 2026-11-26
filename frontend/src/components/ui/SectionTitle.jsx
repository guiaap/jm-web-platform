import { useInView } from "../../hooks/useInView.js";

function SectionTitle({ 
    text01="text", 
    text02="text",
    color01="var(--color-text-primary)",
    color02="var(--color-gold-500)"
}) {

    const { ref, isVisible } = useInView();

    return (
        <h2
            ref={ref}
            style={{ color: color01 }}
            className={`
                flex gap-2
                font-serif
                text-(--color-text-primary)
                text-[clamp(2.4rem,6vw,3rem)]
                transition-all duration-700
                ${ isVisible 
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-15"
                }
            `}
        >
            {text01}
            <span 
                style={{ color: color02 }}
                className="text-(--color-gold-500) italic"
            >
                {text02}
            </span>
        </h2>
    );
}

export default SectionTitle;