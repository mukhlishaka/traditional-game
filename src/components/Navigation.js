import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Navbar, NavbarBrand, NavItem, NavbarToggler, Collapse, Nav, NavLink } from 'reactstrap';
import './navigation.css'

export default function Navigation() {
    return (
        <div>
            <Container>
                <Navbar color="warning" expand="md" fixed="top" light>
                    <NavbarBrand className='mx-5' href="/">
                        HAKAGAME
                    </NavbarBrand>
                    <NavbarToggler className='me-2' onClick={function noRefCheck() { }} />
                    <Collapse className='mx-5' navbar>
                        <Nav className="menu" navbar>
                            <NavItem>
                                <NavLink href="/">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/gamelist">
                                    Gamelist
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/register">
                                    Register
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/login">
                                    Login
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar >
            </Container>
        </div >
    )
}