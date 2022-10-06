import "./App.css";


import Contact from "./components/Contact"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Interaction from "./components/Interaction";

function App() {

 
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route  path ={"/contact"} element={<Contact/>}/>
        <Route  path ={"/Home"} element={<Home/>}/>
        <Route  path ={"/Interaction"} element={<Interaction/>}/>
      </Routes>
     
      
    </div>
  );
}

export default App;
