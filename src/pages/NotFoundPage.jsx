import React from 'react'
import { Link } from 'react-router';
import { FaExclamationTriangle } from 'react-icons/fa';

function NotFoundPage() {
  return (
    <section className='text-center flex flex-col justify-center items-center h-96'>
        <FaExclamationTriangle className='text-il-orange text-5xl mb-4' />
        <h1 className='text-6xl font-bold mb-4'>404 Not Found</h1>
        <p className='text-xl mb-5'>This page does not exist</p>
        <Link
        to='/'
        className='bg-il-orange text-white hover:bg-il-blue rounded-md px-3 py-2 mt-4'
        >
        Go Back
      </Link>
    </section>
  )
}

export default NotFoundPage