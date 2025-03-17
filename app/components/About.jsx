import { assets, infoList, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1, delay: 0.3}} id='about' className='w-full px-[12%] py-10 scroll-mt-20'>

        {/* <motion.h4 initial={{y: -20, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration: 0.5, delay: 0.3}} className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4> */}

        <motion.h2 initial={{y: -20, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}} className='text-center text-5xl font-Ovo'>About <span className='text-red dark:text-darkTextPrimary' style={{ fontWeight: 500, fontFamily: 'font-Ovo' }}>Me</span></motion.h2>

        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8}} className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>

            <motion.div initial={{opacity: 0, scale: 0.8}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.8}} className='w-64 sm:w-80 rounded-3xl max-w-none mr-10'>
                <Image src={assets.user_image} alt='User Pic' className='w-full rounded-3xl' />
            </motion.div>

            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.8}} className='flex-1 flex flex-col items-start gap-2 ml-10'>
                <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.7}} className='mb-10 max-w-2xl font-Ovo'>I'm an Experienced full stack developer with over a 2 years of professional experience in the field.</motion.p>

                <motion.ul initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8, delay: 1}} className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon, iconDark, title, description}, index) => (
                        <motion.li initial={{scale: 0.8}} whileHover={{ y: -5 }} whileInView={{scale: 1}} className='border-[0.5px] border-white/50 rounded-[8px] bg-bgWhiteSecondary p-6 shadow-sm cursor-pointer duration-500 dark:border-darkBgSecondary dark:bg-darkBgSecondary' key={index}>
                            <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                            <h3 className='my-4 text-black font-semi-bold dark:text-white'>{title}</h3>
                            <p className='text-black/80 text-sm dark:text-white/80'>{description}</p>
                        </motion.li>
                    ))}
                </motion.ul>

                <motion.h4 initial={{y: 20, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration: 1.2, delay: 0.6}} className='my-6 text-gray-700 font-Ovo dark:text-white'>Skills I have</motion.h4>
                <motion.ul initial={{y: -20, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration: 1.3, delay: 0.7}} className='flex flex-wrap items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool, index) => (
                        <motion.li initial={{opacity: 0}} whileInView={{opacity: 1}} className='flex items-center justify-center w-12 sm:w-14 aspect-square cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                            <Image src={tool} alt='tool' className='w-5 sm:w-7'/>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About