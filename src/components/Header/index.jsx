import Lottie from "lottie-react";
import reactIcon from "../Lotties/react.json";
import { StyledHeader, StyledLottie } from "./style";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  return (
    <StyledHeader data-aos="fade-up">
      <StyledLottie>
        <div>
          <Lottie animationData={reactIcon} />
        </div>
      </StyledLottie>

      <ul>
        <li>01. Sobre mim</li>
        <li>02. Serviços</li>
        <li>03. Skills</li>
        <li>04. Contato</li>

        <button>Resumo</button>
      </ul>
    </StyledHeader>
  );
};

export default Header;
