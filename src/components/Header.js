import { Navbar, Container, Nav } from "react-bootstrap"
import myLogo from '../images/ftk.gif'

const Header = () => {
  return (
    <>
    <div>
      <Navbar className="header">
        <Container>
          <img src={myLogo} alt="logo" width={250}/>
        </Container>
        <Container>
          <h1>For The Kids</h1>
          <h2>connecting you to kids in need</h2>
        </Container>
      </Navbar>
      <Navbar classname="nav-scroll" sticky="left">
        <Container>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <br />
            <Nav.Link href="/mission">Our Mission</Nav.Link>
            <br />
            <Nav.Link href="/events">Events</Nav.Link>
            <br />
            <Nav.Link href="/donations">Donations</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
    </>
  )
}

export default Header