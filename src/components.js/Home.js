import React from "react";
import Notes from "./Notes";
import AddNote from "./AddNote";

const Home = () => {
  return (
    <div className="container my-5 d-flex flex-column align-items-center">
      
      <Notes />
      <AddNote />
    </div>
  );
};

export default Home;
