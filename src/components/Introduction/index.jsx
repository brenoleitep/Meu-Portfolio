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
            <Texts text="Olá, meu nome é." />
          </h2>

          <h1>
            <Texts text="Breno Leite" />
          </h1>
          <p>
            <Texts text="Seja bem-vindo(a) ao meu portfólio website." />
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
