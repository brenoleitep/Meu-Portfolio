import Lottie from "lottie-react";
import reactIcon from "../Lotties/react.json";
import { StyledHeader, StyledLottie } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLottie>
        <div>
          <Lottie animationData={reactIcon} />
        </div>
      </StyledLottie>

      <ul>
        <li>01. Sobre mim</li>
        <li>02. Serviços</li>
        <li>03. Resumo</li>
        <li>04. Contato</li>
        <li>05. Skills</li>
      </ul>
    </StyledHeader>
  );
};

export default Header;
