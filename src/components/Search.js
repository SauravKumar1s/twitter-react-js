import React from "react";
import "./search.css";

const Search = () => {
  return (
    <div className="SearchBox">
      <div className="trending-section">
        <input placeholder="Search Twitter" />
      </div>
      <div className="trending-section-bottom">
        <h2>What's happening</h2>
      </div>
      <div className="trending-word">
        <span>Sports trending</span>
        <h3>#RohitSharma</h3>
      </div>
      <div className="trending-word">
        <span>Sports trending</span>
        <h3>#Cricket</h3>
      </div>
      <div className="trending-word">
        <span>Sports trending</span>
        <h3>#indvsaus</h3>
      </div>
      <div className="trending-word">
        <span>Sports trending</span>
        <h3>#TeamIndia</h3>
      </div>
    </div>
  );
};

export default Search;
