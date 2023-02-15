import { useRef } from "react";
import "./App.css";
import Footer from "./modules/Footer";
import MainSection from "./modules/MainSection";
import NavTop from "./modules/NavTop";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-bgLight  dark:bg-bgDark min-h-screen ">
      <NavTop />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
