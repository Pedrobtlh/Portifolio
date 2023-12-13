import "./App.css";
//Components
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Habilidades from "./components/Habilidades";
import Projetos from "./components/Projetos";

function App() {
  return (
    <>
      <Navbar />
      <MainContent />
      <Habilidades />
      <Projetos />
    </>
  );
}

export default App;
