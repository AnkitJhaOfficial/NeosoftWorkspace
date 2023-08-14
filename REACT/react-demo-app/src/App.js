import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from './components/About';
import HelloWorld from './components/HelloWorld';
import ContactUsForm from './components/ContactUsForm';
import Card from './components/Card';


function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/hello" element={<HelloWorld />}></Route>
          <Route path="/about" element={<About />}> </Route>
          <Route path="/contact" element={<ContactUsForm />}></Route>
          <Route path="/users" element={<Card />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
