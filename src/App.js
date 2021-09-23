import { useEffect } from 'react/cjs/react.development';

function App() {

  useEffect(() => {
    const loadLeads = () => {
      console.log("bla bla bla")
    }
    loadLeads();
  }, []); 

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Hello World</h1>
    </div>
  );
}

export default App;
