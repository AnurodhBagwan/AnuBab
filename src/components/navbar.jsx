import React from 'react'

function navbar() {
  return (
    <div className='fixed z-[999] w-full px-20 py-8 flex justify-between items-center'>
      <div className="logo">Anurodh Bagwan</div>
      <div className="links flex gap-10">
        {["Projects", "My Work", "about Me", "Insights", "contact"].map((item, index) => (
            <a key={index} className={`text-lg capitalize font-light ${index === 4 && "ml-32"}`}>{item}</a>
        ))}
      </div>
    </div>
  )
}

export default navbar
