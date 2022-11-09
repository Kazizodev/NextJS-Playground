import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import { useState, useEffect } from 'react';

const Home: NextPage = () => {

  const [hover, setHover] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (document) {
      const trailer = document.getElementById("trailer");

      if (trailer) {
        if (window.innerWidth > 1280) {
          window.onmousemove = (e) => {
            const x = e.clientX - trailer.offsetWidth / 2, y = e.clientY - trailer.offsetHeight / 2;

            const keyframes = {
              transform: `translate(${x}px, ${y}px)`,
            }

            trailer.animate(keyframes, {
              duration: 200,
              easing: 'ease-in-out',
              fill: 'forwards'
            });
          }
        }
      }
    }
  }, []);

  const doThis = (state: boolean) => {
    if (window.innerWidth > 1280) {
      setHover(state);
    }
  }

  return (
    <div className='flex h-screen select-none flex-col xl:overflow-hidden cursor-none'>
      <Head>
        <title>Kazizo Cloning Other Websites</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="In this website, Kazizo (an aspiring full stack developer) is trying to recreate cool websites he found on the internet in order to increase his skills." />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* Cursor */}
      <div id="trailer" className={`rounded-[50%] fixed z-[10000] top-0 left-0 pointer-events-none opacity-0 transition-[height_width] duration-300 hidden xl:block` + (hover ? ` h-[30px] w-[30px] bg-[#ffffff69] ` : " h-[20px] w-[20px] bg-white")} />

      {/* Header */}
      <nav className='flex border-b-[1px] border-[rgb(255,255,255,0.1)] w-full items-center text-white z-[5]'>

        {/* Logo */}
        <div className="xl:p-[3rem_2rem] p-[2rem_2rem] xl:flex-none flex-1 justify-start xl:basis-[calc(100%/3)]">
          <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Hamburger */}
        <div className="xl:hidden flex p-[2rem_2rem] w-[8rem] justify-end">
          {menu ?
            (
              <svg className="w-8 h-8" onClick={() => setMenu(() => false)} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )
            :
            (
              <svg className="w-8 h-8 rotate-180" onClick={() => setMenu(() => true)} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            )
          }
        </div>

        {/* Links */}
        <div className="p-[3rem_2rem] font-semibold justify-center items-center gap-[6rem] border-l-[1px] border-[rgb(255,255,255,0.1)] basis-[calc(100%/3)] hidden xl:flex">
          <p onMouseEnter={() => doThis(true)} onMouseLeave={() => doThis(false)} className='uppercase hover:underline underline-offset-4 decoration-[2px]'>About</p>
          <p onMouseEnter={() => doThis(true)} onMouseLeave={() => doThis(false)} className='uppercase hover:underline underline-offset-4 decoration-[2px]'>Work</p>
        </div>

        {/* Icons */}
        <div className="p-[3rem_2rem] h-full justify-center items-center gap-[3rem] border-l-[1px] border-[rgb(255,255,255,0.1)] flex-grow hidden xl:flex">

          {/* Graduation */}
          <svg onMouseEnter={() => doThis(true)} onMouseLeave={() => doThis(false)} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>


          {/* Globe */}
          <svg onMouseEnter={() => doThis(true)} onMouseLeave={() => doThis(false)} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>

          {/* Inbox */}
          <svg onMouseEnter={() => doThis(true)} onMouseLeave={() => doThis(false)} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>

        </div>

        {/* Contact */}
        <div onMouseEnter={() => { doThis(true); }} onMouseLeave={() => { doThis(false); }}
          className={"p-[3rem_2rem] hover:bg-white hover:text-[#060B1B] h-full transition-[background-color_color] " +
            "duration-[.4s] font-semibold justify-center items-center border-l-[1px] border-[rgb(255,255,255,0.1)] flex-grow hidden xl:flex"}>
          <p className='uppercase'>Get in touch</p>
        </div>

      </nav >

      {/* Grid and mobile menu */}
      <div className='h-full relative'>

        {/* Mobile Menu */}
        <div className={"h-full w-full xl:hidden absolute z-[10004] transition-[top_background] duration-500 ease-linear flex flex-col " + (menu ? "top-0 bg-[#060B1B]" : "-top-[150%]")}>

          <div className="font-semibold items-center border-b-[1px] px-[2rem] border-[rgb(255,255,255,0.1)] flex text-white flex-1">
            <p className='uppercase flex justify-start flex-1'>About</p>
            <p className='uppercase flex justify-end flex-1'>Work</p>
          </div>

          <div className="items-center border-b-[1px] px-[2rem] border-[rgb(255,255,255,0.1)] flex text-white flex-1">
            {/* Graduation */}
            <div className='flex flex-grow'>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>

            {/* Globe */}
            <div className='flex justify-center flex-grow'>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>

            {/* Inbox */}
            <div className='flex justify-end flex-grow'>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
          </div>

          <div className="font-semibold justify-around items-center flex flex-col text-white flex-1">
            <p className='uppercase flex items-center flex-1'>Get in touch</p>
          </div>

        </div>

        {/* Grid */}
        <div className='grid xl:grid-cols-[2fr_1fr] xl:grid-rows-[2fr_1fr] h-full'>

          <div className='border-[rgb(255,255,255,0.1)] h-full relative'>
            <Image src={"/aurora.jpg"} className="absolute inset-0 w-full h-full object-cover brightness-75" draggable={false} width={4272} height={2848} alt="Rocks image" priority />
          </div>

          <div className='border-l-[1px] text-[#747083] xl:pl-[5.4rem] xl:pr-[7rem] xl:py-[5.4rem] px-[2rem] flex xl:items-end items-center text-[18px] leading-[160%] font-semibold text-justify border-[rgb(255,255,255,0.1)] h-full'>
            <p>A vintage website for an old school barbershop. After going to this shop a few times, I decided that I had to make a (re)design for their website.</p>
          </div>

          <div className='border-t-[1px] group flex justify-between xl:px-[5.5rem] px-[2rem] items-center text-white border-[rgb(255,255,255,0.1)] h-full'>
            <h2 onMouseEnter={() => { doThis(true); }} onMouseLeave={() => { doThis(false); }}
              className='uppercase xl:group-hover:text-6xl xl:text-5xl text-xl transition-[font-size_width] duration-[.3s] font-black tracking-wider xl:w-[10vw] w-[50%]'>Recreation from scratch</h2>

            <svg onMouseEnter={() => { doThis(true); }} onMouseLeave={() => { doThis(false); }}
              className="xl:w-32 xl:h-32 w-16 h-16 xl:group-hover:rotate-45 transition-[transform] duration-[.35s]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>

          <div className='border-l-[1px] flex justify-between text-white border-t-[1px] border-[rgb(255,255,255,0.1)] h-full'>

            {/* Left */}
            <div className='h-full grow flex justify-center items-center w-[50%] border-r-[1px] border-[rgb(255,255,255,0.1)]'>
              <svg onMouseEnter={() => { doThis(true); }} onMouseLeave={() => { doThis(false); }} 
                className="xl:w-32 xl:h-32 w-16 h-16 transition-[translate(transform)] duration-300 hover:scale-[1.3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
            </div>

            {/* Right */}
            <div className='h-full grow flex justify-center items-center w-[50%]'>
              <svg onMouseEnter={() => { doThis(true); }} onMouseLeave={() => { doThis(false); }} 
                className="xl:w-32 xl:h-32 w-16 h-16 transition-[translate(transform)] duration-300 hover:scale-[1.3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

          </div>

        </div>

      </div>
    </div >
  )
}

export default Home
