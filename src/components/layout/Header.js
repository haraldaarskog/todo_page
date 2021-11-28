import React from 'react';
import { Link } from 'react-router-dom';
import {Nav, Navbar, Container} from 'react-bootstrap';

function Header() {
    return (
        
            <Navbar bg="dark" variant="dark">
                <Container>7
                <Navbar.Brand href="/">Technology</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/todo">Todo</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            
            

    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;