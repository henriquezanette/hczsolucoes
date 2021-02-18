import './App.css';
import Home from './pages'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Contato from '../src/pages/Contato'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path = "/Contato" component={Contato} exact/>
      </Switch>
    </Router>
  );
}

export default App;
