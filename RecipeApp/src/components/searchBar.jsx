import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const SearchBar = () => {
  const { search, setSearch, fetchRecipe,isAuthenticated } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    fetchRecipe();
  };

  return (
    <> {isAuthenticated&& (<div>
      <form
        className="d-flex my-4"
        role="search"
        style={{
          width: "400px",
          margin: "auto",
        }}
        onSubmit={handleSubmit}
      >
        <input
          value={search}
          name="search"
          onChange={(e) => setSearch(e.target.value)}
          className="form-control me-2"
          type="search"
          placeholder="Search recipe"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>)}
    
    </>  ) 
   
};

export default SearchBar;
