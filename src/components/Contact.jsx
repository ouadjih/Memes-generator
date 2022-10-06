import React, { useState } from "react";
import "./Contact.css";
import img from "../meme.jpg";
import star from "../star.png";
import starfilled from "../star-filled.png";
import Star from "./Star";
export default function Contact() {
  const [contact, setContact] = useState({
    firstName: "Akram",
    lastName: "Boudraa",
    phone: "(+213)05424219",
    email: "akramboudraa@gmail.com",
    isFavorite: false,
  });

  function toggleFavorite() {
  setContact(prevContact => {
    return {
      ...contact,//this for not losing other attribute
      isFavorite:!prevContact.isFavorite

    }
  })
  
    console.log("toggle favorite");
  }

  return (
    <div className="contact">
      <img className="contact-img" src={img} alt="contact-img" />
      <div className="contact-info">
          <Star isFilled={contact.isFavorite?starfilled:star} handleClick={toggleFavorite}/>
        <h2 className="contact-name">{contact.firstName + contact.lastName}</h2>
        <p className="conact-number">{contact.phone}</p>
        <p className="conact-number">{contact.email}</p>
      </div>
    </div>
  );
}
