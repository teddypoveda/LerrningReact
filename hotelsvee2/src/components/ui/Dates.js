import { Nav, Button } from 'react-bootstrap';
import React from 'react'
import { startLogout } from '../../actions/auth';


export const Dates = () => {
    
    return (
        <>
            <span className="navbar-brand">
                Ted
            </span>
            <Nav className="me-auto">
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/hotel">Hoteles</Nav.Link>
                <Nav.Link href="/country">Paises</Nav.Link>
            </Nav>
            <Button onClick={startLogout()}>
                <i className="fas fa-sign-out-alt"></i> 
                <span> salir</span>
            </Button>
        </>
    )
}
