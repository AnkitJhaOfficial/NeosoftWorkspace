import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from './components/About';

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>

          <Route path="/about" element={<About />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
