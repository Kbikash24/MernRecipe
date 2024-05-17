import React, { useContext, useEffect, useState } from 'react';
import SearchBar from './searchBar';
import Card from './Card';
import Pagination from './pagination';
import { AppContext } from '../context/AppContext';

const Home = () => {
  const { recipe } = useContext(AppContext);
  const[currentPage,setCurrentPage] =useState(1);
  const [postsPerPage,setPostsPage]=useState(8)

  const lastPostIndex=currentPage*postsPerPage;
  const firstPostIndex=lastPostIndex-postsPerPage
  const currentPosts=recipe.slice(firstPostIndex,lastPostIndex)

  return (
    <div>
      <SearchBar />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem",paddingLeft:"3rem",}}>
        {currentPosts.map((data, index) => {
          const { image, label,uri} = data.recipe;
          const id = uri.split('_')[1];
          return (
            <Card key={index} image={image} label={label} id={id} />
          );
        })}
      </div>
      <Pagination  totalPosts={recipe.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage} />
    </div>
  );
};

export default Home;
