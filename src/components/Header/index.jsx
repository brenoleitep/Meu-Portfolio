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
        <h2>Breno Leite</h2>
      </StyledLottie>

      <ul>
        <li>Sobre mim</li>
        <li>Serviços</li>
        <li>Resumo</li>
        <li>Contato</li>
        <li>Skills</li>
      </ul>
    </StyledHeader>
  );
};

export default Header;
