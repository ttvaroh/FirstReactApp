import { useState, useEffect } from 'react';
import RecipeListing from './RecipeListing';
import Spin from './Spin.jsx'

import React from 'react'

function RecipeList({ isHome=false }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      const apiURL = isHome ? '/api/recipes?_limit=3' : '/api/recipes'
      try {
        const res = await fetch(apiURL);
        const data = await res.json();
        setRecipes(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    }
    fetchRecipes();
  }, []);

  return (
    <section className='px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-il-blue'>
          { isHome ? 'Recent Recipes' : 'Browse Recipes' }
        </h2>

        { loading ? (
          <Spin loading={loading} />
          ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-4'>
            {recipes.map((recipe) => (
              <RecipeListing key={recipe.id} recipe={recipe} />
              ))}
          </div>
          )}
      </div>     
    </section>
  )
}

export default RecipeList