import { Navbar, Container, Nav } from "react-bootstrap"
import myLogo from '../images/ftk.gif'

const Header = () => {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand className="header">
            <img src={myLogo} alt="logo" width={300}/>
          <Nav bg='dark' className="nav">
              <Nav.Link id="home" href='/'> Home </Nav.Link>
              <Nav.Link id="mission" href='/mission'> Mission </Nav.Link>
              <Nav.Link id="donations" href='/donations'> Donations </Nav.Link>
            </Nav>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header