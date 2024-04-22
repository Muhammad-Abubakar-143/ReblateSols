import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import { Navbar } from "./components";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Hire from "./pages/Hire.jsx";
import Careers from "./pages/Careers.jsx";
import Team from "./pages/Team.jsx";
import TeamMember from "./pages/TeamMember.jsx";
import Blog from "./pages/Blog.jsx";
import PostDetails from "./pages/posts/[slug].jsx";
import MainServices from "./pages/MainServices.jsx";
import Panel from "./pages/Panel.jsx";
import CategoryPost from "./pages/category/[slug].jsx";

const App = () => {
  return (
    <>
      <AnimatedCursor
        color="252, 163, 17"
        innerScale={0.5}
        innerSize={15}
        outerSize={15}
        outerScale={1.5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          {
            target: ".custom",
            options: {
              innerSize: 12,
              outerSize: 12,
              color: "255, 255, 255",
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5,
            },
          },
        ]}
        outerStyle={{
          mixBlendMode: "exclusion",
        }}
      />
     
      <BrowserRouter basename="/">
        <div className="relative z-0">
          <Navbar />
          <Routes>
            <Route path="/panel" exact element={<Panel />} />
            <Route path="/" exact element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} exact />
            <Route path="/careers" element={<Careers />} exact />
            <Route path="/our-team" element={<Team />} exact />
            <Route path="/our-team/member" element={<TeamMember />} exact />
            <Route path="/services" element={<Services />} exact />
            <Route path="/service-description" element={<MainServices />} exact />
            <Route path="/about" element={<AboutUs />} exact />
            <Route path="/contact" element={<ContactUs />} exact />
            <Route path="/terms-and-condition" element={<Terms />} exact />
            <Route path="/privacy-policy" element={<Privacy />} exact />
            <Route path="/hire-us" element={<Hire />} exact />
            <Route exact path="/blogs" element={<Blog/>} />
            <Route path="/post/:slug" element={<PostDetails/>} />
            <Route path="/category/:slug" element={<CategoryPost/>} />
            {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;