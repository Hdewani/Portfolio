import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GossipCover from "public/images/projects/Gossip-Project-Cover.png"
import NewsCover from "public/images/projects/News Project Cover.png"
import PortCover from "public/images/projects/Portfolio Project Cover.png"
import RentCover from "public/images/projects/Rent Project Cover.png"
import TextCover from "public/images/projects/Text Project Cover.png"
import Layout from '@/components/Layout'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'


const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light
        shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light   lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4' >
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light
             xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
          
            ' />
            <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full' >
                <motion.div whileHover={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                    <Image src={img} alt={title} className='w-full h-auto ' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" priority />

                </motion.div>
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'  >
                <span className='text-primary font-medium text-xl dark:text-green-600  xs:text-base lg:text-lg md:text-base'  >{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2' >
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm lg:text-2xl' >{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm ' >{summary}</p>
                <div className='mt-2 flex items-center' >
                    <Link
                        href={github} target='_blank' className='w-10' >  <GithubIcon />
                    </Link>

                    <Link href={link} target='_blank'
                        className='ml-4 rounded-lg bg-dark text-light p-2 px-5 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'
                    > Visit Project</Link>
                </div>

            </div>
        </article >
    )
}

const Project = ({ title, type, img, link = '', github, summary }) => {
    return (
        <article className='w-full flex  flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light
        shadow-2xl p-6 relative dark:bg-dark dark:text-light xs:p-4 '  >
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark  dark:bg-light
            rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
            ' />


            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg' >
                <motion.div whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                    <Image src={img} alt={title} className='w-full h-auto' />

                </motion.div>
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4  ' >
                <span className='text-primary font-medium text-xl dark:text-green-600 lg:text-lg md:text-base' >{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2' >
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl' >{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark  dark:text-light' >{summary}</p>

                <div className='mt-2 flex items-center w-full justify-between' >


                    <Link
                        href={github} target='_blank' className='w-8 md:w-6' >  <GithubIcon />
                    </Link>

                </div>

            </div>
        </article >
    )
}

const projects = () => {
    return (
        <>
            <Head >
                <title>Hdewani | Projects</title>
            </Head>
            <TransitionEffect />
            <main className=' w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className="pt-16" >
                    <AnimatedText text="Explore Collection of Creative projects"
                        className='mb-6 text-5xl  lg:!text-4xl sm:mb-8 sm:!text-4xl xs:!text-4xl'
                    />

                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>

                        <div className='col-span-12 ' >
                            <FeaturedProject
                                title="Gossip -Social Media website"
                                summary="Gossip serves as a dynamic social media platform where users create and engage with concise messages, incorporating text, images, links, and videos. By following others, users access a chronological feed of posts, while amassing their own followers. The platform enables actions like liking, commenting, and resharing."
                                link='/'
                                github='/'
                                img={GossipCover}
                                type="Featured Project"

                            />
                        </div>

                        <div className='col-span-12' >
                            <FeaturedProject
                                title=" Personal Portfolio"
                                summary="My portfolio website is a testament to professionalism, built with NextJS, Framer Motion, and Tailwind. It boasts seamless page transitions, captivating background effects, and a distinctively unique design. Moreover, it's crafted to be fully responsive across mobile devices. Through this project, I strive not only to demonstrate my proficiency in creativity and technical skills, but also to offer a glimpse into my distinct developer's perspective."
                                link='/'
                                github='/'
                                img={PortCover}
                                type="Featured Project"

                            />
                        </div>



                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Text Analyzer"
                                summary="The Text Analyzer is a robust tool that offers a multitude of functions for seamless text manipulation. This toolkit enables effortless transformation of text into uppercase or lowercase, along with efficient word or phrase replacement and utilization of the text-to-speech feature. Designed to elevate your text experience, the Text Analyzer harnesses HTML5, Bootstrap, and ReactJS technologies to make various tasks user-friendly and efficient."
                                link='/'
                                github='/'
                                img={TextCover}
                                type="Featured Project"

                            />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title='SAMACHAR-" Stay Updated with the Latest News"'
                                summary="The React News App is application developed using the News API, Router, and Infinite Scroll technologies.Leveraging the robust capabilities of the News API, the app seamlessly fetches the most up-to-date news updates from reputable sources, ensuring users stay well-informed."
                                github='/'
                                img={NewsCover}
                                type="Featured Project"

                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Homely_HOME: Enhancing Accommodation Experiences"
                                summary="Introducing 'Homely-Home' - Your Comprehensive Online Accommodation Solution. Effortlessly discover, rent, and connect with potential roommates. The front-end employs HTML5, CSS3, and JavaScript, while the backend utilizes PHP and MySQL for seamless functionality."
                                github='/'
                                img={RentCover}
                                type="Featured Project"

                            />
                        </div>


                    </div>

                </Layout>
            </main>

        </>
    )
}

export default projects
