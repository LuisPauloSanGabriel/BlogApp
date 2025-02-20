import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import { Link, NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
//import { useState, useContext } from 'react';
import { useContext } from 'react';
import UserContext from '../context/UserContext';
import '../index.css'


export default function AppNavbar() {

  const { user } = useContext(UserContext)

	return (

		<Navbar expand="lg" className="bg-primary ">
          <Container className="ms-0">
            <Navbar.Brand href="/" className="title-fonts">
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                  <Nav.Link className="text-white fw-bold" as={NavLink} to="/" exact="true">
                     Home
                  </Nav.Link>
                  <Nav.Link className="text-white fw-bold" as={NavLink} to="/blogs" exact="true">
                     Newsfeed
                  </Nav.Link>
              </Nav>


              <Nav className="ms-auto">
                {(user.id !== null) ?
                  user.isAdmin
                      ?
                      <>
                        <Nav.Link className="text-white fw-bold" as={NavLink} to ="/logout" exact="true">Logout</Nav.Link>
                      </>
                      :
                      <>
                        <Nav.Link className="text-white fw-bold" as={NavLink} to ="/logout" exact="true">Logout</Nav.Link>
                      </>
                  :
                  <>
                    <Nav.Link className="text-white fw-bold" as={NavLink} to ="/login" exact="true">Login</Nav.Link>
                    <Nav.Link className="text-white fw-bold" as={NavLink} to ="/register" exact="true">Register</Nav.Link>
                  </>

                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

	)
}