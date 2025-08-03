import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const About = () => {
  const noteContext = useContext(NoteContext);
    
  return (
    <div className="container my-3">
      <h1>About QuickQuill</h1>
      
      <p>
        QuickQuill is designed to help you write and manage your content efficiently.
        Learn how to use its features for maximum productivity.
      </p>
    </div>
  );
};

export default About;
