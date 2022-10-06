import Home from './componentes/Home.js';
import Juego from './componentes/Juego.js';
import Desarrolladores from './componentes/Desarrolladores.js';
import Error from './componentes/Error.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />;
        <Route path='/juego' element={<Juego />} />;
        <Route path='/desarrolladores' element={<Desarrolladores />} />;
        <Route path='*' element={<Error />} />;
      </Routes>
    </Router>
  );
}
