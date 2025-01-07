import React from 'react'
import { Link } from 'react-router'
import Card from './Card'

const HomeCards = () => {
  return (
    <section className='py-4'>
      <div className='container-xl lg:container m-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p- rounded-lg'>
            <Card>
                <h2 className=' text-2xl font-extrabold text-il-blue items-center'>For The Tried And True</h2>
                <p className='mt-2 mb-4 font-semibold text-il-blue'>
                    Find exactly what you're craving
                </p>
                <Link
                to='/recipes'
                className='inline-block bg-il-orange text-white rounded-lg px-4 py-2 hover:bg-il-blue'
                >
                    Browse All Recipes
                </Link>
            </Card>
            <Card>
                <h2 className='text-2xl font-extrabold text-il-blue'>For The Promising Ones</h2>
                <p className='mt-2 mb-4 font-semibold text-il-blue'>
                    All recipes deserve a home
                </p>
                <Link
                to='/new-recipe'
                className='inline-block bg-il-orange text-white rounded-lg px-4 py-2 hover:bg-il-blue'
                >
                    Add Recipe
                </Link>
            </Card>
        </div>
      </div>
    </section>
  )
}

export default HomeCards


{/* <Card>
<h2 className='text-2xl font-bold'>For Developers</h2>
<p className='mt-2 mb-4'>
  Browse our React jobs and start your career today
</p>
<Link
  to='/jobs'
  className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
>
  Browse Jobs
</Link>
</Card>
<Card bg='bg-indigo-100'>
<h2 className='text-2xl font-bold'>For Employers</h2>
<p className='mt-2 mb-4'>
  List your job to find the perfect developer for the role
</p>
<Link
  to='/add-job'
  className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600'
>
  Add Job
</Link>
</Card> */}