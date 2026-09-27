import { useInView } from "../../hooks/useInView";

interface EyebrowProps {
    text: string;
    color?: string;
}

function Eyebrow({ text, color="--color-gold-500" }: EyebrowProps) {

    const { ref, isVisible } = useInView();

    return (
        <div
            ref={ref}
            className={`
                mb-5 transition-all duration-700
                ${ isVisible ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0" }
            `}
        >
            <p
                style={{ color: `var(${color})` }}
                className={`
                    flex items-center gap-2
                    font-medium text-[clamp(0.7rem,1vw,0.8rem)]
                    uppercase tracking-widest
                    before:content-[''] before:inline-block
                    before:w-5 before:h-px
                    before:bg-current       
                `}
            >
                {text}
            </p>
        </div>
    )
}

export default Eyebrow;