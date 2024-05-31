import React from 'react'
import aboutImg from '../assets/Designer (27).jpeg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>

        <div className='md:grid md:grid-cols-2 sm:py-16'>

            <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                    <p className='text-base lg:texg-lg'>
                    Hey there! I'm Sebastian, a junior web design and frontend developer on a journey of self-discovery and growth in the digital realm.

With a passion for crafting compelling online experiences, I've embarked on a self-taught journey that has fueled my love for coding and design. Every line of code and every pixel on the screen is a canvas for me to express creativity and functionality.

I thrive on challenges and am always eager to tackle new projects that push me beyond my comfort zone, helping me to evolve and refine my skills. Whether it's building sleek user interfaces, optimizing websites for performance, or experimenting with the latest design trends, I'm all in.

If you have a project that needs a fresh perspective and a dedicated approach, I'm your guy. Let's collaborate and create something amazing together while I continue to expand my horizons in the world of web development. Let's connect and turn ideas into reality!
                    </p>

                </div>

            </div>

            <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutImg} alt="" width={300} height={300} />
        </div>
    </div>
  )
}

export default About