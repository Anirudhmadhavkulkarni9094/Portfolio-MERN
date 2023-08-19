import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/HomePage/Home';
import Blog from './Component/My_Blog/Blog';
import NavBar from './Component/NavBar/NavBar';
import Project from './Component/Projects/Project';
import About from './Component/AboutMe/About';
import FeedBack from './Component/FeedBack/FeedBack';

function App() {
  return (
    
    <BrowserRouter>
      <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<Home/>} />
        <Route path="/my-blog" element={<Blog />} />
        <Route path="/My-Project" element={<Project />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/feedback" element={<FeedBack />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
