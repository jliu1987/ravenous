
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Searchbar from './components/Searchbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Menu from "./pages/Menu";





function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Searchbar/>
        <Switch>
           <Route path='/' exact component={Home}/>

           <Route path='/menu' exact component={Menu}/>

        </Switch>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;