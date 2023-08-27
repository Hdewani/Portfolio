import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import profile from '../../public/images/profile/sketch2.png';
import TransitionEffect from '@/components/TransitionEffect';

const Contact = () => {
    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();

    const onSubmit = async (e) => {
        console.log("~ e", e);
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };

    return (
        <>
            <section id="contact" >
                <Head>
                    <title>Hdewani | Contact</title>
                    <meta name="description" content="Generated by create next app" />
                </Head>
                <TransitionEffect />
                <Layout className='pt-10 '>
                    <AnimatedText text="Let's Work Together" className='mb-2 text-6xl !text-primary dark:!text-green-600 lg:!text-6xl sm:mb-8 sm:!text-5xl xs:!text-4xl' />

                    <motion.div className='flex items-center justify-between rounded-3xl w-full md:flex-row lg:flex-row md:items-start lg:items-start md:justify-between lg:justify-between sm:flex-col sm:items-center sm:justify-between'>
                        <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} className='w-full md:w-1/2 mb-6 md:mb-0'>
                            <Image src={profile} alt="homeProfile" className='w-full h-auto' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" priority />
                        </motion.div>
                        <div className='w-full md:w-1/2 lg:w-1/3  flex flex-col items-center relative sm:w-full'>
                            <div className='w-full md:w-1/2 md:m-auto h-auto mt-20 flex items-center justify-center rounded-br-2xl sm:w-full'>
                                <div>
                                    <form target="_blank" onSubmit={onSubmit} action="https://formsubmit.co/9ad15ccf305937095020f590d827a404" method="POST" style={{ position: 'relative' }} className='max-w-[800px] md:max-w-[600px] mx-asuto items-center justify-center sm:w-full py-8'>
                                        <motion.div className='mb-4 w-full md:px-6 md:w-[80%] lg:w-[70%] sm:w-full' whileHover={{ scale: 1.01 }} whileTap={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                            <label htmlFor='name' className='block text-lg text-dark font-semibold mb-2'><AnimatedText text="Name" className='!text-lg !text-left md:!text-base sm:!text-sm' ></AnimatedText></label>
                                            <input id='name' className='shadow-lg p-3 w-full md:w-[80%] lg:w-[70%] sm:w-full rounded-3xl border-b-4 border-dark dark:shadow-amber-900 shadow-dark md:!text-base sm:!text-sm' type='text' placeholder='Name' {...register('name', { required: true, maxLength: 100, })} />
                                            {errors.name && (
                                                <p className='text-red-600 mt-4 text-sm font-extrabold md:text-xs md:px-6 '>
                                                    {errors.name.type === 'required' && 'This field is required.'}
                                                    {errors.name.type === 'maxLength' && 'Max length is 100 characters.'}
                                                </p>
                                            )}
                                        </motion.div>

                                        <motion.div className='mb-4 w-full md:px-6 md:w-[80%] lg:w-[70%] sm:w-full' whileHover={{ scale: 1.01 }} whileTap={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                            <label htmlFor='email' className='block text-lg text-dark  dark:text-light font-semibold mb-2 '><AnimatedText text="Email" className='!text-lg !text-left md:!text-base sm:!text-sm'></AnimatedText></label>
                                            <input id='email' className=' shadow-lg p-3 w-full md:w-[80%] lg:w-[70%] sm:w-full rounded-3xl  border-b-4 border-dark dark:shadow-amber-900  shadow-dark md:!text-base sm:!text-sm' type='email' placeholder='Email Address' {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, })} />
                                            {errors.email && (
                                                <p className='text-red-600 mt-4 text-sm font-extrabold md:text-xs md:px-6 '>
                                                    {errors.email.type === 'required' && 'This field is required.'}
                                                    {errors.email.type === 'pattern' && 'Invalid email address.'}
                                                </p>
                                            )}
                                        </motion.div>



                                        <motion.div className='mb-4 w-full md:px-6 md:w-[80%] lg:w-[70%] sm:w-full' whileHover={{ scale: 1.01 }} whileTap={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                            <label htmlFor='message' className='block text-lg text-dark font-semibold mb-2'><AnimatedText text="Message" className='!text-lg !text-left md:!text-base sm:!text-sm'></AnimatedText></label>
                                            <textarea name="message" placeholder="MESSAGE" className=' shadow-lg p-3 w-full  rounded-3xl  border-b-4 border-dark  dark:shadow-amber-900 shadow-dark md  .!text-base sm:!text-sm' cols='3' rows='3' {...register('message', { required: true, maxLength: 2000, })} />
                                            {errors.message && (
                                                <p className='text-red-600 mt-4 text-sm font-extrabold md:text-xs md:px-6'>
                                                    {errors.message.type === 'required' && 'This field is required.'}
                                                    {errors.message.type === 'maxLength' && 'Max length is 2000 characters.'}
                                                </p>
                                            )}
                                        </motion.div>

                                        <button className='flex justify-center w-full sm:w-1/2 items-center bg-dark text-light p-2.5 px-4 rounded-lg text-sm font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark mt-8 dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:border-light dark:hover:text-light dark:shadow-amber-900 shadow-dark md:text-base sm:text-sm' type="submit">
                                            <motion.div className='box md:!text-base sm:!text-sm' whileHover={{ scale: 1.01 }} whileTap={{ scale: 1.5 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
                                                SEND ME A MESSAGE
                                            </motion.div>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </Layout>
            </section>
        </>
    );
};

export default Contact;
