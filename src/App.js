import { useState } from 'react/cjs/react.development';
//import LeadList from './components/LeadList';
import './App.css';

function App() {
  const [ leads, setLeads ] = useState([]);

  const loadLeads = () => {
    try {
      //await fetch('/.netlify/functions/getLeads');
      const res = await fetch('/.netlify/functions/getLeads');
      const leads = await res.json();
      setLeads(leads);
      console.log(leads);
      console.log("trying load leads")
    }  catch (err) {
      console.log('ERROR in loadLeads')
      console.error(err);
    //} 
  }
  
  loadLeads();

  //useEffect(() => {
  //  loadLeads();
  //}, []); 

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
