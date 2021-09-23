//import { useEffect } from 'react/cjs/react.development';
import Test from './test';

function App() {

 /*  useEffect(() => {
    const loadLeads = () => {
      console.log("bla bla bla")
    }
    loadLeads();
  }, []);  */

  console.log("Now displaying hello wold");

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Hello World</h1>
      <Test />
    </div>
  );
}

export default App;
