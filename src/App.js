import { useState, useEffect } from 'react/cjs/react.development';
//import LeadList from './components/LeadList';
import './App.css';

function App() {
  const [ leads, setLeads ] = useState([]);

  const loadLeads = async() => {
    try {
      const res = await fetch('/.netlify/functions/getLeads');
      console.log(res);
      //const leads = await res.json();
      setLeads('chuck');
      console.log(leads);
    } catch (err) {
      console.error(err);
    }
  }
  

   useEffect(() => {
    console.log("running loadLeads")
    loadLeads();
  }, []);  

  console.log(leads);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Sudzy Pets Lead Tracking System</h1>
      <div className="container">
        {/* <LeadList leads={leads} refreshLeads={loadLeads} /> */}
      </div>
    </div>
  );
}

export default App;
