import React, {useState, useContext} from 'react';
import {Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, NavbarText} from 'reactstrap';

import {Link} from 'react-router-dom';

import {UserContext} from '../context/UserContext';

const Header = () => {
    const context = useContext(UserContext);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <Navbar color="info" light expand="md">
            <NavbarBrand><Link to="/" className="text-white">Github UserBook</Link></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to ="/" className="text-white">
                            SignUp
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to ="/" className="text-white">
                            SignIn
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to ="/" className="text-white">
                            LogOut
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
};

export default Header;