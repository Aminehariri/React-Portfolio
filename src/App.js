import Landing from './components/Landing';
import Navbar from './components/Navbar'
import { motion } from "framer-motion"
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';


function App() {
  return (
    <div className='container'>
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Work/>
    </div>
  );
}

export default App

