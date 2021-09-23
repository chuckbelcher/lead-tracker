import React, { useState, useEffect } from 'react';
import LeadList from './components/LeadList';
import './App.css';

function App() {
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

  //console.log(leads);
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Sudzy Pets Lead Tracking System</h1>
      <div className="container">
        <LeadList leads={leads} refreshLeads={loadLeads} />
      </div>
    </div>
  );
}

export default App;
