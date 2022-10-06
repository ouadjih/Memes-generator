import React from 'react'
import Form from "./Form";
import Greeting from "./Greeting";
import Thing from "./Thing";

export default function Home() {
  return (
    <>
      <Form />
      <Greeting init={4}/>
    </>

  )
}
