import Landing from './components/Landing';
import Navbar from './components/Navbar'
import { motion } from "framer-motion"
import About from './components/About';


function App() {
  return (
    <div className='container'>
      <Navbar />
      <Landing />
      <About />
    </div>
  );
}

export default App

