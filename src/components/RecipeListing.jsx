import { useState } from 'react'
import { FaMapMarker } from 'react-icons/fa'
import {   } from 'react-router'

const RecipeListing = ({ recipe }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    let description = recipe.description

    if (!showFullDescription) {
        description = description.substring(0, 90) + "..."
    }

    return (
        <div className='bg-white rounded-xl shadow-md relative'>
            <div className='p-4'>
                <div className='mb-6'>
                    <div className='text-gray-600 my-2'>{recipe.type.join(', ')}</div>
                    <h3 className='text-xl font-bold'>{recipe.title}</h3>
                </div>

                <div className='mb-1'>{description}</div>

                <button
                    onClick={() => setShowFullDescription((prevState) => !prevState)}
                    className='text-il-orange mb-5 hover:text-il-altgeld'
                >
                    {showFullDescription ? 'Less' : 'More'}
                </button>

                <h3 className='text-il-orange mb-2'>
                    <div>
                    Time Required: {(+recipe.preptime + +recipe.cooktime) > 60 ? (Math.floor((+recipe.preptime + +recipe.cooktime) / 60) + ' Hrs ' + (+recipe.preptime + +recipe.cooktime % 60) + ' minutes'): (+recipe.preptime + +recipe.cooktime) + ' minutes'}
                    </div>
                    <div>Servings: {recipe.servings}</div>
                </h3>

                <div className='border border-gray-100 mb-5'></div>

                <div className='flex flex-col lg:flex-row justify-between mb-4'>
                    <div className='text-il-blue mb-3'>
                        <FaMapMarker className='inline text-lg mb-1 mr-1' />
                        Rating: {recipe.rating}
                    </div>
                    <a
                    href={`/my-recipes/${recipe.id}`}
                    className='h-[36px] bg-il-orange text-white rounded-lg px-4 py-2 hover:bg-il-blue text-center text-sm'
                    >
                    Open Recipe
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RecipeListing