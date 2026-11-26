import Container from "../../../components/layout/Container.jsx";
import Eyebrow from "../../../components/ui/Eyebrow.jsx";
import SectionTitle from "../../../components/ui/SectionTitle.jsx";
import services from "../../../data/services.js";
import { useInView } from "../../../hooks/useInView.js";

function Card({ service }) {

    const { ref, isVisible } = useInView();

    const number = String(service.id).padStart(2, "0");

    return (
        <article 
            ref={ref}
            className={`
                relative
                flex flex-col gap-3 p-4
                text-(--color-text-secondary)
                bg-(--color-gold-05)
                border border-(--color-gold-30)
                transition-all duration-600
                hover:bg-(--color-gold-10)
                hover:-translate-y-1

                after:content-['']
                after:absolute after:bottom-0
                after:left-0
                after:h-px after:w-0
                after:bg-(--color-gold-400)
                after:transition-all after:duration-700
                hover:after:w-full

                ${ isVisible 
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }
            `}
        >
            <div className="flex items-center justify-between">
                <img 
                    src={service.iconURL} 
                    alt={`Ícone de ${service.title}`}
                    className="h-25"
                 />

                 <span className="
                    font-serif text-(--color-white-20)
                    text-[clamp(3rem,5vw,4rem)]
                ">
                    {number}
                 </span>
            </div>

            <h3 className="
                font-serif
                text-[clamp(1.2rem,3vw,1.5rem)]
            ">
                {service.title}
            </h3>

            <ul className="
                text-(--color-white-70)
                text-[clamp(0.9rem,2vw,1rem)]

                [&>li]:flex [&>li]:items-center [&>li]:gap-2
                [&>li]:before:content-[''] 
                [&>li]:before:h-1 [&>li]:before:w-1 
                [&>li]:before:rounded-full
                [&>li]:before:bg-(--color-gold-600)
            ">
                {service.items.map((item, i) => (
                    <li key={i}>
                        {item}
                    </li>
                 ))}
            </ul>
        </article>
    );
}

function Services() {

    const { ref, isVisible } = useInView();

    return (
        <section 
            id="servicos"
            className="
                bg-(--color-brown-800) 
                bg-(image:--gradient-radial-overlay)
            "
        >
            <Container>
                <div className="
                    flex flex-col md:flex-row 
                    md:items-center justify-between
                ">
                    <div>
                        <Eyebrow>O QUE FAÇO</Eyebrow>

                        <SectionTitle 
                            text01="Áreas de"
                            text02="Atuação"
                            color01="var(--color-text-secondary)"
                        />
                    </div>

                    <p 
                        ref={ref}
                        className={`
                            text-[clamp(0.9rem,2vw,1rem)]
                            text-(--color-white-80) 
                            max-w-(--container-sm)
                            transition-all duration-700
                            ${ isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 translate-x-10"
                            }
                        `}
                    >
                        Soluções integradas para empresas que buscam excelência operacional, 
                        conformidade legal e gestão eficiente de pessoas.
                    </p>
                </div>

                <div className="
                    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                    gap-3
                    mt-5
                ">
                    {services.map(service => (
                        <Card
                            key={service.title} 
                            service={service}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Services;