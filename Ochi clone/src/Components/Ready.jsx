import React from 'react'
import Eyes from './Eyes'
// import LocomotiveScroll from 'locomotive-scroll';


const Ready = () => {
 
    // const locomotiveScroll = new LocomotiveScroll();

  return (
    <div data-scroll data-scroll-section
    data-scroll-speed='0.3' className='w-full h-[80vw] flex flex-col justify-center items-center bg-[#CDEA68]  rounded-t-3xl'>
        <div className='w-full relative top-[20%]  transform translate-y-[50%] flex items-center justify-end'>
            <Eyes />
        </div>
        <div className="ready tracking-tight text-[11vw] font-extrabold leading-[10vw]">
            <h1>READY</h1>
            <h1>TO START</h1>
            <h1>THE PROJECT?</h1>
        </div>
        <div className="grid place-items-center pt-[10vw]">
        <button className="  group flex   gap-[2vw] items-center px-[2vw] py-[1.2vw] mt-[0.5vw] bg-zinc-800 rounded-full text-white  hover:bg-black ">
          VIEW ALL CASE STUDIES
          <div className=" group-hover:scale-150 w-[0.8vw] h-[0.8vw] rounded-full bg-white"></div>
        </button>
      </div>
        <h1 className='mt-6 font-semibold ' >OR</h1>
      <div className="grid place-items-center pt-[3vw]">
        <button className="  group flex   gap-[2vw] items-center font-semibold px-[2vw] py-[1.2vw] mt-[0.5vw] border border-black rounded-full text-zinc-800 ">
          HELLO@OCHI.DESIGN
          <div className=" group-hover:scale-150 w-[0.8vw] h-[0.8vw] rounded-full bg-black"></div>
        </button>
      </div>
    </div>
  )
}

export default Ready