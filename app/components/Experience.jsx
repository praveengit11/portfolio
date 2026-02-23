import React from 'react'
import { serviceData, assets } from '@/assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"

const Experience = ({isDarkMode}) => {
  return (
    <motion.section initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.4}} id='experience' className='section'>
          <motion.h2 initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}} className='section-heading'>Coding <span className='text-red dark:text-darkTextPrimary' style={{ fontWeight: 500, fontFamily: 'font-Ovo' }}>Profiles</span></motion.h2>
          <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.7, delay: 0.6}} className='section-subtitle'>Having successfully solved approximately 390 coding problems, I'm driven to further refine my problem-solving skills by learning new patterns and techniques.</motion.p>

          <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8, delay: 0.6}} className='relative mt-12'>
            <div className='absolute left-3 top-0 bottom-0 w-px bg-gray-200 dark:bg-white/10' />
            <div className='space-y-6 pl-10'>
              {serviceData.map(({icon, iconDark, title, description, link}, index) => (
                <motion.a
                  href={link}
                  target='_blank'
                  key={index}
                  initial={{y: 20, opacity: 0}}
                  whileInView={{y: 0, opacity: 1}}
                  transition={{duration: 0.5, delay: 0.1 * index}}
                  className='relative block card-base card-hover p-6'
                >
                  <span className='absolute -left-[34px] top-6 w-3 h-3 rounded-full bg-red dark:bg-darkTextPrimary shadow-[0_0_0_6px_rgba(217,4,41,0.12)] dark:shadow-[0_0_0_6px_rgba(48,112,231,0.2)]' />
                  <div className='flex flex-wrap items-center justify-between gap-4'>
                    <div className='flex items-center gap-4'>
                      <Image src={isDarkMode ? iconDark : icon} alt='platform logo' className='w-8' />
                      <div>
                        <h3 className='text-lg font-semibold text-gray-800 dark:text-white'>{title}</h3>
                        <p className='text-sm text-gray-600 dark:text-white/70'>{description}</p>
                      </div>
                    </div>
                    <span className='chip'>{description.split(' ')[1].replace('+', '')}+ solved</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
    </motion.section>
  )
}

export default Experience
