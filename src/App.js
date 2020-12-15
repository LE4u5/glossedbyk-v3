import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
