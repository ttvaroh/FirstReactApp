import Hero from "../components/Hero"
import HomeCards from '../components/HomeCards'
import RecipeListings from '../components/RecipeListings'
import ViewAllRecipes from '../components/ViewAllRecipes'

import React from 'react'

const HomePage = () => {
  return (
    <>
    <Hero />
    <HomeCards />
    <RecipeListings isHome={true} />
    <ViewAllRecipes />
    </>
  )
}

export default HomePage