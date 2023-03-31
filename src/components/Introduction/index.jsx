import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import Texts from "../Texts";
import dev from "../Lotties/developer.json";
import {
  StyledDivIntroduction,
  StyledDivisionIntroduction,
  StyledIntroduction,
  StyledLottieIntroduction,
} from "./style";
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
            <button data-aos="fade-up">Saiba mais sobre mim</button>
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
