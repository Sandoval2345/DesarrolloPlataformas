//import logo from './logo.svg';
import './App.css';
import NavBar from '../../front/src/components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;