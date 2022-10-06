import React, { useState } from 'react'

export default function Interaction() {
    const [starWarsData,setStarWarsData]= useState({})
    const[count,setCount]=useState(1)
    // 1. Get the data (fetch)
    // 2. Save the data to state
    console.log("component renderred")
   
   React.useEffect(()=>{
    console.log("effect ran")
   fetch(`https://swapi.dev/api/people/${count}`)
    .then(res=>res.json())
    .then(data=>setStarWarsData(data))
   },[count])
    // 3. (out)side effect : localstorage (user browser) , api/database interactions, subscriptions ( web sockets) , syncing 2 dufferent internal states together
    //we usse effect HOOk : useEffect() interact outside of react ecosystem  (synchronise)
    return (
    <div>
        <pre>{JSON.stringify(starWarsData, null,2)}</pre>
        <h2>The count is {count}</h2>
        <button onClick={()=>setCount(prevCount => prevCount+1)}>Add</button>
    </div>
  )
}
