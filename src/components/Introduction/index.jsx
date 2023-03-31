import Lottie from "lottie-react";
import Texts from "../Texts";
import dev from "../Lotties/developer.json";
import {
  StyledDivIntroduction,
  StyledDivisionIntroduction,
  StyledIntroduction,
  StyledLottieIntroduction,
} from "./style";
import Header from "../Header";

const Introduction = () => {
  return (
    <StyledIntroduction>
      <StyledDivisionIntroduction>
        <StyledDivIntroduction>
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

          <button>Saiba mais sobre mim</button>
        </StyledDivIntroduction>

        <StyledLottieIntroduction>
          <Lottie animationData={dev} />
        </StyledLottieIntroduction>
      </StyledDivisionIntroduction>
    </StyledIntroduction>
  );
};

export default Introduction;
