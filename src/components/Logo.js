import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const MotionLink = motion(Link)



const Logo = () => {
    return (
        <div
            className='flex items-center justify-center mt-2'
        >
            <MotionLink href="/"
                className='w-16 h-16 text-dark  flex items-center justify-center  -tracking-[.32em]
                text-6xl font-extrabold dark:text-light'
                animate={{
                    color: ["#0C0D0D", "#DF3C5F", "#1803A5", "#1D71BA", "#EDC400", "#B25690", "#71B379", "#0C0D0D"],
                    transition: { repeat: Infinity, duration: 4 }

                }}
                whileHover={{ scale: 1.1, color: '#008922' }}
            >
                HD
            </MotionLink>

        </div>
    )
}

export default Logo
