import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import { useState, useEffect } from 'react';

const Home: NextPage = () => {

  const [hover, setHover] = useState(false);
  const [color, setColor] = useState("#ffffff69");

  useEffect(() => {
    if (document) {
      const trailer = document.getElementById("trailer");

      if (trailer) {
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
  }, []);

  return (
    <div className='flex h-screen select-none flex-col overflow-hidden cursor-none'>
      <Head>
        <title>Cloning Cool Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Cursor */}
      <div id="trailer" className={`rounded-[50%] fixed z-[10000] top-0 left-0 pointer-events-none opacity-0 transition-all duration-500` + (hover ? ` h-[30px] w-[30px] bg-[#ffffff69] ` : " h-[20px] w-[20px] ") + (hover && color != "#ffffff69" ? `bg-[${color}]` : "bg-white")} />

      {/* Header */}
      <nav className='flex border-b-[1px] border-[rgb(255,255,255,0.1)] w-full text-white'>

        <div className="p-[3rem_2rem] gap-[1rem] items-center basis-[calc(100%/3)]">
          <svg className="w-8 h-8  " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        <div className="p-[3rem_2rem] font-semibold flex justify-center items-center gap-[6rem] border-l-[1px] border-[rgb(255,255,255,0.1)] basis-[calc(100%/3)]">
          <p onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='uppercase hover:underline underline-offset-4 decoration-[2px]'>About</p>
          <p onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='uppercase hover:underline underline-offset-4 decoration-[2px]'>Work</p>
        </div>

        <div className="p-[3rem_2rem] flex justify-center items-center gap-[3rem] border-l-[1px] border-[rgb(255,255,255,0.1)] flex-grow">

          {/* Graduation */}
          <svg onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>


          {/* Globe */}
          <svg onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>

          {/* Inbox */}
          <svg onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>

        </div>

        <div onMouseEnter={() => { setHover(true); setColor("#000000bd") }} onMouseLeave={() => { setHover(false); setColor("#ffffff69") }} className="p-[3rem_2rem] hover:bg-white hover:text-[#060B1B] transition-[background-color_color] duration-[.4s] font-semibold flex justify-center items-center gap-[1rem] border-l-[1px] border-[rgb(255,255,255,0.1)] flex-grow">
          <p className='uppercase'>Get in touch</p>
        </div>

      </nav >

      {/* Grid */}
      <div className='grid grid-cols-[2fr_1fr] grid-rows-[2fr_1fr] h-full'>

        <div className='border-[rgb(255,255,255,0.1)] h-full relative'>
          <Image src={"/aurora.jpg"} className="absolute inset-0 w-full h-full object-cover brightness-75" draggable={false} width={4272} height={2848} alt="Rocks image" priority />
        </div>

        <div className='border-l-[1px] text-[#747083] pl-[5.4rem] pr-[7rem] py-[5.4rem] flex items-end text-[18px] leading-[160%] font-semibold text-justify border-[rgb(255,255,255,0.1)] h-full'>
          <p>A vintage website for an old school barbershop. After going to this shop a few times, I decided that I had to make a (re)design for their website.</p>
        </div>

        <div className='border-t-[1px] group flex justify-between px-[5.5rem] items-center text-white border-[rgb(255,255,255,0.1)] h-full'>
          <h2 onMouseEnter={() => { setHover(true); setColor("#000000bd") }} onMouseLeave={() => { setHover(false); setColor("#ffffff69") }} className='uppercase group-hover:text-6xl text-5xl group-hover:w-[40%] transition-[font-size_width] duration-[.3s] font-black tracking-wider w-[10vw]'>Recreation from scratch</h2>

          <svg onMouseEnter={() => { setHover(true); setColor("#000000bd") }} onMouseLeave={() => { setHover(false); setColor("#ffffff69") }} className="w-32 h-32 group-hover:rotate-45 transition-[transform] duration-[.35s]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>

        <div className='border-l-[1px] flex justify-between text-white border-t-[1px] border-[rgb(255,255,255,0.1)] h-full'>

          {/* Left */}
          <div className='h-full grow flex justify-center items-center border-r-[1px] border-[rgb(255,255,255,0.1)]'>
            <svg onMouseEnter={() => { setHover(true); setColor("#000000bd") }} onMouseLeave={() => { setHover(false); setColor("#ffffff69") }} className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
          </div>

          {/* Right */}
          <div className='h-full grow flex justify-center items-center'>
            <svg onMouseEnter={() => { setHover(true); setColor("#000000bd") }} onMouseLeave={() => { setHover(false); setColor("#ffffff69") }} className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>

        </div>

      </div>

    </div >
  )
}

export default Home
