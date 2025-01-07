import React from 'react'
import { Link, Links } from 'react-router'
import logoMain from "../assets/foodstand-bg-0.svg"

const Navbar = () => {
  return (
    <>
    <nav className='bg-il-blue border-b border-il-blue-lighter-1 text-white text-4xl'>
      <div id='nav-div-1' className='container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex items-center h-20 font-sans'> 
          <div className='flex flex-1 justify-around md:items-stretch md:justify-start font-bold'>
            <Link
            className='flex flex-shrink-0 items-center justify-start hover:text-il-altgeld' 
            to='/'
            >
               <img 
                 className='h-10 w-auto pr-2'
                 src={logoMain}
                 alt='React Jobs'
               />
               <span className='hidden sm:block text-il-orange ml-2'>
                  FoodStand
               </span>
               
            </Link>
            <div className='md:ml-auto '>
              <div className='flex justify-normal space-x-4 text-3xl'>
                <Link
                to='/my-recipes'
                className='text-white il-blue-lighter-4 hover:text-il-blue-lighter-3 px-3 py-2'
                >
                  My Recipes
                </Link>
                <Link
                to='/new-recipe'
                className='text-white il-blue-lighter-4 hover:text-il-blue-lighter-3 rounded-md px-3 py-2'
                >
                  New Recipe
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}


export default Navbar