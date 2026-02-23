import React from 'react'
import { workData, assets } from '@/assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"

const Projects = () => {
    const [featured, ...rest] = workData;
    const getTags = (description) => description.split(',').map((tag) => tag.trim());

    return (
        <motion.section initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1, delay: 0.3}} id='projects' className='section'>
            <motion.h2 initial={{y: -20, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}} className='section-heading'>My <span className='text-red dark:text-darkTextPrimary' style={{ fontWeight: 500, fontFamily: 'font-Ovo' }}>Projects</span></motion.h2>
            <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.7}} className='section-subtitle'>Here's a look at my projects and the tech stack I used.</motion.p>

            <div className='mt-12 grid lg:grid-cols-[1.2fr_0.8fr] gap-6'>
                <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6}} className='relative overflow-hidden rounded-3xl card-base'>
                    <div className='absolute inset-0 bg-cover bg-center' style={{backgroundImage: `url(${featured.bgImage})`}} />
                    <div className='absolute inset-0 bg-gradient-to-br from-black/10 via-black/10 to-black/50 dark:from-black/20 dark:to-black/70' />
                    <div className='relative p-8 min-h-[320px] flex flex-col justify-end text-white'>
                        <p className='text-sm uppercase tracking-[0.2em] text-white/70'>Featured</p>
                        <h3 className='mt-3 text-3xl font-semibold'>{featured.title}</h3>
                        {/* <p className='mt-2 text-white/80'>{featured.description}</p> */}
                        <div className='mt-4 flex flex-wrap gap-2'>
                            {getTags(featured.description).map((tag) => (
                                <span className='chip text-white/90 border-white/20 bg-white/10' key={tag}>{tag}</span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <div className='grid gap-6'>
                    {rest.map((project, index) => (
                        <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.1 * index}} key={project.title} className='card-base card-hover overflow-hidden group'>
                            <div className='relative h-40 bg-cover bg-center' style={{backgroundImage: `url(${project.bgImage})`}} />
                            <div className='p-5'>
                                <div className='flex items-center justify-between gap-4'>
                                    <div>
                                        <h4 className='text-lg font-semibold text-gray-800 dark:text-white'>{project.title}</h4>
                                        {/* <p className='text-sm text-gray-600 dark:text-white/70'>{project.description}</p> */}
                                    </div>
                                    <span className='inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 group-hover:bg-red/10 dark:group-hover:bg-darkTextPrimary/20 transition'>
                                        <Image src={assets.send_icon} alt='send-icon' className='w-5' />
                                    </span>
                                </div>
                                <div className='mt-3 flex flex-wrap gap-2'>
                                    {getTags(project.description).map((tag) => (
                                        <span className='chip' key={`${project.title}-${tag}`}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className='mt-16 flex justify-center'>
                <motion.a initial={{opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.8, delay: 0.7}} href="https://github.com/praveengit11" target='_blank' className='btn-primary w-max'>
                    Github <Image src={assets.github_btn} alt='github icon' className='w-4' />
                </motion.a>
            </div>
        </motion.section>
    )
}

export default Projects
