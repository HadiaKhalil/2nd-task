"use client"
import { useState } from "react"


const Page = () => {

  const [isClick, setClick] = useState(false)
  
  const ToggleNav =  ()=>{
         setClick(!isClick)
  }
  
  return (
    <div>
          
        <div className='flex justify-between max-w-[1440px] flex-wrap  p-0 w-full mx-auto box-border py-9 px-11 bg-[#1A0B2E] text-white
          h-[100px] m-auto '>
   
            <div className='flex '>
            <div className='text-[35px] font-semibold'>
            LI
          </div>
          <div className='leading-[15px] pt-3 font-serif'>
          <p >Full Stack</p>
            <p >Web Developer</p>
          </div>
          </div>
          
          

          <div className='parant  gap-8  hidden md:flex  font-serif  '>
          
         
            <p >Home</p>
            <p >About</p>
            <p >Projects</p>
            <p >Contact</p>
          </div>
          <div className="md:hidden flex items-center">
                  <button 
                  className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white
                   hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                   onClick={ToggleNav}
                  >
                    {isClick ? (
                      <svg className='h-6 w-6'
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                        />

                      </svg>
                    ): (
                      <svg className='h-6 w-6'
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 b 6h7"
                        />

                      </svg>
                    )}
                  </button>

                </div>
                

  
          
        
          </div>
          
        {isClick && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <p >Home</p>
            <p >About</p>
            <p >Projects</p>
            <p >Contact</p>
            </div>
          </div>
        )}
           </div>
       
 
  )
}

export default Page





