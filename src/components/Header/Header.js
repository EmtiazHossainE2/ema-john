import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/Logo.svg'
import './Header.css'

// custom css 
// const navStyle = {
//     color : 'red', 
//     fontSize : '17px'
// }

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='nav-end'>
                        <Nav className='nav-style'>
                            <Nav.Link href="/shop">Shop</Nav.Link>
                            <Nav.Link href="/order">Order</Nav.Link>
                            <Nav.Link href="/review">Review Order</Nav.Link>
                            <Nav.Link href="/inventory">Manage Inventory</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;