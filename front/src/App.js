import './App.css';
import OfertaAcademica from '../src/pages/OfertaAcademica'
//import Login from './pages/Login';
import { BrowserRouter as Router} from 'react-router-dom';
//import { AppBar } from './components';
//import Home from './pages/Home'
//import Mallas from './pages/Mallas'
//import Salas from './pages/Salas'




function App() {
  return (
    <Router>
      <OfertaAcademica/>
    </Router>
  );
}

export default App;