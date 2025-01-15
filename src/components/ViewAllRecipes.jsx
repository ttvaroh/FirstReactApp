import React from 'react'
import { Link } from 'react-router'

function ViewAllRecipes() {
  return (
    <section className='m-auto max-w-lg my-10 px-6'>
      <Link
        to='recipes'
        className='block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-il-blue'
      >
        View All Recipes
      </Link>
    </section>
  )
}

export default ViewAllRecipes