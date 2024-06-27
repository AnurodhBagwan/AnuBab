import { motion } from 'framer-motion'
import React from 'react'

function marquee() {
  motion
  return (
    <div className='w-full py-20 rounded-t-3xl bg-blue-600 '>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap'>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 20}} className='text-[17vw] leading-none uppercase mb-5 font-semibold'>Hi, i am a Front-end Developer      </motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 20}} className='text-[17vw] leading-none uppercase mb-5 font-semibold'>Hi, i am a Front-end Developer      </motion.h1>
      </div>
    </div>
  )
}

export default marquee
