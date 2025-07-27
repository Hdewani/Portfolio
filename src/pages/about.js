import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import profilePic from "../../public/images/profile/hitika-img1.jpeg"
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
                    <div className='grid w-full grid-cols-8 gap-16 sm:grid-cols-1 py-10'>

                        <div className='col-span-5  xl:col-span-4 md:order-2 lg:order-2'>

                            <h2 className='text-3xl font-bold uppercase pb-6 pl-10 text-dark/75 dark:text-light/75'>Introducing Me</h2>
                            <p className='mb-3 font-medium text-[16px] pl-10 lg:pl-0'>
                                Hey there! I&apos;m Hitika Dewani, your go-to frontend developer with a passion for bringing design magic to life! Picture user interfaces that not only look stunning but also groove with functionality.
                            </p>


                            <p className='mb-3 font-medium text-[16px] pl-10 lg:pl-0'>
                                With over 1.5 years of experience as a frontend developer at a product-based company, I&rsquo;ve honed my skills using Vue 3, Tailwind, and Node.js to craft dynamic features like real-time searches, live updates, endless scrolling, and tailor-made dashboards. My secret? Crafting sleek, modular components that keep things smooth and snappy.
                            </p>

                            <p className='mb-3 font-medium text-[16px] pl-10 lg:pl-0'>
                                I thrive on turning tricky puzzles into elegant, reusable solutions. Whether I&rsquo;m crafting intricate discount systems or adding a touch of interactive sparkle, I&rsquo;m all about harmonizing the &quot;how&quot; with the &quot;wow.&quot;
                            </p>

                            <p className='mb-3 font-medium text-[16px] pl-10 lg:pl-0'>
                                I&rsquo;m always eager to explore new technologies and embrace the thrill of continuous learning to keep my skills sharp and innovative.
                            </p>
                            <p className='mb-3 font-medium text-[16px] pl-10 lg:pl-0'>
                                Beyond my coding wizardry, I cherish clear communication, smart product insights, and a sharp eye for detail. Let&rsquo;s create digital experiences that not only work like a charm but also dazzle with intuition and meaning.
                            </p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-3 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 lg:order-1'>
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
