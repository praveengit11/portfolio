import React from 'react'
import { serviceData, assets } from '@/assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"

const Experience = ({isDarkMode}) => {
  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.5}} id='experience' className='w-full px-[12%] py-10 scroll-mt-20'>

          {/* <motion.h4 initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.3, delay: 0.5}} className='text-center mb-2 text-lg font-Ovo'>Work</motion.h4> */}

          <motion.h2 initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}} className='my-10 text-center text-gray-800 font-500 text-5xl dark:text-white font-Ovo'>Coding <span className='text-red text-5xl dark:text-darkTextPrimary' style={{ fontWeight: 500, fontFamily: 'font-Ovo' }}>Profiles</span></motion.h2>

          <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.7, delay: 0.5}} className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Having successfully solved approximately 350 coding problems, I'm driven to further refine my problem-solving skills by learning new patterns and techniques.</motion.p>

          {/* <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.9, delay: 0.8}} className='grid grid-cols-auto gap-6 my-10'>
            {serviceData.map(({icon, iconDark, title, description, link}, index)=>(
                <motion.div initial={{scale: 0.8}} whileInView={{scale: 1}} whileHover={{ y: -5 }} key={index} className='px-8 py-12 border-[0.5px] border-redSecondary rounded-[4px_4px_8px_8px] border-b-4 bg-bgWhiteSecondary p-6 cursor-pointer duration-500 dark:border-darkTextPrimary dark:bg-darkBgSecondary'>
                    <Image src={ isDarkMode ? iconDark : icon} alt='profile logo' className='w-10'/>
                    <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description}</p>
                    <a href={link} className='flex items-center gap-2 text-sm mt-5'>Click to visit <Image src= { isDarkMode ? assets.right_arrow_white : assets.right_arrow } alt='right arrow' className='w-4'/></a>
                </motion.div>
            ))}
          </motion.div>       */}

<motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.9, delay: 0.8}} className='grid grid-cols-auto gap-6 my-10'>
    {serviceData.map(({icon, iconDark, title, description, link}, index) => (
        <motion.a 
            href={link} // Make the entire card a clickable link
            target='_blank'
            initial={{scale: 0.8}} 
            whileInView={{scale: 1}} 
            whileHover={{ y: -5 }} 
            key={index} 
            className='px-12 py-12 border-[0.5px] border-redSecondary rounded-[4px_4px_8px_8px] border-b-4 bg-bgWhiteSecondary p-6 cursor-pointer duration-500 dark:border-darkTextSecondary dark:bg-darkBgSecondary/80'
        >

            {/* Solved Count at the Bottom */}
            <h1 className='text-4xl text-center font-bold text-gray-800 dark:text-white/90 mb-8'>
                {description.split(' ')[1].replace('+', '')}+
            </h1>

            {/* Platform Name (Title) and Logo - Centered at the Top */}
            <div className='flex items-center justify-center gap-4'>
                <Image src={isDarkMode ? iconDark : icon} alt='platform logo' className='w-8'/>
                <h3 className='text-lg text-gray-700 dark:text-white'>{title}</h3>
            </div>

        </motion.a>
    ))}
</motion.div>

    </motion.div>
  )
}

export default Experience
