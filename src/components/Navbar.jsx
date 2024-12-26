import React from 'react'
import logoMain from "../assets/foodstand-bg-0.svg"

const Navbar = () => {
  return (
    <>
    <nav className='bg-il-blue border-b border-il-blue-lighter-1 text-white text-4xl'>
      <div id='nav-div-1' className='container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex items-center h-20 font-sans'> 
          <div className='flex flex-1 justify-around md:items-stretch md:justify-start font-bold'>
            <a 
            className='flex flex-shrink-0 items-center justify-start hover:text-il-altgeld' 
            href='/index.html'
            >
               <img 
                 className='h-10 w-auto pr-2'
                 src={logoMain}
                 alt='React Jobs'
               />
               <span className='hidden sm:block text-il-orange ml-2'>
                  FoodStand
               </span>
               
            </a>
            <div className='md:ml-auto '>
              <div className='flex justify-normal space-x-4 text-3xl'>
                <a
                href='/my-recipes'
                className='text-white il-blue-lighter-4 hover:text-il-blue-lighter-3 px-3 py-2'
                >
                  My Recipes
                </a>
                <a
                href='/new-recipe'
                className='text-white il-blue-lighter-4 hover:text-il-blue-lighter-3 rounded-md px-3 py-2'
                >
                  New Recipe
                </a>
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