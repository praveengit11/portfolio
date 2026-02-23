import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from "motion/react"
import { useState, useEffect } from 'react';

const Header = () => {

    const texts = ["Full Stack Developer", "ChatBot Developer"];
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const stats = [
        { label: "Years Experience", value: "2+" },
        { label: "Projects Worked", value: "10+" },
        { label: "Problems Solved", value: "390+" }
    ];

    useEffect(() => {
        const currentText = texts[index];
        let timeout;
    
        if (!isDeleting) {
          // Typing logic
          if (displayText.length < currentText.length) {
            timeout = setTimeout(() => {
              setDisplayText(currentText.slice(0, displayText.length + 1));
            }, 150); // Typing speed
          } else {
            // Wait for a second before starting to delete
            timeout = setTimeout(() => setIsDeleting(true), 1000);
          }
        } else {
          // Deleting logic
          if (displayText.length > 0) {
            timeout = setTimeout(() => {
              setDisplayText(currentText.slice(0, displayText.length - 1));
            }, 50); // Deleting speed
          } else {
            // Switch to the next text after deleting
            setIsDeleting(false);
            setIndex((index + 1) % texts.length);
          }
        }
    
        return () => clearTimeout(timeout);
      }, [displayText, isDeleting, index, texts]);

    return (
        <section id="top" className='section pt-28 md:pt-32 min-h-[100vh] flex items-center justify-center'>
            <div className='relative'>
                <div className='absolute -top-20 right-0 w-72 h-72 bg-red/10 dark:bg-darkTextPrimary/10 blur-3xl rounded-full' />
                <div className='absolute top-24 -left-10 w-64 h-64 bg-red/5 dark:bg-darkTextPrimary/10 blur-3xl rounded-full' />
            </div>

            <div className='relative grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center'>
                <div>
                    <motion.h3 initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.2}} className='text-lg md:text-2xl font-Ovo text-gray-700 dark:text-white/80'>
                        Hi! I'm <span className='text-red dark:text-darkTextPrimary' style={{ fontWeight: 500, fontFamily: 'font-Ovo' }}>Praveen Kumar</span>
                    </motion.h3>

                    <motion.h1 initial={{y: -30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.8, delay: 0.4}} className='mt-4 text-4xl sm:text-6xl lg:text-[70px] font-Ovo leading-tight text-gray-900 dark:text-white'>
                        {displayText}
                        <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.8, repeat: Infinity }}>|</motion.span>
                    </motion.h1>

                    <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.6}} className='mt-4 text-lg text-gray-700 dark:text-white/80'>
                        Software Engineer at Kore.ai. I build reliable AI-powered products with thoughtful UX.
                    </motion.p>

                    {/* <motion.div initial={{opacity: 0, y: 10}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6, delay: 0.8}} className='mt-6 flex flex-wrap gap-3'>
                        <span className='chip'>MERN</span>
                        <span className='chip'>Chatbots</span>
                        <span className='chip'>FastAPI</span>
                        <span className='chip'>React</span>
                    </motion.div> */}

                    <div className='mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4'>
                        <motion.a initial={{y: 10, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.8}} href="https://github.com/praveengit11" target='_blank' className='btn-primary'>
                            Github <Image src={assets.github_btn} className='w-4' alt='github icon' />
                        </motion.a>

                        <motion.a initial={{y: 10, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.9}} href="/adari-praveen-kumar-resume.pdf" download className='btn-secondary card-base'>
                            Resume <Image src={assets.download_icon} className='w-4 dark:invert dark:brightness-0' alt='download icon' />
                        </motion.a>
                    </div>
                </div>

                <div className='grid sm:grid-cols-2 gap-4'>
                    <motion.div initial={{scale: 0.9, opacity: 0}} whileInView={{scale: 1, opacity: 1}} transition={{duration: 0.6}} className='card-base p-6 flex items-center gap-4'>
                        <Image src={assets.profile_img} className='rounded-full w-16 h-16 object-cover' alt='profile picture' />
                        <div>
                            <p className='text-sm text-gray-500 dark:text-white/60'>Based in</p>
                            <p className='text-lg font-semibold text-gray-900 dark:text-white'>Hyderabad</p>
                        </div>
                    </motion.div>

                    <motion.div initial={{scale: 0.9, opacity: 0}} whileInView={{scale: 1, opacity: 1}} transition={{duration: 0.6, delay: 0.1}} className='card-base p-6'>
                        {/* <p className='text-sm text-gray-500 dark:text-white/60'>Currently</p> */}
                        <p className='mt-2 text-lg font-semibold text-gray-900 dark:text-white'>Kore.ai</p>
                        <p className='text-sm text-gray-600 dark:text-white/70'>Software Engineer</p>
                    </motion.div>

                    <motion.div initial={{scale: 0.9, opacity: 0}} whileInView={{scale: 1, opacity: 1}} transition={{duration: 0.6, delay: 0.2}} className='card-base p-6 sm:col-span-2'>
                        <p className='text-sm text-gray-500 dark:text-white/60'>Quick Stats</p>
                        <div className='mt-4 grid grid-cols-3 gap-4 text-center'>
                            {stats.map((stat) => (
                                <div key={stat.label}>
                                    <p className='text-2xl font-semibold text-gray-900 dark:text-white'>{stat.value}</p>
                                    <p className='text-xs text-gray-500 dark:text-white/60'>{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Header