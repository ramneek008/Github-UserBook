import React, {useState, useContext} from 'react';
import {Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, NavbarText} from 'reactstrap';

import {Link} from 'react-router-dom';

import {UserContext} from '../context/UserContext';

const Header = () => {
    return(
        <Navbar color="info" light expand="md">
            <NavbarBrand><Link to="/" className="text-white">Github UserBook</Link></NavbarBrand>
            <NavbarToggler />
            <Collapse navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink className="text-white">
                            SignUp
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white">
                            SignIn
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white">
                            LogOut
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
};

export default Header;