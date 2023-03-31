import Header from "./components/Header";
import Introduction from "./components/Introduction";
import { StyledMain } from "./styles/main";

function App() {
  return (
    <div>
      <Header />

      <StyledMain>
        <Introduction />
      </StyledMain>
    </div>
  );
}

export default App;
