import './App.css';
import Navbar from './commponent/Navbar';
import Home from './commponent/Home';
import Footer from './commponent/Footer';
import Menu from './commponent/Menu.js'; 
import About from './commponent/About';
import Contact from './commponent/Contact';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/menu' exact element={<Menu/>}/>
          <Route path='/about' exact element={<About />}/>
          <Route path='/contact' exact element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
