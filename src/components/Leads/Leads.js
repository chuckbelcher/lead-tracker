import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LeadList from './LeadList';

export default function Leads() {
    const { user } = useAuth0();
    console.log(user)
    const [ leads, setLeads ] = useState([]);

    const loadLeads = async () => {
        try {
          const res = await fetch('/.netlify/functions/getLeads');
          const leads = await res.json();
          setLeads(leads);
        }  catch (err) {
          console.log('ERROR in loadLeads')
          console.error(err);
        } 
      }
      
      useEffect(() => {
        loadLeads();
      }, []); 

    return (
        <div className="container">
            <LeadList leads={leads} refreshLeads={loadLeads} />
        </div >
    )
}
