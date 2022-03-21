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

function App() {
  return (
    <Router>
      <Navbar sticky="top" expand="md">
        <NavbarBrand href="/">Non-Traditionals Blog</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar />
        <Nav navbar>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/blogs">Blogs</Link>
          </NavItem>
          <NavItem>
            <Link to="/createBlog">Create Blog</Link>
          </NavItem>
          <NavItem>
            <Link to="/about">About</Link>
          </NavItem>
          <NavItem>
            <Link to="/contact">Contact</Link>
          </NavItem>
        </Nav>
        <span className="navbar-text ml-auto">
          <Link to="/login">
            <Button>
              <i className="fa fa-sign-in fa-lg mr-2" />
              Login
            </Button>
          </Link>
        </span>
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
