import React from 'react';
import { FaLocationArrow } from "react-icons/fa";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-2'>
      <div className='textstructure mt-52 px-20'>
        {["I can create", "Extra ordinary", "Designs"].map((item, index)=>{
          return <div className='masker'>
            <div className='w-fit flex items-center'>
              {index === 1 && (<div className='w-[9vw] h-[5.7vw] relative overflow-hidden rounded bg-orange-500'><h1 className='text-[7vh]'>ANU</h1></div>)}
              <h1 className='flex items-center uppercase text-[9vw] h-full leading-[7vw] tracking-tighter font-bold'>
                {item}
              </h1>
            </div>
          </div>
        })}
      </div>
      <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
        {[
          "Just Trying to Look Like Developer",
          "Although I can Creating Beter Site Then Actual Developer",
        ].map((item, index)=>(
          <p className='text-md font-light uppercase tracking-tight leading-none'>{item}</p>
        ))}
        <div className='Start flex items-center gap-5'>
          <div className='px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase rounded-full'>Start the project</div>
          <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full'>
            <FaLocationArrow />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
