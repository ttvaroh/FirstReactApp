import recipes from '../recipes.json'
import RecipeListing from './RecipeListing';

import React from 'react'

function RecipeList({ shortList=true }) {
  const recentRecipes = recipes.slice(0, 3);

  return (
    <section className='px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-il-blue'>
          Browse Recipes
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-4'>
          {shortList ? recentRecipes.map((recipe) => (
            <RecipeListing key={recipe.id} recipe={recipe} />
          )) : recipes.map((recipe) => (
            <RecipeListing key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>     
    </section>
  )
}

export default RecipeList