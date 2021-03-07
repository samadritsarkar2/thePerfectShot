import react from "react";
import logo from "../assets/Unsplash_Symbol.png";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";

const NavI = () => {


    return (
        <div className="container-fluid">
            <Navbar  expand="lg">
                <Navbar.Brand href="/"> <img src={logo} style={{height : 40, width : 40}} /> </Navbar.Brand>
                <Form style={{width : '70%'}} inline>
                    <FormControl  type="text" 
                        style={{ borderWidth : 2, borderRadius : 75, backgroundColor : '#eee'}} 
                        placeholder="Search free High Resolution Photos"
                        />
    </Form>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse  id="basic-navbar-nav">
      <div className="container-fluid">
    <Nav className="">
        <Nav.Link href="#home">
          <div className='btn btn-outline-dark' >
            Submit a photo
          </div> 
        </Nav.Link>
        <Nav.Link href="#">
          <div className='btn' >
            Login
          </div> 
        </Nav.Link>
        <Nav.Link href="#">
          <div className='btn btn-success' >
            Join Free
          </div> 
        </Nav.Link>
    </Nav>
    </div>
  </Navbar.Collapse>
</Navbar>
           
        </div>
    )

}

export default NavI;