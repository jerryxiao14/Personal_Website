import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useState,useEffect} from 'react'
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import githubIcon from '../assets/img/github_icon.png'


function NavBar() 
{

  const [activeLink, setActiveLink] = useState("home");
  const [scrolled,setScrolled] = useState(false);
 
  const onUpdateActiveLink = (value) => 
    {
    setActiveLink(value);
  }
  useEffect(()=>{
    const onScroll = () => {
      if (window.scrollY>50){
        setScrolled(true);
      }
      else
      {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll",onScroll);
    return ()=> window.removeEventListener("scroll",onScroll);
  },[]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src = {logo} alt = "Jerry Xiao"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className = {activeLink==="home"? "active navbar-link":"navbar-link"} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills"className = {activeLink==="skills"? "active navbar-link":"navbar-link"} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href = "#projects"className = {activeLink==="projects"? "active navbar-link":"navbar-link"} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <NavDropdown title="About Me!" id="basic-nav-dropdown" className = "about-dropdown">
              <NavDropdown.Item href="#action/3.1">Competitive Programming</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Education
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <span className = "navbar-text">
            <div className = "socials">
            <a href="#" className = "github-icon"><img src={githubIcon} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
            </div>
            <button className ="contact-button" onClick={()=>console.log("implement connect")}>
              <span>Connect with me!</span>
            </button>

          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;


