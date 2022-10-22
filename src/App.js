import Landing from './components/Landing';
import Navbar from './components/Navbar'
import { motion } from "framer-motion"
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className='container'>
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Work/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App

