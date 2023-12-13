// Importações dos Ícones Das Tecnologias
import {
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiNodejsSmall,
  DiReact,
  DiSass
} from "react-icons/di";

import 'animate.css';

const tecnologias = [
  { id: "html", name: "HTML5", icons: <DiHtml5 />, text:"Como programador, tenho habilidades avançadas em HTML e JSX em React. Essas bases sólidas são essenciais, pois HTML é a espinha dorsal de qualquer projeto web." },
  { id: "css", name: "CSS3", icons: <DiCss3 />,  text:"Meu conhecimento avançado em CSS é vital em todos os meus projetos, permitindo-me criar designs impressionantes e responsivos que aprimoram a experiência do usuário." },
  { id: "sass", name: "SASS", icons: <DiSass />,  text:"Estou explorando o mundo do Sass, uma linguagem de folhas de estilo. Como iniciante, vejo seu potencial para otimizar meu CSS. Quero dominar suas vantagens para criar estilos melhores e mais eficientes." },
  { id: "javascript", name: "Javascript", icons: <DiJavascript1 />,  text:"Sou experiente em JavaScript, com projetos pessoais que demonstram meu domínio dos fundamentos da linguagem. Estou comprometido em continuar aprofundando meu conhecimento nesta linguagem versátil."},
  { id: "react", name: "React", icons: <DiReact />, text:"Embora iniciante em React, estou focando em aprofundar meus fundamentos nesta poderosa biblioteca JavaScript. Estou ansioso para criar interfaces de usuário dinâmicas e eficazes." },
  { id: "node", name: "Node.js", icons: <DiNodejsSmall />, text:"Estou nos estágios iniciais da minha jornada com Node.js. Estou dedicado a aprender seus fundamentos para criar servidores e aplicativos eficientes, aproveitando seu poderoso ambiente de tempo de execução." },
];

import style from "./Habilidades.module.css";

function Habilidades() {
  return (
    <div className={style.container}>
      <h2> Principais Tecnologias</h2>
      <hr></hr>
      <div className={`${style.tecnologia_grid} animate__animated animate__fadeInLeft`}>
        {tecnologias.map((tech) => (
          <div className={ style.tecnologia_card} id={tech.id} key={tech.id}>
            {tech.icons}
            <div className={style.tecnologias_info}>
              <h3>{tech.name}</h3>
              <p>
                {tech.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Habilidades;
