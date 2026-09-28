import { useState, useEffect } from "react";
import { useInView } from "../../../hooks/useInView";
import heroBanner01 from "../../../assets/images/hero_banner_01.jpg";
import heroBanner02 from "../../../assets/images/hero_banner_02.jpg";
import heroBanner03 from "../../../assets/images/hero_banner_03.jpg";
import Container from "../../../components/layout/Container";
import Eyebrow from "../../../components/ui/Eyebrow";
import HookButton from "../../../components/ui/HookButton";

const banners = [heroBanner01, heroBanner02, heroBanner03];

function Overlay() {

    return <div className="absolute inset-0 z-5 bg-(image:--gradient-hero-overlay)"/>;
}

function VerticalDivider() {

    return (
        <div className="
            absolute top-1/2 right-1/2 z-10 
            -translate-x-1/2 -translate-y-1/2
            h-75 w-px
            bg-(image:--gradient-vertical-divider)
        "/>
    );
}

function Hero() {

    const [index, setIndex] = useState(0);

    const { ref, isVisible } = useInView();

    useEffect(() => {

        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % banners.length);
        }, 4000);

        return () => clearInterval(interval);

    }, []);

    return (
        <section 
            id="inicio"
            className="relative h-screen max-h-220"
        >
            { banners.map((banner, i) => (
                <div
                    key={i}
                    style={{ backgroundImage: `url(${banner})` }}
                    className={`
                        absolute inset-0 z-0
                        bg-center bg-cover
                        transition-opacity duration-1000
                        ${ i === index ? "opacity-100" : "opacity-0" } 
                    `}
                >
                </div>
             ))}

             <Overlay />
             <VerticalDivider />

            <Container className="
                relative z-15
                flex flex-col h-full justify-center  
                text-(--color-text-secondary)
                p-5
            ">
                <Eyebrow text="Especialista em Gestão Estratégica" />
                <h1
                    ref={ref}
                    className={`
                        font-serif text-[clamp(2.8rem,9vw,5.5rem)]
                        tracking-tight leading-none
                        text-shadow-(--shadow-accent-golden)
                        transition-all duration-700
                        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-25"}
                        `}
                >
                    Gestão estratégica, <br/>
                    <span className="text-(--color-gold-500) italic">segurança</span> e resultados.
                    </h1>
                    <p
                    ref={ref}
                    className={`
                        max-w-(--container-md) my-5
                        text-[clamp(1rem,3vw,1.2rem)] text-(--color-white-80)
                        transition-all duration-1000
                        ${ isVisible ? "opacity-100 translate-0" : "opacity-0 -translate-x-10" }
                `}>
                    Soluções personalizadas em Administração, Departamento Pessoal, Segurança do Trabalho,
                    Contratos e Gestão de Pessoas para empresas que buscam excelência e conformidade.
                </p>
                <div className="flex flex-col gap-3 md:flex-row">
                    <HookButton
                        to="/#servicos"
                        text="Conheça os Serviços"
                        ariaLabel="Ir para a seção de Serviços"
                        />
                        <HookButton
                        to="/#sobre"
                        text="Sobre mim"
                        ariaLabel="Ir para a seção Sobre Mim"
                        index={1}
                        />
                </div>
            </Container>
             

        </section>
    );
}

export default Hero;