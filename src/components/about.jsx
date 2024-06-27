import React from 'react'

function about() {
  return (
    <div className='w-full p-20 bg-yellow-500 rounded-t-3xl text-black '>
      <h1 className='text-[4vw] leading-[4vw] tracking-tight'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, molestiae error unde eius omnis nulla illum aut minus. Perspiciatis accusamus, possimus ut sint distinctio numquam?</h1>
      <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-white'>
        <div className='w-1/2'>
            <h1 className='text-9xl'>ME :</h1>
            <button className=' flex gap-10 uppercase items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>
                <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
                Read more....
            </button>
        </div>
        <div className='w-1/2 h-[70vh] bg-cover bg-[url("me.jpg")] rounded-3xl'></div>
      </div>
    </div>
  )
}

export default about
