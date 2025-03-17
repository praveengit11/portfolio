import React, { useState } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"

const Contact = ({isDarkMode}) => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "7fb03b7c-a475-480e-bd23-172817303338");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.5}} id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>

            <motion.h2 initial={{y: -20, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}} className='text-center text-5xl font-Ovo py-10 text-gray-800 font-500 dark:text-white'>Contact <span className='text-red dark:text-darkTextPrimary' style={{ fontWeight: 500, fontFamily: 'font-Ovo' }}>Me</span></motion.h2>

            <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.7}} className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>If you have any queries, you can reach out to me.</motion.p>

            <motion.form initial={{y: -20,opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.8, delay: 0.9}} className='max-w-2xl mx-auto' onSubmit={onSubmit}>
                <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                    <motion.input initial={{x: -50, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1.1, delay: 0.7}} type="text" placeholder='Enter your name' required className='flex-1 p-3 outline-none rounded-md shadow-sm bg-white dark:bg-darkBgSecondary/80 dark:border-darkBgSecondary/50' name='name' />

                    <motion.input initial={{x: -50, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1.2, delay: 0.7}} type="text" placeholder='Enter your email' required className='flex-1 p-3 outline-none rounded-md shadow-sm bg-white dark:bg-darkBgSecondary/80 dark:border-darkBgSecondary/50' name='email' />
                </div>
                <motion.textarea initial={{x: -50, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1.3, delay: 0.7}} rows='6' placeholder="Enter your message" required className='w-full p-4 outline-none rounded-md shadow-sm bg-white mb-6 dark:bg-darkBgSecondary/80 dark:border-darkBgSecondary/50' name='message' ></motion.textarea>
                
                <motion.button transition={{duration: 0.3}} type='submit' className='my-10 py-3 px-8 w-max flex items-center justify-between gap-2 bg-red text-white rounded-full mx-auto duration-500 dark:bg-darkTextPrimary'>Submit <Image src={ isDarkMode ? assets.right_arrow_white : assets.right_arrow_white} alt='right-arrow-icon' className='w-4' /> </motion.button>

                <p>{result}</p>

            </motion.form>

        </motion.div>
    )
}

export default Contact