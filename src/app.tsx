import { About } from "./components/about";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Skills } from "./components/skills";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;
