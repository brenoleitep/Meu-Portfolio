import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import {
  StyledAboutMe,
  StyledDivisor,
  StyledLine,
  TextDiff
} from "./style";
import ceritificado from "../../assets/1.jpg";

const AboutMe = () => {
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
      <StyledAboutMe data-aos="fade-up">
        <StyledLine>
          <h2>
            <TextDiff>01.</TextDiff> Sobre mim
          </h2>

          {/* <Line /> */}
        </StyledLine>

        <StyledDivisor>
          <div>
            <p>
              Olá! Meu nome é Breno Leite, eu sou desenvolvedor front-end. Eu crio
              aplicações, páginas para a web. Entre 2020 a 2021 eu atuei como
              social media, onde eu comecei a perceber a necessidade e uma paixão
              por desenvolvimento web. Meu interesse no mundo do desenvolvimento
              acabou despertando em Fevereiro de 2022, no mês seguinte eu comecei
              a estudar pela Kenzie Academy Brasil, um bootcamp de desenvolvimento
              web, onde eu me formei como desenvolvedor.
            </p>

            <p>
              Atualmente eu atuo como freelancer fazendo landing pages para
              pessoas que precisam desse trabalho. Meu foco principal é uma
              colocação no mercado de trabalho para ter experiência no que eu amo
              e continuar aprendendo mais e mais com pessoas mais sábias.
            </p>
          </div>

          <img src={ceritificado} alt="Certificado desenvolvedor front-end" />
        </StyledDivisor>
      </StyledAboutMe>
    </motion.div>
  );
};

export default AboutMe;
