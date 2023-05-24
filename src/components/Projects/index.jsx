import { TextDiff } from "../AboutMe/style"
import Curiosidades from "../../assets/curiosidadebr.jpg"
import Shape from "../../assets/shapeimage.jpg"
import { StyledDivProjects, StyledDivStacks, StyledMainProjects } from "./style"
import { SiVercel, SiGithub } from "react-icons/si"

const Projects = () => {
  return (
    <StyledMainProjects>

      <h2>
        <TextDiff>03.</TextDiff> Projetos
      </h2>

      <StyledDivProjects>
        <h4>
          <TextDiff>01.</TextDiff> Curiosidades Brasileiras
        </h4>

        <StyledDivStacks>

          <a href="https://curiosidades-brasileiras.vercel.app/" target="blank">
            <img src={Curiosidades} alt="Curiosidades Brasileiras" />
          </a>

          <div>
            <ul>
              <h2>Stacks Usadas</h2>
              <li>- ReactJs</li>
              <li>- Javascript</li>
              <li>- Axios</li>
              <li>- Styled-Components</li>
              <li>- React-Toastify</li>
              <li>- Lottie-React</li>
              <li>- React-Router-Dom</li>
            </ul>
          </div>
        </StyledDivStacks>

        <p>O curiosidades brasileiras foi um site que eu desenvolvi apenas praticar stacks, consumindo a api do BrasilAPi, nele você pode ter acesso a algumas curiosidades do Brasil, como pesquisar cep, ddd, cnpj e feriados.</p>

        <div>
          <a href="https://curiosidades-brasileiras.vercel.app/" target="blank">
            <SiVercel />
            Vercel

          </a>
          <a href="https://github.com/brenodevreact/Curiosidades_Brasileiras" target="blank">
            <SiGithub />
            Repositório
          </a>
        </div>
      </StyledDivProjects>

      <StyledDivProjects>
        <h4>
          <TextDiff>02.</TextDiff> Shape For React
        </h4>

        <StyledDivStacks>

          <a href="https://shapeforreact.vercel.app/" target="blank">
            <img src={Shape} alt="Shape For React" />
          </a>

          <div>
            <ul>
              <h2>Stacks Usadas</h2>
              <li>- Typescript</li>
              <li>- ReactJs</li>
              <li>- Javascript</li>
              <li>- Axios</li>
              <li>- Tailwind</li>
              <li>- React-Router-Dom</li>
              <li>- Zustand</li>
              <li>- Framer-motion</li>
              <li>- React-hook-form + Yup</li>
              <li>- HTML</li>
            </ul>
          </div>
        </StyledDivStacks>
        <p>No shape eu trabalhei em equipe, com o objetivo de fazer um site para ajudar devs iniciantes a configurarem com mais facilidade o seu ambiente de desenvolvimento. O shape conta com consumo de api, login e cadastro, acesso restrito a usuários logados.</p>

        <div>
          <a href="https://shapeforreact.vercel.app/" target="blank">
            <SiVercel />
            Vercel

          </a>
          <a href="https://github.com/brenodevreact/shape-for-react" target="blank">
            <SiGithub />
            Repositório
          </a>
        </div>
      </StyledDivProjects>

    </StyledMainProjects>
  )
}

export default Projects
