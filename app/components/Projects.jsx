import React from 'react'
import { workData, assets } from '@/assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"

const Projects = ({isDarkMode}) => {
    return (
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1, delay: 0.3}} id='projects' className='w-full px-[12%] py-10 scroll-mt-20'>

            <motion.h2 initial={{y: -20, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}} className='my-10 text-center text-gray-800 font-500 text-5xl font-Ovo dark:text-white'>My <span className='text-red dark:text-darkTextPrimary' style={{ fontWeight: 500, fontFamily: 'font-Ovo' }}>Projects</span></motion.h2>

            <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.7}} className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Here's a look at my projects and the tech stack I used</motion.p>

            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.9, delay: 0.6}} className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
            {workData.map((project, index)=>(
                <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8, delay: 0.9}} key={index} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{backgroundImage: `url(${project.bgImage})`}}>
                    <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                        <div>
                            <h2 className='font-semibold'>{project.title}</h2>
                            <p className='text-sm text-gray-700'>{project.description}</p>
                        </div>
                        <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                            <Image src={assets.send_icon} alt='send-icon' className='w-5' />
                        </div>
                    </div>
                </motion.div>
            ))}
          </motion.div >
          <motion.a transition={{duration: 1, delay: 1.2}} href="https://github.com/praveengit11" target='_blank' className='w-max flex items-center justify-center gap-2 rounded-full px-10 py-3 mx-auto my-24 duration-500 bg-red text-white dark:bg-darkTextPrimary'>Github <Image src={assets.github_btn} alt='right-arrow-icon' className='w-4'/> </motion.a>
        </motion.div>
    )
}

export default Projects
