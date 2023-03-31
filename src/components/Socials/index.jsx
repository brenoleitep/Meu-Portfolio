import { StyledIcons, StyledLine } from "./style";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

const Socials = () => {
  return (
    <StyledIcons>
      <FiGithub />
      <FiLinkedin />
      <SiGmail />
      <StyledLine></StyledLine>
    </StyledIcons>
  );
};

export default Socials;
