import About from "./components/About";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Project from "./components/Projects";
import Testimonial from "./components/Testimonial";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div>
      <ToastContainer/>
      <Home/>
      <About />
      <Project />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
