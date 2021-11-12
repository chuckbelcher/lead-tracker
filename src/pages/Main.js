import React from 'react'
import Leads from '../components/Leads/Leads'
import Splash from '../components/Utils/Splash'
import { useAuth0 } from '@auth0/auth0-react'

export default function Main() {

    const { isAuthenticated } = useAuth0() 

    return (
        <>
            {!isAuthenticated &&
                <Splash />
            }
            {isAuthenticated && 
                <Leads />
            }
        </>
    )
}