import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from './components/About';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HelloWorld />}></Route>
          <Route path="/about" element={<About />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
