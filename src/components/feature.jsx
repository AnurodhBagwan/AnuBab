import React from 'react'

function feature() {
  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-2 border-zinc-800 pb-20'>
        <h1 className='text-7xl tracking-tight font-semibold'>Featured Projects</h1>
      </div>
      <div className='cards w-full flex gap-10 mt-10 px-10'>
        <div className='cardcontainer w-1/2 h-[80vh] relative'>
          <div className='absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tighter z-[9] leading-none text-8xl'>
            <h1>Netflix
              {"VISE".split('').map((item, index)=>(
                <span>{item}</span>
              ))}
            </h1>
          </div>
          <div className='card w-full h-full rounded-xl overflow-hidden bg-green-600'></div>
        </div>
        <div className='cardcontainer w-1/2 h-[80vh] relative'>
          <div className='absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tighter z-[9] leading-none text-8xl'><h1>Spotify</h1></div>
          <div className='card w-full h-full rounded-xl overflow-hidden bg-green-600'></div>
        </div>
      </div>
    </div>
  )
}

export default feature
