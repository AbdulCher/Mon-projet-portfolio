import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import Presentation from "./pages/presentation/Presentation";
import Realisations from "./pages/realisation/Realisation";
import Activites from "./pages/activites/Activites";
import Competences from "./pages/competences/Competences";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/activites" element={<Activites />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
