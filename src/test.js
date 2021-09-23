import React, { useEffect } from 'react'


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
