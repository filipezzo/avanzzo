import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Reviews } from "./components/reviews";
import { Skills } from "./components/skills";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Reviews />
        <Contact />
      </main>
    </>
  );
}

export default App;
