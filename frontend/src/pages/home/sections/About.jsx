import Container from "../../../components/layout/Container.jsx";
import Eyebrow from "../../../components/ui/Eyebrow.jsx";
import SectionTitle from "../../../components/ui/SectionTitle.jsx";
import avatarImageURL from "../../../assets/images/joelma.jpeg";
import HookButton from "../../../components/ui/HookButton.jsx";
import { useInView } from "../../../hooks/useInView.js";
import Icon from "../../../components/ui/Icon.jsx";

function Initials() {

    return (
        <span className="
            pointer-events-none select-none
            absolute top-[5%] md:top-[10%] lg:top-[15%]
            right-0 z-0
            font-serif leading-0
            text-(--color-gold-400)
            text-[clamp(10rem,20vw,20rem)]
            opacity-10
        ">
            JM
        </span>
    );
}

function Article() {

    const { ref, isVisible } = useInView();

    return (

        <article className="
            relative
            order-1 lg:order-2 
            max-w-(--container-md)
        ">
            <Eyebrow color="var(--color-text-primary)">
                QUEM SOU EU
            </Eyebrow>

            <SectionTitle text01="Sobre" text02="Mim" />

            <Initials />

            <div 
                ref={ref}
                className={`
                    flex flex-col gap-4
                    text-[clamp(0.9rem,3vw,1rem)]
                    transition-opacity duration-500
                    ${ isVisible ? "opacity-100" : "opacity-0" }
                `}
            >
                <p>
                    Sou formada em Administração de Empresas e pós-graduada em 
                    Gestão Estratégica de Pessoas. Complemento minha atuação com 
                    especializações em Segurança do Trabalho, Gestão de Cargos e Salários, 
                    Gestão de Contratos, Programação Neurolinguística (PNL) e Administração 
                    de Condomínios.
                </p>
                <p>
                    Atuo há mais de 20 anos na área administrativa, com foco de 15+ anos 
                    em Departamento Pessoal. Tenho experiência sólida nos setores de 
                    construção civil e eletromecânica, onde desenvolvi expertise em 
                    gestão de pessoas, processos e segurança do trabalho.
                </p>

                <p className="
                    pl-3 
                    font-serif italic 
                    text-[clamp(1.3rem,3vw,1.5rem)]
                    border-l-2 border-(--color-gold-600)
                ">
                    "Do planejamento à execução — com organização, conformidade e resultados 
                    práticos."
                </p>
                <p>
                    Também sou Administradora Judicial e Perita registrada no CRA-SC, 
                    o que amplia minha visão técnica e jurídica para apoiar empresas em 
                    decisões seguras e eficientes.
                </p>
                <ul className="
                    [&>li]:flex [&>li]:items-center [&>li]:gap-2
                    [&>li]:before:content-[''] 
                    [&>li]:before:h-1 [&>li]:before:w-1 
                    [&>li]:before:rounded-full
                    [&>li]:before:bg-(--color-gold-600)
                ">
                    <li>Atendimento próximo e humanizado.</li>
                    <li>Processos claros, com rotinas e indicadores.</li>
                    <li>Entregas objetivas e aplicáveis no dia a dia.</li>
                </ul>

                <HookButton to="#contato">ENTRE EM CONTATO</HookButton>
            </div>  
        </article>
    );
}

function Diferentials() {

    return (
        <ul className="
            absolute z-5 -bottom-5 right-2
            flex flex-col gap-1
            text-(--color-text-secondary)
            [&>li]:flex [&>li]:items-center [&>li]:gap-1
            [&>li]:p-3
        ">
            <li className="bg-(--color-gold-500)">
                <Icon name="person" />
                <span>Atendimento Humanizado</span>
            </li>
            <li className="bg-(--color-gold-800)">
                <Icon name="bolt" />
                <span>Agilidade</span>
            </li>
            <li className="bg-(--color-brown-800)">
                <Icon name="calendar" />
                <span>20+ anos de experiência</span>
            </li>
        </ul>
    );
}

function Avatar() {

    const { ref, isVisible } = useInView();

    return (
        <div 
            ref={ref}
            className={`
                relative
                order-2 lg:order-1
                transition-all duration-700
                ${ isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
            `}>

            <div className="
                relative w-[90%] max-w-90
                before:content-['']
                before:absolute before:-top-2 before:-left-2
                before:h-full before:w-full
                before:border before:border-(--color-gold-500)
            ">
                <img 
                    src={avatarImageURL}
                    alt="Joelma Matias" 
                    className="relative block h-auto w-full"
                />
            </div>
            
            <Diferentials />
        </div>
    );
}

function About() {

    return (
        <section id="sobre">
            <Container className="
                relative
                flex flex-col lg:flex-row
                items-center justify-between gap-8
            ">

                <Article />
                <Avatar /> 
                
            </Container>
        </section>
    );
}

export default About;