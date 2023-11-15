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
import Walmart from './pages/services/Walmart'
import Amazon from './pages/services/Amazon';
import Shopify from './pages/services/Shopify';
import Web from './pages/services/Web';
import Graphics from './pages/services/Graphics';
import SEO from './pages/services/SEO';
import Marketing from './pages/services/Marketing.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-white'>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/services" element={<Services/>}/>
              <Route path="/services/walmart" element={<Walmart/>}/>
              <Route path="/services/amazon" element={<Amazon/>}/>
              <Route path="/services/ecommerce" element={<Shopify/>}/>
              <Route path="/services/web-development" element={<Web/>}/>
              <Route path="/services/graphic-designing" element={<Graphics/>}/>
              <Route path="/services/marketing" element={<Marketing/>}/>
  
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
