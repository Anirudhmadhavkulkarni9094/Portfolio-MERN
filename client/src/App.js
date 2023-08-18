import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Component/HomePage/Home';
import Blog from './Component/My_Blog/Blog';
import NavBar from './Component/NavBar/NavBar';
import Project from './Component/Projects/Project';
import About from './Component/AboutMe/About';
import FeedBack from './Component/FeedBack/FeedBack';

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/My-Blog" component={Blog} />
          <Route path="/My-Project" component={Project} />
          <Route path="/About-me" component={About} />
          <Route path="/Feedback" component={FeedBack} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
