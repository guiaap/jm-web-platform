import { useState, useEffect } from "react";
import banner01 from "../../../assets/images/banner01.jpg";
import banner02 from "../../../assets/images/banner02.jpg";
import banner03 from "../../../assets/images/banner03.jpg";
import Container from "../../../components/layout/Container.jsx";
import Eyebrow from "../../../components/ui/Eyebrow.jsx";
import { useInView } from "../../../hooks/useInView.js";
import HookButton from "../../../components/ui/HookButton.jsx";

const bannersURLs = [banner01, banner02, banner03];

function Overlay() {

    return <div className="absolute inset-0 z-5 bg-(image:--gradient-hero-overlay)"/>
}

function Divider() {

    return (
        <div className="
            absolute
            top-1/2 right-1/2 z-10 
            -translate-x-1/2 -translate-y-1/2
            h-100 w-px
            bg-(image:--gradient-vertical-divider)
        "/>
    );
}

function Hero() {

    const [index, setIndex] = useState(0);
    const { ref, isVisible } = useInView();

    useEffect(() => {
    
        const interval = setInterval(() =>  {
            
            setIndex(prev => (prev + 1) % bannersURLs.length);

        }, 5000);

        return () => clearInterval(interval);

    }, []);

    return (
        <section 
            id="inicio"
            className="relative h-screen max-h-[700px] pt-20"
        >
            {bannersURLs.map((bannerURL, i) => (
                <div 
                    key={bannerURL}
                    style={{ backgroundImage: `url(${bannerURL})`}}
                    className={`
                        absolute inset-0
                        bg-center bg-cover
                        transition-opacity duration-1000
                        ${i === index ? "opacity-100" : "opacity-0"}
                    `}
                />
            ))}

            <Overlay />
            <Divider />

            <Container className="
                relative z-10 
                h-full p-3
                flex flex-col justify-center gap-5
            ">
                <Eyebrow>
                    ESPECIALISTA EM GESTÃO ESTRETÉGICA
                </Eyebrow>

                <h1 
                    ref={ref}
                    className={`
                        text-[clamp(2.5rem,7vw,5rem)]
                        text-(--color-text-secondary) 
                        leading-none 
                        font-serif font-medium
                        transition-all duration-700
                        ${isVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-25"
                        }
                    `}
                >
                    Gestão Estratégica, <br />
                    <span className="text-(--color-gold-400) italic">
                        Segurança
                    </span> e Resultados.
                </h1>

                <p 
                    ref={ref}
                    className={`
                        max-w-(--container-md)
                        text-(--color-white-90)
                        text-[clamp(0.9rem,2vw,1.1rem)]
                        transition-opacity duration-1000
                        ${ isVisible ? "opacity-100" : "opacity-0" }
                    `}
                    
                >
                    Soluções personalizadas em Administração, Departamento Pessoal, 
                    Segurança do Trabalho, Contratos e Gestão de Pessoas para empresas 
                    que buscam excelência e conformidade.
                </p>

                <div className="flex flex-col md:flex-row gap-3">
                    <HookButton to="/#servicos">
                        CONHEÇA OS SERVIÇOS
                    </HookButton>

                    <HookButton to="/#sobre" variate={true}>
                        SOBRE MIM
                    </HookButton>
                </div>
            </Container>
        </section>
    );
}

export default Hero;