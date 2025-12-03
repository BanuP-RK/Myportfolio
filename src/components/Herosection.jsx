import React from 'react'
import { Twitter,Linkedin,Youtube,Github,BookOpen,MessageSquare } from 'lucide-react';

const Herosection = () => {
  return (
    <>
    {/* //Navbar */}
        
            <div className='w-full flex flex-col bg-white sm:flex-row sm:items-center sm:justify-between
      fixed z-10 top-0 left-0 shadow-md shadow-black rounded-md p-4 space-y-1.5 sm:space-y-0 sm:text-2xl '>
            {/* left-content */}
                <div className='flex items-center justify-center gap-2 '>
                    <img src='/Myportfolio/profile2.jpeg' alt='profile-photo' className='size-24 rounded-full block'/>
                    <span className='text-black font-serif tracking-wider max-[782px]:text-sm text-xl'>BANUPRIYA KRISHNASAMY</span>
                </div>
            {/* Right-content */}
                <div className='sm:flex-row sm:items-center sm:justify-center sm:gap-8  flex flex-col gap-2 
                '>
                <a href='#home' className='text-[18px] max-[782px]: text-sm font-serif hover:text-purple-500 hover:underline focus:text-purple-500 hover:font-bold '>HOME</a>
                <a href='#about' className='text-[18px]  max-[782px]: text-sm font-serif hover:text-purple-500 hover:underline focus:text-purple-500 hover:font-bold'>ABOUT</a>
                <a href='#project' className='text-[18px] max-[782px]: text-sm font-serif hover:text-purple-500 hover:underline focus:text-purple-500 hover:font-bold '>PROJECTS</a>
                <a href='#contact' className='text-[18px]  max-[782px]: text-sm font-serif hover:text-purple-500 hover:underline focus:text-purple-500 hover:font-bold'>CONTACT</a>
                </div>
            </div>
            {/* bottom-content */}
            <div className='bg-[url("/Myportfolio/backgroundimage.avif")] bg-no-repeat bg-center bg-cover min-h-screen pt-32' id='home'>
                <div className='relative text-center pt-44 '>
                    <h1 className='p-6 font-extrabold sm:text-3xl uppercase '>Hey, I'm Banupriya Krishnasamy</h1>
                    <p className='p-4 mx-auto max-w-xl text-center'>A result-oriented Front-End Web Application Developer crafting modern, 
                        responsive websites and dynamic web applications that deliver seamless user experiences and support product success.</p>
                         <a href='#project'><button className='bg-purple-500 mt-4 text-white font-bold text-xl rounded-md px-4 py-2
                         hover:bg-purple-700 focus:outline focus:bg-purple-900 focus:outline-offset-2
                          focus:outline-blue-400 shadow-md shadow-black transition-all duration-300 cursor-pointer'>
                            Projects</button></a>
                </div>
                {/* // left-side social media section */}
                <div className='absolute top-1/3 h-fit left-0 w-fit rounded-md bg-white flex flex-col space-y-2 z-10 p-2 
                shadow-lg shadow-black max-[666px]:hidden'>

                    <div className='bg-black text-white w-8 h-10  rounded-md flex items-center justify-center
                    hover:bg-purple-500 hover:scale-105 transition'>
                       <a href='https://www.linkedin.com/in/banupriya-krishnasamy-a53526322/' target='_blank'> <Linkedin  className="w-6 h-8  " /></a>
                    </div>
                    <div className='bg-black text-white  w-8 h-10  rounded-md flex items-center justify-center
                    hover:bg-purple-500 hover:scale-105 transition'>
                        <a href='https://x.com/BanupriyaK83274' target='_blank'><Twitter className="w-6 h-8 " /></a>
                    </div>
                    <div className='bg-black text-white  w-8 h-10  rounded-md flex items-center justify-center
                    hover:bg-purple-500 hover:scale-105 transition'>
                        <a href='https://www.youtube.com/@banupriyakrishnasamy' target='_blank'><Youtube  className="w-6 h-8 " /></a>
                    </div>
                    <div className='bg-black text-white  w-8 h-10  rounded-md flex items-center justify-center
                    hover:bg-purple-500 hover:scale-105 transition'>
                       <a href='https://github.com/BanuP-RK' target='_blank'> <Github className="w-6 h-8 " /></a>
                    </div>
                    <div className='bg-black text-white  w-8 h-10  rounded-md flex items-center justify-center
                    hover:bg-purple-500 hover:scale-105 transition'>
                        <a href='https://dev.to/banupriya_krishnasamy_a22' target='_blank'><BookOpen className="w-6 h-8 "/></a>
                    </div>
                </div>
                {/* bottom fixed position */}
                <div className='flex items-end justify-end  gap-2 fixed right-4 pt-10'>
                    {/* <button className='bg-white mt-4 text-black font-bold text-xl rounded-md px-4 py-2
                         hover:bg-purple-700 focus:outline focus:bg-purple-900 focus:outline-offset-2
                          focus:outline-blue-400 shadow-md shadow-black transition-all duration-300'>
                            Chat With me
                    </button> */}
                    <a href='#contact'>
                    <button className='bg-purple-500 rounded-full mt-4 text-white font-bold text-xl p-4
                         hover:bg-purple-700 focus:outline focus:bg-purple-900 focus:outline-offset-2
                          focus:outline-blue-400 shadow-md shadow-black transition-all duration-300 cursor-pointer'>
                            <MessageSquare /></button></a>
                </div>
            </div>
        {/* //about me section */}
        {/* //first section -about me */}
        <div className='bg-gray-200 w-full flex flex-col space-y-2 h-fit scroll-mt-36' id='about'>
            <div className='text-center flex  flex-col space-y-2 items-center  p-8 '>
                <span className='text-3xl tracking-wide  text-block font-bold '>ABOUT ME</span>
                <div className='w-10 h-2 bg-purple-500 rounded-md mt-2' ></div>
                    <span className='mx-auto max-w-xl text-md tracking-wide font-poppins'>Here you will find more information about me, 
                        what I do, and my current skills mostly in terms of programming and technology</span>
            </div>
            {/* //second section -about me */}
            <div className='w-full h-fit max-[620px]:p-10 p-20 flex items-start justify-between  max-[620px]:flex-col max-[620px]:gap-4 '>
                {/* left-content */}
                <div className='w-1/3 ml-28 flex flex-col space-y-6 p-2  max-[1346px]:w-1/2 max-[1346px]:ml-2 max-[620px]:w-fit
                max-[620px]:ml-0'>
                    <span className='text-2xl  tracking-wide font-bold font-serif'>Get to know me !</span>
                    <p className='text-gray-500 text-lg  font-semibold tracking-wide text-justify font-poppins'>I’m a <strong>
                        Frontend-Focused Web Developer</strong> who builds and manages the front-end of websites and web applications, 
                        creating clean, responsive, and user-friendly digital experiences. </p>
                    <p className='text-gray-500 text-lg font-semibold tracking-wide text-justify font-poppins'> Along with development, I also provide 
                        creative <strong>design services</strong> including logo design, business cards, promotion posters, 
                        social media posts, and invitation designs. I enjoy sharing useful content related to frontend development, JavaScript, React, and UI/UX, hoping to help others in the developer community. I’m open to job opportunities where I can contribute, learn, and grow—so if you have an 
                        opportunity that aligns with my skills and experience, feel free to connect with me on 
                         <span> </span><a href='https://shorturl.at/mF4Ln'target="-blank" rel="noopener noreferrer"className='text-blue-700 underline'>LinkedIn</a>  
                        <span> </span> or  <span> </span>
                        <a href='https://shorturl.at/SE7qg' target="-blank" rel="noopener noreferrer" className='text-blue-700 underline'>Instagram</a>
                    </p>
                    <a href='#contact'><button className='bg-purple-500 w-fit mt-4 text-white font-bold text-xl rounded-md px-6 py-2
                         hover:bg-purple-700 focus:outline focus:bg-purple-900 focus:outline-offset-2
                          focus:outline-blue-400 shadow-md shadow-black transition-all duration-300 cursor-pointer'>
                            Contact </button></a>
                </div>
                {/* right-content */}
                <div className='w-1/3 ml-28 max-[620px]:ml-2   p-2 flex flex-col space-y-6 max-[620px]:w-full '>
                <span className='text-2xl  tracking-wide font-bold font-serif'>My Skills</span>
                <div className='flex flex-wrap gap-4  rounded-md max-[1128px]:grid max-[620px]:grid-cols-2'>
                
                {[{label :"HTML"},{label :"CSS"},{label :"Javascript"},{label :"React"},{label :"Tailwind CSS"},
                    {label :"Responsive Design"},{label :"Git"},{label :"Github"},{label :"SAP - MM"}
                ].map((item,index)=>(
                    
                    <button key={index} className='bg-gray-400 px-6 py-2 rounded-md font-semibold shadow-md
                     shadow-black'>{item.label}</button>
                    
                )

                )}
                </div>
                
                </div>
            </div>
        </div>
         {/* //Project section */}
        {/* //Project section */}
        <div className='bg-gray-200 w-full flex flex-col space-y-2 h-fit scroll-mt-36 ' id='project'>
            <div className='text-center flex  flex-col space-y-2 items-center  p-8 '>
                <span className='text-3xl tracking-wide  text-block font-bold '>PROJECTS</span>
                <div className='w-10 h-2 bg-purple-500 rounded-md mt-2' ></div>
                    <span className='mx-auto max-w-xl text-md tracking-wide font-poppins'>Here you will find some of the personal and 
                    clients projects that I created with each project containing its own case study</span>
            </div>
            <div className='w-full h-fit  flex items-start justify-start gap-10 p-10 mt-0 max-[890px]:flex-col max-[890px]:space-y-2'>
                <div className=' w-1/2  mb-4 max-[890px]:w-full max-[890px]:text-center'>
                <img src='/Myportfolio/p1.png' alt='image-loading' className='w-full h-full'></img>
                </div>
                <div className=' w-1/2  mb-4 p-18 max-[890px]:w-full'>
                <span className='text-3xl tracking-wide  text-block font-bold p-4' >Portfolio</span>
                <p className=' max-w-xl text-md tracking-wide font-poppins leading-6 p-4'>
                        My Portfolio Website is a fully responsive and visually appealing personal site created to showcase my skills, experience, and projects in a clean and structured way. 
                        It highlights who I am as a developer and serves as a central hub for recruiters, clients, and collaborators to explore my work..
                </p>
                <button className='bg-purple-500 w-fit mt-2 ml-4 text-white font-bold text-xl rounded-md px-6 py-2
                         hover:bg-purple-700 focus:outline focus:bg-purple-900 focus:outline-offset-2
                          focus:outline-blue-400 shadow-md shadow-black transition-all duration-300 mb-12 uppercase'>
                            LIVE LINK
                </button>
                </div>
            </div>

             <div className='w-full h-fit  flex items-start justify-start gap-10 p-10 mt-0 max-[890px]:flex-col max-[890px]:space-y-2'>
                <div className=' w-1/2  mb-4 max-[890px]:w-full max-[890px]:text-center'>
                <img src='/Myportfolio/quiz.png' alt='image-loading' className='w-full h-full'></img>
                </div>
                <div className=' w-1/2  mb-4 p-18 max-[890px]:w-full'>
                <span className='text-3xl tracking-wide  text-block font-bold p-4' >Quiz App</span>
                <p className=' max-w-xl text-md tracking-wide font-poppins leading-6 p-4  '>
                    The Quiz App is an interactive and user-friendly web application designed to help users test their knowledge 
                    through engaging multiple-choice quizzes. It features smooth navigation,dynamic question handling, 
                        instant scoring, and a responsive UI for a seamless experience across devices.
                </p>
                <a href='https://banup-rk.github.io/Quiz/' target='_blank'>
                <button className='bg-purple-500 w-fit mt-2 ml-4 text-white font-bold text-xl rounded-md px-6 py-2
                         hover:bg-purple-700 focus:outline focus:bg-purple-900 focus:outline-offset-2
                          focus:outline-blue-400 shadow-md shadow-black transition-all duration-300 mb-12 uppercase cursor-pointer'>
                            Live Link
                </button>
                </a>
                </div>
            </div>

             <div className='w-full h-fit  flex items-start justify-start gap-10 p-10 mt-0 max-[890px]:flex-col max-[890px]:space-y-2'>
                <div className=' w-1/2  mb-4 max-[890px]:w-full max-[890px]:text-center'>
                <img src='/Myportfolio/p3.png' alt='image-loading' className='w-full h-full'></img>
                </div>
                <div className=' w-1/2  mb-4 p-18 max-[890px]:w-full '>
                <span className='text-3xl tracking-wide  text-block font-bold p-4' >Film Finder</span>
                <p className=' max-w-xl text-md tracking-wide font-poppins leading-6 p-4'>
                        Film Finder is a sleek and intelligent movie search application that helps users discover films quickly and effortlessly. 
                        It allows users to search for any movie,view detailed information, and explore trending or
                         popular titles with a smooth and responsive interface.
                </p>
                <a href='https://banup-rk.github.io/Movie-search/' target='_blank'>
                <button className='bg-purple-500 w-fit mt-2 ml-4 text-white font-bold text-xl rounded-md px-6 py-2
                         hover:bg-purple-700 focus:outline focus:bg-purple-900 focus:outline-offset-2
                          focus:outline-blue-400 shadow-md shadow-black transition-all duration-300 mb-12 uppercase cursor-pointer'>
                            LIVE LINK
                </button>
                </a>
                </div>
            </div>

             <div className='w-full h-fit  flex items-start justify-start gap-10 p-10 mt-0 max-[890px]:flex-col max-[890px]:space-y-2'>
                <div className=' w-1/2  mb-4 max-[890px]:w-full max-[890px]:text-center'>
                <img src='Myportfolio/login.png' alt='image-loading' className='w-full h-full'></img>
                </div>
                <div className=' w-1/2  mb-4 p-18 max-[890px]:w-full '>
                <span className='text-3xl tracking-wide  text-block font-bold p-4' >Authentication Page</span>
                <p className=' max-w-xl text-md tracking-wide font-poppins leading-6 p-4'>
                       The Authentication System lets users easily create an account, log in securely,
                        reset forgotten passwords, and log out safely — all through a simple and user-friendly interface.
                </p>
                <a href='https://banup-rk.github.io/authentication-page/' target='_blank'>
                <button className='bg-purple-500 w-fit mt-2 ml-4 text-white font-bold text-xl rounded-md px-6 py-2
                         hover:bg-purple-700 focus:outline focus:bg-purple-900 focus:outline-offset-2
                          focus:outline-blue-400 shadow-md shadow-black transition-all duration-300 mb-12 uppercase'>
                            Live Link
                </button>
                </a>
                </div>
            </div>
        </div>
        {/* Contact section */}
        <div className='bg-gray-200 w-full flex flex-col space-y-2 h-fit scroll-mt-36 ' id='contact'>
            <div className='text-center flex  flex-col space-y-2 items-center  p-8 '>
                <span className='text-3xl tracking-wide  text-block font-bold '>CONTACT</span>
                <div className='w-10 h-2 bg-purple-500 rounded-md mt-2' ></div>
                    <span className='mx-auto max-w-xl text-md tracking-wide font-poppins'>
                        Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
                    </span>
                </div>

                <div className='bg-gray-200 flex items-center justify-center p-10 '>
                    <div className='bg-amber-50 p-2 w-1/2 rounded-md shadow-md shadow-black '>
                        <form className='flex flex-col gap-4 ' action="https://formspree.io/f/myzrjopo" method="POST">
                        <label  className='text-xl tracking-wide font-poppins text-gray-500 '>Name </label>
                        <input type='text' placeholder='Enter your name' className='p-4 bg-gray-200 rounded-md outline-none' name='name'></input>
                        <label  className='text-xl tracking-wide font-poppins text-gray-500'>Email</label>
                        <input type='email' placeholder='Enter your email' className='p-4 bg-gray-200 rounded-md outline-none' name='email'></input>
                       
                        <label className='text-md font-poppins text-gray-500'>Message</label>
                        <textarea 
                            className=' p-4 rounded-md font-poppins outline-none bg-gray-200'
                            placeholder='Type your message here...' name='message'
                        />
                        <div className='text-right'>
                        <button className='bg-purple-500 w-fit mt-2 ml-4 text-white font-bold text-xl rounded-md px-6 py-2
                         hover:bg-purple-700 focus:outline focus:bg-purple-900 focus:outline-offset-2
                          focus:outline-blue-400 shadow-md shadow-black transition-all duration-300 mb-12 uppercase' type='submit'>
                            SUBMIT
                        </button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        {/* Footer section */}
            <div className='bg-black text-amber-50 w-full flex flex-col space-y-2 h-fit scroll-mt-36 ' id='contact'>
            <div className='text-center flex  flex-col space-y-2   p-8 '>
                <div className='flex items-start justify-between gap-4'>
                    <div className='flex flex-col space-y-6'>
                        <span className='text-xl tracking-wide text-left text-block font-bold font-poppins '>
                            BANUPRIYA KRISHNASAMY</span>
                        <span className='text-sm tracking-wide  text-block font-semibold max-w-xl text-left font-poppins '>
                            A Frontend focused Web Developer building 
                            the Frontend of Websites and Web Applications that leads to the success of the overall product</span>
                    </div>
                    <div className='flex flex-col space-y-6'>
                        <span className='text-xl tracking-wide  text-block font-bold '>SOCIAL</span>
                        <div className='flex gap-2 z-50'>
                             <div className='bg-black text-white w-8 h-10  rounded-md flex items-center justify-center
                            hover:bg-purple-500 hover:scale-105 transition'>
                            <a href='https://www.linkedin.com/in/banupriya-krishnasamy-a53526322/' target='_blank'> <Linkedin  className="w-6 h-8  " /></a>
                            </div>
                             <div className='bg-black text-white  w-8 h-10  rounded-md flex items-center justify-center
                             hover:bg-purple-500 hover:scale-105 transition'>
                            <a href='https://x.com/BanupriyaK83274' target='_blank'><Twitter className="w-6 h-8 " /></a>
                            </div>
                            <div className='bg-black text-white  w-8 h-10  rounded-md flex items-center justify-center
                             hover:bg-purple-500 hover:scale-105 transition'>
                             <a href='https://www.youtube.com/@banupriyakrishnasamy' target='_blank'><Youtube  className="w-6 h-8 " /></a>
                            </div>
                             <div className='bg-black text-white  w-8 h-10  rounded-md flex items-center justify-center
                             hover:bg-purple-500 hover:scale-105 transition'>
                            <a href='https://github.com/BanuP-RK' target='_blank'> <Github className="w-6 h-8 " /></a>
                            </div>
                            <div className='bg-black text-white  w-8 h-10  rounded-md flex items-center justify-center
                             hover:bg-purple-500 hover:scale-105 transition'>
                             <a href='https://dev.to/banupriya_krishnasamy_a22' target='_blank'><BookOpen className="w-6 h-8 "/></a>
                             </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-1 bg-purple-500 rounded-md mt-6' ></div>
                    <span className='mx-auto max-w-xl text-sm tracking-wide font-poppins'>
                        &copy; copyrights 2025,Made by <a href='#home' ><span className='underline'>Banupriya</span></a>
                    </span>
                </div>
                </div>
        
    </>
    
  )
}

export default Herosection

{/* <div className='flex flex-wrap gap-4  rounded-md '>
                    <button className='bg-gray-400 px-6 py-2 rounded-md font-bold shadow-md shadow-black'>HTML</button>
                    <button className='bg-gray-400 px-6 py-2 rounded-md shadow-md shadow-black'>CSS</button>
                    <button className='bg-gray-400 px-6 py-2 rounded-md shadow-md shadow-black'>Javascript</button>
                    <button className='bg-gray-400 px-6 py-2 rounded-md shadow-md shadow-black'>React</button>
                    <button className='bg-gray-400 px-6 py-2 rounded-md shadow-md shadow-black'>Tailwindcss</button>
                    <button className='bg-gray-400 px-6 py-2 rounded-md shadow-md shadow-black'>Responsive Design</button>
                    <button className='bg-gray-400 px-6 py-2 rounded-md shadow-md shadow-black'>Git</button>
                    <button className='bg-gray-400 px-6 py-2 rounded-md shadow-md shadow-black'>Github</button>
                    <button className='bg-gray-400 px-6 py-2 rounded-md shadow-md shadow-black'>SAP (MM)</button>
                    
                </div> */}