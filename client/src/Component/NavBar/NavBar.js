import React from 'react';
import '../Resources/StyleSheet/NavBar.css';
import Login from '../Forms/Login';
import AddBlog from '../Forms/AddBlog';
import AddProject from '../Forms/AddProject';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/My-Blog">
                My Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/My-Project">
                My Project
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About-me">
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Feedback">
                Feedback
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-primary mx-2"
            data-bs-toggle="modal"
            data-bs-target="#Blog"
          >
            Add Blog
          </button>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add Project
          </button>
          <button
            type="button"
            className="btn btn-primary mx-2"
            data-bs-toggle="modal"
            data-bs-target="#AddProject"
          >
            Admin
          </button>
        </div>
      </div>

      {/* Blog Modal */}
      <div className="modal fade light" id="Blog" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered m-auto">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-light" id="exampleModalLabel">
                Hey Anirudh! login in order to Add or delete new Blogs!
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <AddBlog />
            </div>
          </div>
        </div>
      </div>

      {/* Admin Modal */}
      <div className="modal fade light" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-light" id="exampleModalLabel">
                Hey Anirudh! login in order to Add or delete new Blogs!
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Login />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* AddProject Modal */}
      <div className="modal fade light" id="AddProject" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered m-auto">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-light" id="exampleModalLabel">
                Hey Anirudh! login in order to Add or delete new Blogs!
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <AddProject />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
