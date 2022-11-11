import React, { useCallback } from 'react';




export const Footer = () => {

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  },[]);

  return(
    <div className='bottom-0'>
      <div className='h-12 shadow-lg bg-[#6200ee] w-screen gap-5 rounded-t-lg dark:bg-[#222222] justify-around flex pl-12 dark:text-white items-center'>
        <div>
            Copyright © 2022
        </div>
        <div className=''>
          <button className='rounded-lg text-black uppercase bg-blue-500 py-1 px-3 transition ease-in-out delay-120 bg-blue-500 hover: hover:scale-105 hover:bg-indigo-500 duration-500' onClick={scrollToTop}>Back</button>
        </div>
      </div>
      
    </div>
  );
};