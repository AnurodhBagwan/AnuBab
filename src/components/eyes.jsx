import React, { useEffect, useState } from 'react'

function eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(()=>{
    window.addEventListener("mousemove", (e)=>{
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;

      var angle = Math.atan2(-deltaY, -deltaX) * (180/Math.PI);
      setRotate(angle);
    })
  })

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div className='relative w-full h-full bg-cover bg-center bg-[url("owl.jpeg")]'>
        <div className='absolute flex gap-[10vh] top-[12vw] left-1/2 -translate-x-[50%] -translate-y-[50%] w-1/4 h-[10vw]'>
        <div className='flex items-center justify-center w-[10vw] h-[10vw] bg-zinc-100 rounded-full'>
          <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full'>
            <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
              <div className='w-10 h-10 bg-zinc-100 rounded-full'></div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center w-[10vw] h-[10vw] bg-zinc-100 rounded-full'>
          <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full'>
            <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
              <div className='w-10 h-10 bg-zinc-100 rounded-full'></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default eyes
