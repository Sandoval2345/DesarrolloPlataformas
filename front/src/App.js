import './App.css';
import OfertaAcademica from '../src/pages/OfertaAcademica'
//import Login from './pages/Login';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Navigation } from '@material-ui/icons';
//import { AppBar } from './components';
import Home from './pages/Home'
//import Mallas from './pages/Mallas'
//import Salas from './pages/Salas'
import Contenedor from './components/Contenedor'




function App() {
  return (
    <Router>
      <Contenedor/>
      <Route path= '/'exact component={Home}/>
      <Route path= '/OfertaAcademica' component={OfertaAcademica}/>
    </Router>
  );
}

export default App;