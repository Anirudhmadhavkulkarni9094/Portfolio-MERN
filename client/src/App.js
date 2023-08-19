import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Component/HomePage/Home';
import Blog from './Component/My_Blog/Blog';
import NavBar from './Component/NavBar/NavBar';
import Project from './Component/Projects/Project';
import About from './Component/AboutMe/About';
import FeedBack from './Component/FeedBack/FeedBack';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="projects" element={<Project />} />
        <Route path="about" element={<About />} />
        <Route path="feedback" element={<FeedBack />} />
        <Route path="*" render={() => <Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
