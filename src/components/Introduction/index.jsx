import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import Texts from "../Texts";
import dev from "../Lotties/developer.json";
import {
  DivGithub,
  StyledDivIntroduction,
  StyledDivisionIntroduction,
  StyledIntroduction,
  StyledLottieIntroduction,
} from "./style";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <StyledIntroduction>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.4,
          x: { duration: 0.2 },
          default: { ease: "easeIn" },
        }}
      >
        <StyledDivisionIntroduction>
          <StyledDivIntroduction data-aos="fade-up">
            <h2>
              <Texts text="Olá, meu nome é" />
            </h2>
            <h1>
              <Texts text="Breno Leite" />
            </h1>
            <h3>
              <Texts text="Eu desenvolvo aplicações para a web." />
            </h3>
            <p>
              <Texts text="Eu sou um desenvolvedor web especializado em criar aplicações front-end para a web. Atualmente estou focado em construir landing pages e me tornar um desenvolvedor full-stack." />
            </p>

            <DivGithub>
              <a href="https://github.com/brenodevreact" target="blank">
            <FiGithub />
              </a>
              <a href="https://www.linkedin.com/in/brenoleitep/" target="blank">
            <FiLinkedin />
              </a>
              <a href="mailto:brenoleitepereira@gmail.com" target="blank">
            <SiGmail />
              </a>
            </DivGithub>
          </StyledDivIntroduction>

          <StyledLottieIntroduction data-aos="fade-up">
            <Lottie animationData={dev} />
          </StyledLottieIntroduction>
        </StyledDivisionIntroduction>
      </motion.div>
    </StyledIntroduction>
  );
};

export default Introduction;
