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

const Introduction = () => {
  return (
    <StyledIntroduction>
      <StyledDivisionIntroduction>
        <StyledDivIntroduction>
          <h2 data-aos="fade-up">
            <Texts text="Olá, meu nome é" />
          </h2>
          <h1 data-aos="fade-up">
            <Texts text="Breno Leite" />
          </h1>
          <h3 data-aos="fade-up">
            <Texts text="Eu desenvolvo aplicações para a web." />
          </h3>
          <p data-aos="fade-up">
            <Texts text="Eu sou um desenvolvedor web especializado em criar aplicações front-end para a web. Atualmente estou focado em construir landing pages e me tornar um desenvolvedor full-stack." />
          </p>
          <button data-aos="fade-up">Saiba mais sobre mim</button>
        </StyledDivIntroduction>

        <StyledLottieIntroduction data-aos="fade-up">
          <Lottie animationData={dev} />
        </StyledLottieIntroduction>
      </StyledDivisionIntroduction>
    </StyledIntroduction>
  );
};

export default Introduction;
