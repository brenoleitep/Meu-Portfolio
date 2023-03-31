import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Socials from "./components/Socials";
import { StyledMain } from "./styles/main";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  return (
    <div>
      <Header />
      <Socials />
      <StyledMain>
        <Introduction />
        <Introduction />
      </StyledMain>
    </div>
  );
}

export default App;
