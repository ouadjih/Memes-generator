import React, { useState } from "react";
import "./Form.css";
import dmeme from "../meme.jpg";
//import memesData from "../memesData.js";
export default function Form() {
  //save the meme related data as an object called meme

  const [meme, setMeme] = useState({
    topText: "",
    buttomText: "",
    randImage: dmeme,
  });

  // eslint-disable-next-line no-unused-vars
  const [allMemeImages, setAllMemeImages] = useState([]);
  console.log(allMemeImages);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {
    async function getMemes(){
      const res = await fetch(`https://api.imgflip.com/get_memes`);
      const data = await res.json();
      setAllMemeImages(data.data.memes);
    }
    getMemes()
  }, []);

  //getting random image from data
  // let [MemeImage,setMemeImage] = useState(meme)
  function Memeing() {
    const randomNum = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNum].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randImage: url,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(meme);
  }
  function handleChange(e) {
    const { value, name } = e.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
    console.log(meme);
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="topText"
          placeholder="type top text"
          onChange={handleChange}
          value={meme.topText} //to be contolled components
        />
        <input
          type="text"
          name="buttomText"
          placeholder="type buttom text"
          onChange={handleChange}
          value={meme.buttomText}
        />
        <button className="submit bold" onClick={Memeing}>
          Get a new meme image
        </button>
      </form>

      <div className="meme">
        <img className="meme-image" src={meme.randImage} alt="memeimage" />
        <h1 className="meme--text top">{meme.topText}</h1>
        <h1 className="meme--text buttom">{meme.buttomText}</h1>
      </div>
    </>
  );
}
