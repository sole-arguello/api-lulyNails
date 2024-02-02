import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import { Contact, Gallery, Home, Services, Us } from "./view/Index";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/us" element={<Us />} />
      </Routes>
    </div>
  );
}

export default App;
