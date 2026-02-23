import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"

const Footer = ({ isDarkMode }) => {
  return (
    <footer className='mt-16'>
      <div className='section'>
        <div className='card-base p-8 md:p-12 rounded-3xl bg-gradient-to-br from-bgWhiteSecondary to-white dark:from-darkBgSecondary/90 dark:to-darkBgSecondary'>
          <div className='grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center'>
            <div>
              <p className='text-sm uppercase tracking-[0.3em] text-gray-500 dark:text-white/60'>Let's build something</p>
              <h3 className='mt-4 text-3xl md:text-4xl font-Ovo text-gray-900 dark:text-white'>Ready to collaborate on your next project?</h3>
              <p className='mt-3 text-gray-600 dark:text-white/70 max-w-xl'>I help teams turn ideas into production-ready products with strong UX and scalable systems.</p>
              <div className='mt-6 flex flex-wrap gap-4'>
                <a href="#contact" className='btn-primary'>Start a Project</a>
                <a href="/adari-praveen-kumar-resume.pdf" download className='btn-secondary card-base'>Download Resume</a>
              </div>
            </div>

            <div className='hidden lg:flex justify-center lg:justify-end'>
              <div className='p-2 mr-4 rounded-full'>
                <Image src={assets.profile_img} alt='profile' className='w-48 md:w-56 rounded-full object-cover' />
              </div>
            </div>

            {/* <div className='card-base p-6'>
              <div className='flex items-center gap-3'>
                <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='mail icon' className='w-6' />
                <div>
                  <p className='text-sm text-gray-500 dark:text-white/60'>Email me</p>
                  <p className='text-gray-900 dark:text-white font-semibold'>praveen8642kumar@gmail.com</p>
                </div>
              </div>
              <div className='mt-6 space-y-2 text-sm text-gray-600 dark:text-white/70'>
                <p>Open to full-time opportunities.</p>
                <p>Response time: within 24 hours.</p>
              </div>
            </div> */}

          </div>
        </div>

        <div className='mt-10 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-200 dark:border-white/10 pt-6'>
          <div className='flex items-center gap-3'>
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='Logo' className='w-28' />
            <span className='text-sm text-gray-500 dark:text-white/60 text-center w-full'>@2026 Praveen Kumar. All rights reserved.</span>
          </div>

          {/* <div className='flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-white/70'>
            <a href="#top" className='hover:text-red dark:hover:text-darkTextPrimary'>Home</a>
            <a href="#about" className='hover:text-red dark:hover:text-darkTextPrimary'>About</a>
            <a href="#projects" className='hover:text-red dark:hover:text-darkTextPrimary'>Projects</a>
            <a href="#contact" className='hover:text-red dark:hover:text-darkTextPrimary'>Contact</a>
          </div> */}

          <div className='flex items-center gap-4 text-sm text-gray-600 dark:text-white/70'>
            <a href="https://www.linkedin.com/in/praveen-kumar-adari-3a73331a6/" target="_blank" className='hover:text-red dark:hover:text-darkTextPrimary'>LinkedIn</a>
            <a href="https://www.facebook.com/share/1BB1M26QZC/?mibextid=wwXIfr" target="_blank" className='hover:text-red dark:hover:text-darkTextPrimary'>Facebook</a>
            <a href="https://www.instagram.com/_praveen__kumar._?igsh=ZmFrbnVhOXBnZXR4&utm_source=qr" target="_blank" className='hover:text-red dark:hover:text-darkTextPrimary'>Instagram</a>
            <a href="https://x.com/praveenk1101?s=21" target="_blank" className='hover:text-red dark:hover:text-darkTextPrimary'>X</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer