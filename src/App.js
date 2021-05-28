import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/contact-me">
            <ContactMe></ContactMe>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
