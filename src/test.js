import React from 'react'
import { useEffect } from 'react/cjs/react.development';


export default function Test() {

    useEffect(() => {
        const loadLeads = () => {
          console.log("bla bla bla")
        }
        loadLeads();
      }, []); 

    return (
        <div>
            <h1>Testing....</h1>
        </div>
    )
}
