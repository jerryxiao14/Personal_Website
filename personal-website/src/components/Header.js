import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useState,useEffect} from 'react'
function Header() 
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
          <img src = "" alt = "Jerry Xiao"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className = {activeLink==="home"? "active navbar-link":"navbar-link"} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills"className = {activeLink==="skills"? "active navbar-link":"navbar-link"} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href = "#projects"className = {activeLink==="projects"? "active navbar-link":"navbar-link"} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <NavDropdown title="About Me!" id="basic-nav-dropdown">
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
              <a href = "#">img src = {} alt = ""</a>
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

export default Header;