import Layout from '@/components/Layout'
import Head from 'next/head'
import profilePic from "../../public/images/profile/profilepic3.png"
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow, Star } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import StarIcon from '../../public/images/profile/star3.svg'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>

        <title>Hdewani|Home</title>
        <meta name="description" content="Generated by create next app" />

      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col' >
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt="homeProfile" className='w-full h-auto lg:hidden md:inline-block md:w-full' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" priority />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center' >
              <AnimatedText text="Hitika Dewani" className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />

              <AnimatedText text="~Crafting Seamless Experiences from Frontend to Backend" className='!text-xl !text-left p-2 xl:!text-xl lg:!text-center lg:!text-xl md:!text-xl sm:!text-base' />

              <p className='my-4 text-base font font-medium' > I am an enthusiastic web developer specializing in the MERN Stack and REST API technologies. My focus is on crafting captivating and user-friendly web experiences that engage and delight users. I love turning designs into functional and interactive websites, ensuring optimal performance across different devices and browsers. Lets collaborate to turn ideas into reality with elegant code and user-centric design.</p>

              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/resume.pdf" target={"_blank"}
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark 
                  dark:bg-light dark:text-dark 

                  hover:dark:text-light hover:dark:bg-dark hover:dark:border-light md:p-2 md:px-4 md:text-base
                  ' download={true}
                >  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link href="mailto:htitkadewani06@gmail.com" target={"_blank"} className='ml-4 text-lg  capitalize text-dark underline font-semibold dark:text-light md:text-base' > Contact </Link>

              </div>


            </div>
          </div>
        </Layout>
        <HireMe />
        <motion.div
          className='absolute right-8 bottom-8 md:-bottom-56 inline-block w-28 sm:hidden'
          animate={{ scale: [1, 1.1, 1], transition: { repeat: Infinity, duration: 0.8 } }}
        >
          <Image src={StarIcon} alt="star" className='w-full h-auto ' />
        </motion.div>
      </main>
    </>
  )
}
