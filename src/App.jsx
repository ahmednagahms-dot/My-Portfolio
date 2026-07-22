import { Navbar } from "@/layout/Navbar";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
import { About } from "./sections/About";
import { Home } from "./sections/Home";
import { Footer } from "./layout/Footer";



function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Home />
        <About/>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;