import {useState} from 'react'
// import { useState, useEffect } from 'react'
import { useLoaderData, useParams } from 'react-router';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router';
import Card from '../components/Card'

function RecipePage() {
    const { id } = useParams();
    const recipe = useLoaderData();

    const [checkedIngredients, setCheckedIngredients] = useState(
        recipe.ingredients.reduce((acc, ingredient) => {
          acc[ingredient] = false; // Initially, all checkboxes are unchecked
          return acc;
        }, {})
      );
    
    const handleCheckboxChange = (ingredient) => {
    setCheckedIngredients((prevState) => ({
            ...prevState,
            [ingredient]: !prevState[ingredient], // Toggle the checkbox state for the specific ingredient
        }));
    };
    
    // This is one way to get the recipe by id
    // const [recipe, setRecipe] = useState(null);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const fetchRecipe = async () => {
    //         try {
    //             const res = await fetch(`/api/recipes/${id}`);
    //             const data = await res.json();
    //             setRecipe(data);
    //           } catch (error) {
    //             console.log('Error fetching data', error);
    //           } finally {
    //             setLoading(false);
    //           }
    //     }
    //     fetchRecipe();
    // }, [])
    
    return (
        <>
      <section>
        <div className='container m-auto py-6 px-6'>
          <Link
            to='/recipes'
            className='text-indigo-500 hover:text-indigo-600 flex items-center'
          >
            <FaArrowLeft className='mr-2' /> Back to Recipes
          </Link>
        </div>
      </section>

      <section>
        <div className='container m-auto py-10 px-6'>
          <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
            <main>
              <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
                <div className='text-gray-500 mb-4'>{recipe.type.join(', ')}</div>
                <h1 className='text-3xl font-bold mb-4'>{recipe.title}</h1>
                <div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start'>
                  <FaMapMarker className='text-il-orange mr-1' />
                  <p className='text-il-orange'>{recipe.rating}</p>
                </div>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <h3 className='text-il-industrial text-lg font-bold mb-2'>
                  Recipe Description
                </h3>

                <p className='mb-4'>{recipe.description}</p>
                
                <hr className='my-4' />

                <div className='text-il-industrial text-lg font-bold mb-2'>
                    <h3>
                        Servings:
                        <span className='text-black text-base font-normal mb-4'> {recipe.servings}</span>
                    </h3>
                    <h3>
                        Prep Time:
                        <span className='text-black text-base font-normal mb-4'> {recipe.preptime} minutes</span>
                    </h3>
                    <h3>
                        Cook Time:
                        <span className='text-black text-base font-normal mb-4'> {recipe.cooktime} minutes</span>
                    </h3>
                </div>

                <hr className='my-4' />

                <h3 className='text-il-industrial text-lg font-bold mb-2'>
                  Ingredients
                </h3>

                {recipe.ingredients.map((ingredient) => (
                    <p key={ingredient}>
                        <input 
                        type='checkbox'
                        checked={checkedIngredients[ingredient]}
                        onChange={() => handleCheckboxChange(ingredient)}
                        />
                        <label> {ingredient}</label>
                    </p>
                ))}

                <hr className='my-4' />
                <ol className='list-decimal'>
                    {recipe.instructions.map((instruction) => (
                        <li className='my-1 mx-5'>
                            {instruction}
                        </li>
                    ))}
                </ol>
              </div>
            </main>

            {/* Instructions Card */}
            <aside>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-bold mb-6'>Quick Info</h3>

                <h3 className='text-xl'>Prep Time</h3>

                <p className='my-2 bg-il-arches-lighter-3 p-2 font-bold rounded-sm'>
                  {recipe.preptime} minutes
                </p>

                <h3 className='text-xl'>Cook Time</h3>

                <p className='my-2 bg-il-arches-lighter-3 p-2 font-bold rounded-sm'>
                  {recipe.cooktime} minutes
                </p>

                <h3 className='text-xl'>Servings</h3>

                <p className='my-2 bg-il-arches-lighter-3 p-2 font-bold rounded-sm'>
                  {recipe.servings}
                </p>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <h3 className='text-xl font-bold mb-6'>Manage Recipe</h3>
                <Link
                  to={`/edit-recipe/${recipe.id}`}
                  className='bg-il-blue hover:bg-il-blue-darker-1 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                  Edit recipe
                </Link>
                <button
                  onClick={() => onDeleteClick(recipe.id)}
                  className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                  Delete recipe
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
    )
};

const recipeLoader = async ({ params }) => {
    const res = await fetch(`api/recipes/${params.id}`);
    const data = await res.json();
    return data;
};

export {RecipePage as default, recipeLoader};