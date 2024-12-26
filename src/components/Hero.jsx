import React from 'react'

const Hero = ({ title = 'Welcome to', subtitle = 'Track all of your recipes in one organized spot'}) => {
  return (
    <section className='bg-il-blue border-b py-20 mb-4 rounded-b'>
        <div>
            <div className='text-white text-center'>
                <h1 className='text-4xl font-extrabold sm:text-5xl lg:text-6xl'>
                    { title }
                    <span className='text-il-orange'>{title === 'Welcome to' ? ' FoodStand' : ''}</span>
                </h1>
                <p className='my-4 text-xl'>
                    { subtitle }
                </p>
            </div>
        </div>
    </section>
  )
}

export default Hero