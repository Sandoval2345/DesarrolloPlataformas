import './App.css';
import OfertaAcademica from '../src/pages/OfertaAcademica'
//import Login from './pages/Login';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home'
import Salas from './pages/Salas'
import Contenedor from './components/Contenedor'




function App() {
  return (
    <Router>
      <Contenedor/>
      <Route path= '/'exact component={Home}/>
      <Route path= '/OfertaAcademica' component={OfertaAcademica}/>
      <Route path= '/Salas' component =  {Salas}/>
    </Router>
  );
}

export default App;