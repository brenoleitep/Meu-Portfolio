import React from "react";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { BsGit, BsGithub } from "react-icons/bs";
import {
  LineSkills,
  StyledHardSkills,
  StyledLineSkills,
  StyledSkills,
} from "./style";
import { TextDiff } from "../AboutMe/style";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const HardSkills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.4,
        x: { duration: 0.2 },
        default: { ease: "easeIn" },
      }}
    >

      <StyledSkills data-aos="fade-up">
        <StyledLineSkills>
          <h2>
            <TextDiff>02.</TextDiff> Minhas Skills
          </h2>

        </StyledLineSkills>

        <StyledHardSkills>
          <ul>
            <li>
              <FaReact color="#1000f5" title="React" />

              <p>
                React é uma biblioteca JavaScript front-end gratuita e de código
                aberto para criar interfaces de usuário baseadas em componentes.
              </p>
            </li>
            <li>
              <FaHtml5 color="#f75f00" title="HTML" />

              <p>
                HTML é uma linguagem de marcação utilizada na construção de
                páginas na Web.
              </p>
            </li>
            <li>
              <FaCss3Alt color="#4d6aff" title="CSS" />

              <p>
                Cascading Style Sheets é um mecanismo para adicionar estilos a uma
                página web.
              </p>
            </li>

            <li>
              <BsGit color="#f75f00" title="Git" />

              <p>
                GIT é um sistema de controle de versões distribuído, usado para
                registrar o histórico de edições de qualquer tipo de arquivo.
              </p>
            </li>
            <li>
              <SiJavascript color="#f7e200" title="Javascript" />

              <p>
                JavaScript é uma linguagem de programação interpretada
                estruturada, de script em alto nível com tipagem dinâmica fraca e
                multiparadigma.
              </p>
            </li>
            <li>
              <BsGithub title="Github" />

              <p>
                GitHub é uma plataforma de hospedagem de código-fonte e arquivos
                com controle de versão usando o Git.
              </p>
            </li>
            <li>
              <SiTypescript color="#006ff7" title="Typescript" />

              <p>
                TypeScript é um superconjunto sintático estrito de JavaScript e
                adiciona tipagem estática opcional à linguagem.
              </p>
            </li>
          </ul>
        </StyledHardSkills>
      </StyledSkills>
    </motion.div>
  );
};

export default HardSkills;
