
import './App.css';
import About from './Components/About';
import Navmenu from './Components/Navmenu';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');
  const [toggleText, setToggleText] = useState("Enable Dark Mode");
  const toggleButton = ()=>{
    if(mode === "light"){
        setMode("dark");
        setToggleText("Enable Light Mode");
        document.body.style.backgroundColor = "#03346E";

    }
    else{
      setMode("light");
        setToggleText("Enable Dark Mode");
        document.body.style.backgroundColor = "white";

    }
}
  return (
    <>
    <Navmenu mode ={mode} toggleButton = {toggleButton} toggleText={toggleText}/>
    <TextForm mode = {mode} heading="Enter the summary" />
    {/* <About/> */}
    </>
  );
}

export default App;