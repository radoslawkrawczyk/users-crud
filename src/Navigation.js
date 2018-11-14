import React from 'react';

import {Navbar, NavbarBrand, Nav, NavItem, Container} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Navigation extends React.Component {

    render() {
        return (
          
            <div>
                <Navbar color="light" light expand="md">
                    <Container>
                        <NavbarBrand href="/">Users CRUD</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink to="/edit" className="nav-link">Edit Users</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/add" className="nav-link">Add Users</NavLink>
                            </NavItem>
                        </Nav>
                    </Container>
                </Navbar>
            </div>

        );
    }
}

export default Navigation;