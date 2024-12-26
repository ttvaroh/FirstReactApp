import React from 'react'

function Card({ children, bg = 'bg-il-storm-lighter-3' }) {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md flex flex-col items-center`}>{children}</div>
  )
}

export default Card