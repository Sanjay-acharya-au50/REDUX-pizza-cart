
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Product from './components/Product';
import Cart from './components/Cart';
import Contact from './components/Contact';
import About from './components/About';




function App() {
  return (

    <Router>
    <Header/>
    <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<About/>}/>
    </Routes>

    </Router>


  );
}


export default App;
