import { useEffect } from 'react/cjs/react.development';
import './App.css';

function App() {

  const loadLeads = () => {
    console.log("bla bla bla")
  }
  
  useEffect(() => {
    loadLeads();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Sudzy Pets Lead Tracking System</h1>
    </div>
  );
}

export default App;
