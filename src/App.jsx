import './index.css'
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";

function App() {
  return (
      <div className="App">
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="favs" element={<Favs />} />
              <Route path="dentist/:id" element={<Detail />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          <Footer/>
      </div>
  );
}

export default App;
