import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Details from './components/Details/Details';

function App() {
  return (
    <div className="App">
      <Router>
      <Route path="/" exact render={(props) => <Home {...props}/>} />
      <Route path="/details/:id" exact render={(props) => <Details {...props}/>} />
      </Router>
    </div>
  );
}

export default App;
