import React from "react";
import Notes from "./Notes";

const Home = () => {
  return (
    <div className="container my-5 d-flex flex-column align-items-center">
      <h2 className="mb-4">Add a Note</h2>
      <form style={{ width: "100%", maxWidth: "600px" }}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter Title for your note"
            required
          />
        </div>

        <div className="form-group my-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="5"
            placeholder="Enter description for your note"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100 my-2">
          ADD
        </button>
      </form>

      <h2 className="mt-5 mb-4">Your Notes</h2>
      <Notes />
    </div>
  );
};

export default Home;
