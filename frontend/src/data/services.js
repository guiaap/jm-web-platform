import dpIconURL from "../assets/images/icon-dp.png";
import gpIconURL from "../assets/images/icon-gp.png";
import sstIconURL from "../assets/images/icon-sst.png";
import gcIconURL from "../assets/images/icon-gc.png";
import pajIconURL from "../assets/images/icon-paj.png";
import acIconURL from "../assets/images/icon-ac.png";

const services = [
    {
        id: 1,
        iconURL: dpIconURL,
        title: "Departamento Pessoal",
        items: [
            "Admissão e desligamento de colaboradores",
            "Folha de pagamento",
            "Controle de ponto e benefícios",
            "Controle de Férias e 13º Salário",
            "Suporte ao RH e Liderança",
        ],
    },
    {
        id: 2,
        iconURL: gpIconURL,
        title: "Gestão de Pessoas",
        items: [
            "Gestão de Cargos e Salários",
            "Controle e redação de políticas internas",
            "Pesquisa de Clima Organizacional",
            "Aplicação e controle de treinamentos",
        ],
    },
    {
        id: 3,
        iconURL: sstIconURL,
        title: "Segurança do Trabalho",
        items: [
            "Documentação Legal (PGR, PCMSO, LTCAT)",
            "Apoio SIPAT e ações de prevenção",
            "DDS e integração",
            "Orientações sobre riscos ocupacionais",
            "Suporte à gestão de SST",
        ],
    },
    {
        id: 4,
        iconURL: gcIconURL,
        title: "Gestão de Contratos",
        items: [
            "Elaboração e análise contratual",
            "Controle de vigência e cláusulas",
            "Gestão de obrigações e prazos",
            "Intermediação entre partes contratantes",
        ],
    },
    {
        id: 5,
        iconURL: pajIconURL,
        title: "Perícia e Administração Judicial",
        items: [
            "Administradora em processos judiciais",
            "Formulação de laudos e pareceres técnicos",
            "Suporte técnico e legal",
        ],
    },
    {
        id: 6,
        iconURL: acIconURL,
        title: "Administração de Condomínios",
        items: [
            "Gestão financeira",
            "Administração de pessoal",
            "Contratação de prestadores",
            "Consultoria em rotinas legais e trabalhistas",
            "Atendimento personalizado e transparente",
        ],
    },
];

export default services;