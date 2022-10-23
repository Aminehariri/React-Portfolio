import Landing from './components/Landing';
import Navbar from './components/Navbar'
import { motion } from "framer-motion"
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className='container'>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Skills' element={<Skills />}/>
        <Route path='/Work' element={<Work />}/>
        <Route path='/Contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App

