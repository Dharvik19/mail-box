import React, { Fragment } from "react";
import { Button, Nav, Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";

const Header = (props) => {
  
 
  return (
    <Fragment>
      <Navbar style={{boxShadow:"rgba(50, 50, 93, 0.25) 0px 10px 20px -2px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"}} expand="lg">
        <Container fluid>
          <Navbar.Brand style={{marginLeft:"5rem"}} href="#">
            <AiIcons.AiOutlineMail/> Expense Tracker
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" style={{position:"absolute",right:"5rem"}}>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "150px" }}
              navbarScroll
            >
              <ul className="navbar-nav mr-auto ms-sm-3">
                {(
                  <li className="nav-item">
                    <NavLink to="/home" className="nav-link fs-5">
                      <AiIcons.AiOutlineHome
                        style={{ position: "relative", bottom: "3px" }}
                      />{" "}
                      Home
                    </NavLink>
                  </li>
                )}
                { (
                  <li className="nav-item ">
                    <NavLink to="/login" className="nav-link fs-5">
                      <AiIcons.AiOutlineLogin
                        style={{ position: "relative", bottom: "3px" }}
                      />{" "}
                      Login
                    </NavLink>
                  </li>
                )}
                { (
                  <li className="nav-item ">
                    <NavLink to="/" className="nav-link fs-5">
                      <BsIcons.BsClipboard
                        style={{ position: "relative", bottom: "3px" }}
                      />{" "}
                      SignUp
                    </NavLink>
                  </li>
                )}
                {(
                  <li className="nav-item ">
                    <NavLink to="/home/profile" className="nav-link fs-5 me-2">
                      <CgIcons.CgProfile
                        style={{ position: "relative", bottom: "2px" }}
                      />{" "}
                      My Profile
                    </NavLink>
                  </li>
                )}
                { (
                  <li className="nav-item d-flex justify-content-center align-items-center">
                    <Button
                      style={{
                        border: "none",
                        backgroundColor: "",
                        padding: "5px 5px 5px 3px",
                      }}
                      variant="light"
                      className="fs-5"
                    >
                      <AiIcons.AiOutlineLogout
                        style={{ position: "relative", bottom: "2px" }}
                      />{" "}
                      Logout
                    </Button>
                  </li>
                )}
                

              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};
export default Header;