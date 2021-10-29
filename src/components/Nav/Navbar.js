import React from 'react'
import { Link } from 'react-router-dom'
import { StyledNavbar, StyledNavBrand, StyledNavItems } from '../../styled/NavbarStyles'
import { Accent } from '../../styled/MiscStyles'
import { useAuth0 } from '@auth0/auth0-react'

export default function Navbar() {
    const { isAuthenticated, loginWithPopup, logout } = useAuth0() 
    return (

        <StyledNavbar>
            <StyledNavBrand>
                <Link to="/">SudzyPets.<Accent>Lead Tracker</Accent></Link>
            </StyledNavBrand>
            <StyledNavItems>
                {!isAuthenticated &&
                    <li><button className=" btn btn-primary" onClick={() => loginWithPopup()}>Login</button></li>
                }
                {isAuthenticated &&
                    <li><button className=" btn btn-danger" onClick={ () => logout({ returnTo: window.location.origin })}>Logout</button></li>
                }
            </StyledNavItems>
        </StyledNavbar>
    )
}
