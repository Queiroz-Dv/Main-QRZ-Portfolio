import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".mxm",
  `Atuo como desenvolvedor em correções e implementações nos módulos para os clientes governamentais
  como: SENAC, SERPRO e SESC. De forma semelhante, fui responsável pela migração, organização
  e planejamento com uma pequena equipe dos módulos específicos para os clientes citados anteriormente.
  Além disso, também contribuí em outros módulos do sistema como Orçamento, Compras e Patrimônio.`,
  "Analista Desenvolvedor Júnior 3 ",
  "MXM Sistemas",
  "Maio 2021 - até o momento"
);

hoverChangeExperience(
  ".sao-lazaro",
  `Trabalhei como professor de inglês e português na creche São Lázaro
  onde era responsável por organizar, lecionar e contribuir com o desenvolvimento
  de alunos e professores.`,
  "Professor",
  "Creche São Lázaro",
  "Março - Abril 2022"
);

hoverChangeDescription(
  ".html",
  "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript é um superset do JavaScript que incluir recursos que não estão presentes na linguagem de forma nativa, além de torná-la estática."
);
hoverChangeDescription(
  ".csharp",
  "CSharp é uma linguagem de programação da Microsoft de alto nível para desktop, mobile e web."
);
