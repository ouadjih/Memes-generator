import React from 'react'
import "./Contact.css";
export default function Star(props) {
  return (
    <img
    className="contact-favorite"
    src={props.isFilled}
    onClick={props.handleClick(props.id)}
    alt="stars"
  />
  )
}
