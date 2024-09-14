import { About } from "./components/about";
import { Header } from "./components/header";
import { Hero } from "./components/hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;
