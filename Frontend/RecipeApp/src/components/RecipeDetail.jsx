import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const { recipe } = useContext(AppContext);
  const [selectedRecipe, setSelectedRecipe] = useState('');

  useEffect(() => {
    const foundRecipe = recipe.find(r => r.recipe.uri.split('_')[1] === id);
    setSelectedRecipe(foundRecipe.recipe);
  }, [id, recipe]); // Added recipe dependency

  if (!selectedRecipe) {
    return <div style={{ textAlign: 'center', marginTop: '2rem' }}>Loading...</div>;
  }

  const { image, label, ingredientLines, source } = selectedRecipe;

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '1rem', fontSize: '24px', textAlign: 'center' }}>{label}</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={image} alt={label} style={{ width: '300px', height: 'auto' }} />
      </div>
      <h2 style={{ marginTop: '2rem', fontSize: '20px' }}>Ingredients</h2>
      <ul style={{ listStyleType: 'none', paddingLeft: '0', marginTop: '1rem' }}>
        {ingredientLines.map((ingredient, index) => (
          <li key={index} style={{ marginBottom: '0.5rem' }}>{ingredient}</li>
        ))}
      </ul>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a href={source} target="_blank" rel="noopener noreferrer" style={{ fontSize: '18px', textDecoration: 'none', color: '#007bff' }}>View Original Recipe</a>
      </div>
    </div>
  );
};

export default RecipeDetail;
