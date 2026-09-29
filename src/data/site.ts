import svc01 from "@/assets/svc-01.jpg";
import svc02 from "@/assets/svc-02.jpg";
import svc03 from "@/assets/svc-03.jpg";
import svc04 from "@/assets/svc-04.jpg";
import svc05 from "@/assets/svc-05.jpg";
import svc06 from "@/assets/svc-06.jpg";
import svc07 from "@/assets/svc-07.jpg";
import svc08 from "@/assets/svc-08.jpg";
import svc09 from "@/assets/svc-09.jpg";
import svc10 from "@/assets/svc-10.jpg";
import svc11 from "@/assets/svc-11.jpg";
import svc12 from "@/assets/svc-12.jpg";
import galInterior from "@/assets/gal-interior.jpg";

export const WHATSAPP_URL = "#contato";

export type Service = {
  n: string;
  title: string;
  text: string;
  image: string;
};

export const services: Service[] = [
  {
    n: "01",
    title: "Lavagem Detalhada",
    text: "Limpeza minuciosa do veículo, com atenção aos detalhes da parte externa e às áreas que normalmente passam despercebidas em uma lavagem convencional. Preserva as superfícies e entrega um acabamento visual superior.",
    image: svc01,
  },
  {
    n: "02",
    title: "Higienização Interna",
    text: "Limpeza profunda do interior do veículo, cuidando de bancos, carpetes, tapetes, painéis, portas e demais superfícies internas — renovando o ambiente e removendo sujeiras acumuladas.",
    image: svc02,
  },
  {
    n: "03",
    title: "Higienização de Bancos",
    text: "Tratamento específico para bancos e estofados, com técnicas adequadas ao tipo de material, removendo sujeiras, manchas e resíduos acumulados e recuperando o aspecto de limpeza.",
    image: svc03,
  },
  {
    n: "04",
    title: "Polimento Automotivo",
    text: "Processo técnico que melhora o aspecto da pintura, recupera o brilho e reduz visualmente marcas e imperfeições superficiais, preservando o acabamento original.",
    image: svc04,
  },
  {
    n: "05",
    title: "Enceramento e Proteção",
    text: "Aplicação de produtos que protegem e conservam a superfície da pintura, proporcionando brilho, acabamento e uma camada adicional de proteção que facilita a manutenção.",
    image: svc05,
  },
  {
    n: "06",
    title: "Descontaminação de Pintura",
    text: "Remoção de contaminantes aderidos à superfície da pintura que não saem em uma lavagem convencional, preparando o veículo para etapas posteriores de correção ou proteção.",
    image: svc06,
  },
  {
    n: "07",
    title: "Cristalização / Proteção",
    text: "Serviço voltado à conservação e proteção da pintura, com acabamento mais brilhante e uma superfície mais protegida contra agentes externos por mais tempo.",
    image: svc07,
  },
  {
    n: "08",
    title: "Revitalização de Plásticos",
    text: "Tratamento das partes plásticas externas e internas do veículo, recuperando o aspecto visual e melhorando a conservação dessas superfícies.",
    image: svc08,
  },
  {
    n: "09",
    title: "Limpeza de Rodas",
    text: "Limpeza detalhada das rodas, removendo sujeiras e resíduos acumulados e proporcionando um acabamento mais limpo, uniforme e bem cuidado.",
    image: svc09,
  },
  {
    n: "10",
    title: "Higienização de Motor",
    text: "Limpeza técnica e cuidadosa do compartimento do motor, removendo sujeiras acumuladas e melhorando seu aspecto visual sem comprometer os componentes.",
    image: svc10,
  },
  {
    n: "11",
    title: "Detalhamento Automotivo",
    text: "Serviço completo para quem procura um nível superior de cuidado e acabamento — atenção minuciosa aos diferentes elementos do veículo para uma apresentação impecável.",
    image: svc11,
  },
  {
    n: "12",
    title: "Polimento de Faróis",
    text: "Recuperação estética de faróis opacos ou amarelados, melhorando o aspecto visual, a transparência e, consequentemente, a iluminação do veículo.",
    image: svc12,
  },
];

export const differentials = [
  {
    n: "01",
    title: "Detalhamento",
    text: "Atenção aos pequenos detalhes que fazem diferença no resultado final.",
  },
  {
    n: "02",
    title: "Acabamento",
    text: "Processos conduzidos com foco em um resultado visual de alto padrão.",
  },
  {
    n: "03",
    title: "Cuidado",
    text: "Tratamento adequado para cada material e superfície do veículo.",
  },
  {
    n: "04",
    title: "Qualidade",
    text: "Técnicas e produtos adequados para cada tipo de serviço.",
  },
  {
    n: "05",
    title: "Experiência",
    text: "Um atendimento diferenciado para quem valoriza o próprio veículo.",
  },
];

export const comparisons = [
  { label: "Pintura", before: svc06, after: svc04 },
  { label: "Bancos", before: svc03, after: svc02 },
  { label: "Rodas", before: svc09, after: svc01 },
  { label: "Faróis", before: svc12, after: svc05 },
  { label: "Interior", before: svc02, after: galInterior },
];

export const gallery = [
  { label: "Lavagem detalhada", image: svc01 },
  { label: "Polimento técnico", image: svc04 },
  { label: "Higienização interna", image: svc03 },
  { label: "Proteção de pintura", image: svc07 },
  { label: "Detalhamento de rodas", image: svc09 },
  { label: "Acabamento final", image: svc11 },
];

export const process = [
  {
    n: "01",
    title: "Agendamento",
    text: "O cliente escolhe o serviço desejado e agenda o melhor horário.",
  },
  {
    n: "02",
    title: "Avaliação",
    text: "O veículo é avaliado para identificar os cuidados necessários.",
  },
  {
    n: "03",
    title: "Execução",
    text: "A equipe realiza o serviço com atenção técnica a cada detalhe.",
  },
  {
    n: "04",
    title: "Entrega",
    text: "O veículo é entregue com acabamento e cuidado profissional.",
  },
];

export const contacts = [
  { label: "WhatsApp", value: "A confirmar" },
  { label: "Telefone", value: "A confirmar" },
  { label: "Instagram", value: "A confirmar" },
  { label: "Endereço", value: "A confirmar — Caxias do Sul/RS" },
  { label: "Horário de atendimento", value: "A confirmar" },
];

export const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#resultados", label: "Resultados" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
];
