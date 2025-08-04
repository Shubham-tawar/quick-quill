import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components.js/Navbar';
import Home from './components.js/Home';
import About from './components.js/About';
import NoteState from './context/notes/NoteState';
import Login from './components.js/Login';
import SignUp from './components.js/SignUp';
import { useState } from 'react';


function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    const textBox = document.getElementsByClassName("noteItem");
    const buttons = document.getElementsByClassName("btn");

    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      document.body.style.color = "#b6c2cf";
      document.body.style.transition = "background-color 0.5s ease";
      
      for(let i =0; i< textBox.length; i++){
        textBox[i].style.backgroundColor = "#495057";
        textBox[i].style.color = "#f8f9fa";
        textBox[i].style.transition =
          "background-color 0.5s ease, color 0.5s ease";
      }
      

      for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "#6c757d";
        buttons[i].style.color = "#f8f9fa";
        buttons[i].style.transition =
          "background-color 0.5s ease, color 0.5s ease";
        buttons[i].style.borderColor = "#6c757d"; // Optional: Change border color for better visibility
      }
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      
      document.body.style.transition = "background-color 0.5s ease";

      for(let i =0; i< textBox.length; i++){
        textBox[i].style.backgroundColor = "white";
        textBox[i].style.color = "black";
      }

      for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = ""; // or a light color
        buttons[i].style.color = "black";
      }
    }
  };
  return (
    <>
    <NoteState>
      <Router>
      <Navbar setSearchQuery={setSearchQuery} toggleMode={toggleMode} mode={mode}/>
      <Routes>
        <Route exact path="/" element={<Home searchQuery={searchQuery}/>} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
    </NoteState>
    
      
      
      
    </>
  );
}

export default App;
