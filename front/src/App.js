import logo from './logo.svg';
import './App.css';
import Mallas from '../src/pages/mallas';
import { BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Mallas />
    </Router>
  );
}

export default App;
