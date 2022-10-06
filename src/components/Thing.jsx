import React, { useState } from 'react'



export default function Thing() {
  const[thing,setThing] =useState(["Thing1","Thing2"])
  function addItem(){
    setThing(prevThing =>[...prevThing,`thing${thing.length+1}`])
  }

const thingsElement = thing.map(t=> <p key={t}>{t}</p>)
return (
    <div>
        <button onClick={addItem}>Add Item</button>
        {thingsElement}
    </div>
)
}
