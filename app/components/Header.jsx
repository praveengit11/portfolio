import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from "motion/react"
import { Ovo } from 'next/font/google';
import { useState, useEffect } from 'react';

const Header = () => {

    const texts = ["Full Stack Developer", "ChatBot Developer"];
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

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
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>

            <motion.div initial={{scale: 0}} whileInView={{scale: 1}} transition={{duration: 0.8, type: 'spring', stiffness: 100}}><Image src={assets.profile_img} className='rounded-full w-32' alt='profile picture' /></motion.div>
            
            <motion.h3 initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='text-xl md:text-2xl mb-3 font-Ovo'>Hi! I'm <span className='text-red dark:text-darkTextPrimary' style={{ fontWeight: 500, fontFamily: 'font-Ovo' }}>Praveen Kumar</span></motion.h3>
            
            {/* <motion.h1 initial={{y: -30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.8, delay: 0.5}} className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Full Stack Developer</motion.h1> */}

            <motion.h1 initial={{y: -30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.8, delay: 0.5}} className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>{displayText}<motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.8, repeat: Infinity }}>|</motion.span></motion.h1>
            
            <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.7}} >Software Engineer at Kore.ai</motion.p>
            
            <div className='flex flex-col sm:flex-row items-center gap-5 mt-4'>
            
                <motion.a initial={{y: 30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 1}} href="https://github.com/praveengit11" target='_blank' className='px-10 py-3 rounded-full flex items-center gap-2 bg-red text-white dark:bg-darkTextPrimary'>Github <Image src={assets.github_btn} className='w-4' alt='profile picture' /></motion.a>
            
                <motion.a initial={{y: 30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 1.2}} href="/adari-praveen-kumar-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:bg-white dark:text-black'>Resume <Image src={assets.download_icon} className='w-4' alt='profile picture' /></motion.a>

                {/* <div className="flex self-start">
                    <a href="#" className="main-btn relative flex items-center self-start overflow-hidden rounded-[30px] border-[1.48px] border-red dark:border-darkTextPrimary font-semibold text-inherit transition-all duration-500 ease-in-out hover:text-white">
                        <span className="btn-text px-8">Download CV</span>
                        <span className="btn-icon flex items-center justify-center rounded-full bg-red dark:bg-darkTextPrimary p-[1.2rem]">
                            <Image src={assets.github_btn} className='w-4' alt='profile picture' />
                        </span>
                    </a>
                </div> */}

            </div>
        
        </div>
    )
}

export default Header