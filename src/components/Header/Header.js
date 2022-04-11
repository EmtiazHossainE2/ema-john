import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase/firebase.init';
import logo from '../../images/Logo.svg'
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'


const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <div >
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link to='/'><img src={logo} alt="" /></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end '>
                        <Nav className='nav-style'>
                            <CustomLink className='pb-5' to='/'>Shop</CustomLink>
                            <CustomLink className='pb-5' to='/orders'>Orders</CustomLink>
                            <CustomLink className='pb-5' to='/reviews'> Reviews</CustomLink>
                            <CustomLink className='pb-5' to='/inventory'>Inventory</CustomLink>

                            {user?.uid
                                ?
                                ""
                                :
                                <CustomLink className='pb-5' to='/signup'>Sign up</CustomLink>
                            }
                            {user?.uid
                                ?
                                <CustomLink className='pb-5' to='/login' onClick={() => signOut(auth)}>Log Out</CustomLink>
                                :
                                <CustomLink className='pb-5' to='/login'>Log in</CustomLink>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;