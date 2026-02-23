import React, { useState } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"

const Contact = () => {

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
        <motion.section initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.5}} id='contact' className='section'>
            <motion.h2 initial={{y: -20, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration: 0.5, delay: 0.5}} className='section-heading'>Contact <span className='text-red dark:text-darkTextPrimary' style={{ fontWeight: 500, fontFamily: 'font-Ovo' }}>Me</span></motion.h2>
            <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.7}} className='section-subtitle'>If you have any queries, you can reach out to me.</motion.p>

            <motion.form initial={{y: 10,opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.8, delay: 0.8}} className='max-w-3xl mx-auto mt-10 card-base p-8 md:p-10' onSubmit={onSubmit}>
                <div className='grid md:grid-cols-2 gap-6'>
                    <motion.input initial={{x: -20, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.8, delay: 0.6}} type="text" placeholder='Enter your name' required className='w-full p-3 outline-none rounded-xl border border-white/60 dark:border-white/10 bg-white/80 dark:bg-darkBgSecondary/70 focus:border-red/60 dark:focus:border-darkTextPrimary/60' name='name' />

                    <motion.input initial={{x: 20, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.9, delay: 0.6}} type="email" placeholder='Enter your email' required className='w-full p-3 outline-none rounded-xl border border-white/60 dark:border-white/10 bg-white/80 dark:bg-darkBgSecondary/70 focus:border-red/60 dark:focus:border-darkTextPrimary/60' name='email' />
                </div>
                <motion.textarea initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.9, delay: 0.7}} rows='6' placeholder="Enter your message" required className='w-full p-4 outline-none rounded-xl border border-white/60 dark:border-white/10 bg-white/80 dark:bg-darkBgSecondary/70 mt-6 focus:border-red/60 dark:focus:border-darkTextPrimary/60' name='message' ></motion.textarea>
                
                <div className='mt-8 flex flex-col sm:flex-row items-center justify-center gap-4'>
                    <motion.button initial={{opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.9, delay: 0.9}} type='submit' className='btn-primary w-full sm:w-auto justify-center'>Submit <Image src={ assets.right_arrow_white } alt='right-arrow-icon' className='w-4' /></motion.button>
                    <p className='text-sm text-gray-600 dark:text-white/70'>{result}</p>
                </div>
            </motion.form>
        </motion.section>
    )
}

export default Contact