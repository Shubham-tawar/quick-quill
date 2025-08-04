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

function App() {
  return (
    <>
    <NoteState>
      <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
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
