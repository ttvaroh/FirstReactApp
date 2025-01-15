import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';


function NewRecipe() {
  // All states that will go into recipes.json
  const [title, setTitle] = useState('');
  const [type, setType] = useState([]);
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const [preptime, setPreptime] = useState('');
  const [cooktime, setCooktime] = useState('');
  const [servings, setServings] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState('');
  const [caloriesPerServing, setCaloriesPerServing] = useState('');
  const [proteinPerServing, setProteinPerServing] = useState('');

  const navigate = useNavigate();

  const handleTypeChange = (event) => {
    const selectedType = event.target.value;
    if (type.includes(selectedType)) {
      setType(type.filter((t) => t !== selectedType));
    } else {
      setType([...type, selectedType]);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    const NewRecipe = {
      title,
      type,
      rating,
      description,
      preptime,
      cooktime,
      ingredients,
      servings,
      instructions,
    };

    addRecipeSubmit(newRecipe);

    toast.success('Recipe Added Successfully');

    return navigate('/recipes');
  };


  return (
    <section className='bg-indigo-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <form onSubmit={submitForm}>
            <h2 className='text-3xl text-center font-semibold mb-6'>New Recipe</h2>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Recipe Name
              </label>
              <input
                type='text'
                id='title'
                name='title'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='eg. Homemade Chocolate Chip Cookies'
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='description'
                className='block text-gray-700 font-bold mb-2'
              >
                Description
              </label>
              <textarea
                id='description'
                name='description'
                className='border rounded w-full py-2 px-3'
                rows='4'
                placeholder='Add any description of the recipes, flavors, or process of making it that seem fitting'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Instructions
              </label>
              <textarea
                type='text'
                id='instructions'
                name='instructions'
                rows='4'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Type in your instructions, seperating each different instruction by a comma and space (eg. combine the dry ingredients, add the wet ingredients'
                required
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
              />
            </div>

            <h3 className='text-2xl mb-5'>Optional Recipe Info</h3>

            <div className='mb-4'>
              <label
                htmlFor='type'
                className='block text-gray-700 font-bold mb-2'
              >
                Rating
              </label>
              <select
                id='rating'
                name='rating'
                className='border rounded w-full py-2 px-3'
                required
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <option value='0/5'>0/5</option>
                <option value='$0.5/5'>0.5/5</option>
                <option value='1/5'>1/5</option>
                <option value='$1.5/5'>1.5/5</option>
                <option value='2/5'>2/5</option>
                <option value='2/5'>2/5</option>
                <option value='$3.5/5'>3.5/5</option>
                <option value='3/5'>3/5</option>
                <option value='$4.5/5'>4.5/5</option>
                <option value='4/5'>4/5</option>
                <option value='$5.5/5'>5.5/5</option>
                <option value='5/5'>5/5</option>

              </select>
            </div>

            <div className='flex flex-wrap gap-4'>
                {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack', 'Drink'].map((recipeType) => (
                  <label key={recipeType} className='flex items-center'>
                    <input
                      type='checkbox'
                      value={recipeType}
                      checked={type.includes(recipeType)}
                      onChange={handleTypeChange}
                      className='mr-2'
                    />
                    {recipeType}
                  </label>
                ))}
            </div>

            <div>
              <button
                className='bg-il-industrial hover:bg-il-industrial-darker-2 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Add Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewRecipe