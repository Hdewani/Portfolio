"use client"

import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import profilePic from "../../public/images/profile/hitika3.png"
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'


const about = () => {
    return (
        <>
            <Head>
                <title>Hdewani | About Page</title>
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>

                <Layout className='pt-16'>
                    <AnimatedText text="Explore My Professional World" className='mb-6 text-5xl  lg:!text-4xl sm:mb-8 sm:!text-4xl xs:!text-4xl' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:grid-cols-1'>

                        <div className='col-span-5  xl:col-span-4 md:order-2 lg:order-2'>

                            <h2 className='text-3xl font-bold uppercase pb-6 pl-10 text-dark/75 dark:text-light/75'>Introducing Me</h2>
                            <p className='mb-3 font-medium text-[16px] pl-10 lg:pl-0'>

                                Greetings, I'm Hitika Dewani—an enthusiastic full-stack developer deeply passionate about the realm of Software Development and Design. Currently, my focus lies in harnessing the power of the MERN Stack, Rest APIs, and Redux-Toolkit.
                            </p>

                            <p className='mb-3 font-medium text-[16px] pl-10 lg:pl-0'>

                                My true joy lies in crafting sophisticated and user-centric interfaces that create an immersive experience for users. I'm dedicated to the creation of websites that seamlessly deliver captivating user journeys. I maintain a relentless pursuit of knowledge, constantly staying attuned to industry trends and emerging technologies.
                            </p>

                            <p className='mb-3 font-medium text-[16px] pl-10 lg:pl-0'>

                                I enjoy reading blogs, listening to podcasts, watching videos, and attending events to learn from fellow professionals. This constant learning and growth help me stay inspired and motivated, allowing me to bring fresh perspectives and ideas to my work developer.
                            </p>

                            <p className='mb-3 font-medium text-[16px] pl-10 lg:pl-0'>

                                I eagerly await the forthcoming chances to both enrich my knowledge and make meaningful contributions for an endless array of possibilities that lie ahead serves as an unwavering wellspring of motivation for me.
                            </p>

                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 lg:order-1'>
                            <div className='absolute top-0 -right-2 sm:-right-3 -z-10 w-[102%] h-[103%] rounded-[1rem] bg-dark dark:bg-light' />
                            <Image src={profilePic} alt="Hdewani" className='w-full h-auto lg:w-auto lg:h-auto xl:w-full xl:h-auto rounded-2xl mx-auto' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, (max-width: 1600px) 33vw, 25vw" priority />
                        </div>
                    </div>
                    <Skills />
                    <Education />
                </Layout>

            </main>




        </>
    )
}

export default about
