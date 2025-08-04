import React from "react";
import Notes from "./Notes";
import AddNote from "./AddNote";

const Home = ({ searchQuery }) => {
  return (
    <div className="container my-5 d-flex flex-column align-items-center">
      
      <Notes searchQuery={searchQuery}/>
      <AddNote />
    </div>
  );
};

export default Home;
