import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import CreateBlog from "./Components/CreateBlog";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Blogs from "./Components/Blogs";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
} from "reactstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import logo from "./Images/logo.svg";

function App() {
  return (
    <Router>
      <Navbar className="Navbar-color" sticky="top" expand="md">
        <NavbarBrand href="/">
          <img src={logo} alt="logo" width="50" />
        </NavbarBrand>
        <NavbarToggler />
        <Collapse navbar />
        <Nav navbar>
          <NavItem className="NavItem">
            <Link className="Link" to="/">
              Home
            </Link>
          </NavItem>
          <NavItem className="NavItem">
            <Link className="Link" to="/blogs">
              Blogs
            </Link>
          </NavItem>
          <NavItem className="NavItem">
            <Link className="Link" to="/createBlog">
              Create Blog
            </Link>
          </NavItem>
          <NavItem className="NavItem">
            <Link className="Link" to="/about">
              About
            </Link>
          </NavItem>
          <NavItem className="NavItem">
            <Link className="Link" to="/contact">
              Contact
            </Link>
          </NavItem>
          <span className="navbar-text ml-auto">
            <Link to="/login">
              <Button>
                <i className="fa fa-sign-in fa-lg mr-2" />
                Login
              </Button>
            </Link>
          </span>
        </Nav>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/createBlog" element={<CreateBlog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
