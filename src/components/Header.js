import { Navbar, Container } from "react-bootstrap"
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
    </div>
    </>
  )
}

export default Header