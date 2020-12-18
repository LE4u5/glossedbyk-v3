import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBarComponent';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
