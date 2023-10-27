import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar} from "./components";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Hire from "./pages/Careers";


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-white'>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/terms-and-condition" element={<Terms/>}/>
          <Route path="/privacy-policy" element={<Privacy/>}/>
          <Route path="/hire-us" element={<Hire/>}/>
        </Routes> 
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
