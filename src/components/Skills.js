import React from 'react'
import { motion } from "framer-motion"
import { WebIcon } from './Icons'

const Skill = ({ name, x, y }) => {
    return (
        <motion.div className='flex  items-center justify-center rounded-full font-semibold bg-dark text-light  shadow-dark cursor-pointer absolute py-2 px-5    dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light  xs-font-bold'
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{
                x: x, y: y, transition: {
                    duration: 1.5
                }
            }}
            viewport={{ once: true }}
        // transition={{ duration: 1.5 }}
        >
            {name}
        </motion.div >

    )

}

const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-6xl mt-64 w-full text-center md:text-6xl md:mt-32 ">  Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg 
            md:bg-circularLightMd md:dark:bg-circularDarkMd
            sm:bg-circularLightSm sm:dark:bg-circularDarkSm
            ' >
                <motion.div className='flex  items-center justify-center rounded-full font-semibold p-8  bg-dark text-light  shadow-dark cursor-pointer   dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2  '
                    whileHover={{ scale: 1.05 }}
                >
                    Web
                </motion.div>
                <Skill name="GraphQL" x="-28vw" y="1vw" />
                <Skill name="CSS" x="-17vw" y="-4vw" />
                <Skill name="JavaScript" x="8vw" y="18vw" />
                <Skill name="ReactJS" x="-12vw" y="8vw" />
                <Skill name="NextJS" x="-16vw" y="-17vw" />
                <Skill name="Bootstrap" x="9vw" y="9vw" />
                <Skill name="Git & GitHub" x="23vw" y="13vw" />
                <Skill name="PHP" x="0vw" y="-19vw" />
                <Skill name="C++" x="-23vw" y="10vw" />
                <Skill name="Redux Toolkit" x="27vw" y="5vw" />
                <Skill name="Express JS" x="-25vw" y="-9vw" />
                <Skill name="Material UI" x="25vw" y="-8vw" />
                <Skill name="Rest Api" x="15vw" y="-17vw" />
                <Skill name="MongoDB" x="-1vw" y="-12vw" />
                <Skill name="Node js" x="17vw" y="-3vw" />
                <Skill name="Docker" x="-12vw" y="17vw" />
            </div>
        </>
    )
}

export default Skills
