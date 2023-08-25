import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon'


const Details = ({ CourseName, Time, address, InsituteName }) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col p-6 md:w-[80%] '>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.9, type: 'spring' }}
                className='font-bold text-2xl sm:text-xl xs:text-lg'>
                <h3 className='text-primary capitalize dark:text-green-600 '>{CourseName}</h3>
                <span className='capitalize font-medium text-dark/75  dark:text-light/75 xs:text-sm '>
                    {Time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {InsituteName}
                </p>
            </motion.div>
        </li>
    )
}

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })
    return (
        <div className='my-64' >
            <h2 className='font-bold text-8xl mb-32 w-full text-center  md:text-6xl xs:text-4xl md:mb-16 '>
                Education
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-8 top-0 w-[5px] h-full bg-dark origin-top  dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />
                <ul >
                    <Details
                        CourseName="Bachelor's degree in Computer Science and Engineering"
                        InsituteName="Bhilai Institute of Technology, Raipur (BIT Raipur)"
                        Time="2020-2024" address="Raipur,Chhattisgarh"
                    />

                    <Details
                        CourseName="Senior Secondary XII"
                        InsituteName="Sachdeva International School"
                        Time="2020" address="Raipur,Chhattisgarh"
                    />

                    <Details
                        CourseName="Higher Secondary X"
                        InsituteName="Sachdeva International School"
                        Time="2018" address="Raipur,Chhattisgarh"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Education
