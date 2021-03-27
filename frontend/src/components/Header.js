import React from 'react'
import { useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    return (
        <header>

            <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Embroidery</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* ml = margin left auto */}
                        <Nav className="ml-auto">
                            <LinkContainer to='/cart'>
                                <Nav.Link ><i className='fas fa-shopping-cart' /> Cart {cartItems.length > 0 && (
                                    <span className="badge">{cartItems.length}</span>
                                )}</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/login'>

                                <Nav.Link ><i className='fas fa-user' /> Sign In</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header >
    )
}

export default Header
