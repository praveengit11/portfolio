import { assets, infoList, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.section initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1, delay: 0.3}} id='about' className='section'>
        <motion.h2 initial={{y: -20, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}} className='section-heading'>About <span className='text-red dark:text-darkTextPrimary' style={{ fontWeight: 500, fontFamily: 'font-Ovo' }}>Me</span></motion.h2>
        <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.6}} className='section-subtitle'>
          I design, build, and ship chatbots and full-stack products with crisp UX and reliable performance.
        </motion.p>

        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8}} className='mt-12 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start'>
            <motion.div initial={{opacity: 0, scale: 0.95}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.7}} className='card-base p-4'>
                <Image src={assets.user_image} alt='User Pic' className='w-full rounded-2xl object-cover' />
            </motion.div>

            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.5}} className='flex flex-col gap-6'>
                <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.7}} className='text-lg text-gray-700 dark:text-white/80 font-Ovo'>
                  I am an experienced Kore.ai Chatbot Developer with over two years of professional expertise in the field, along with hands-on experience in the MERN stack.
                </motion.p>

                <motion.ul initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.7, delay: 0.8}} className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                    {infoList.map(({icon, iconDark, title, description}, index) => (
                        <motion.li initial={{scale: 0.95}} whileHover={{ y: -5 }} whileInView={{scale: 1}} className='card-base card-hover p-5' key={index}>
                            <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7' />
                            <h3 className='mt-4 text-gray-900 font-semibold dark:text-white'>{title}</h3>
                            <p className='text-sm text-gray-600 dark:text-white/70'>{description}</p>
                        </motion.li>
                    ))}
                </motion.ul>

                <div>
                  <motion.h4 initial={{y: 10, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration: 0.6, delay: 0.4}} className='text-gray-700 font-Ovo dark:text-white'>Skills I have</motion.h4>
                  <motion.ul initial={{y: -10, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration: 0.7, delay: 0.5}} className='mt-4 flex flex-wrap items-center gap-3'>
                      {toolsData.map((tool, index) => (
                          <motion.li initial={{opacity: 0}} whileInView={{opacity: 1}} className='card-base card-hover flex items-center justify-center w-12 sm:w-14 aspect-square' key={index}>
                              <Image src={tool} alt='tool' className='w-5 sm:w-7'/>
                          </motion.li>
                      ))}
                  </motion.ul>
                </div>
            </motion.div>
        </motion.div>
    </motion.section>
  )
}

export default About