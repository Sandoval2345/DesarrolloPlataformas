//import logo from './logo.svg';
import './App.css';
//import NavBar from '../../front/src/components/Navbar';
//import OfertaAcademica from '../src/pages/OfertaAcademica'
//import Login from './pages/Login';
import { BrowserRouter as Router} from 'react-router-dom';
//import { AppBar } from './components';
//import Home from './pages/Home'
import AppMallas from './pages/mallas';

function App() {
  return (
    <Router>
      <AppMallas />
    </Router>
  );
}

export default App;