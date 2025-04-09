import MainTitle from '../components/MainTitle'
import React from 'react'

import { BiLogoPostgresql, BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript, BiLogoJava, BiLogoPhp, BiLogoFigma } from 'react-icons/bi'
import { SiSocketdotio, SiExpress, SiNextdotjs, SiPrisma, SiGraphql, SiApollographql} from 'react-icons/si'

import { DiNodejs } from 'react-icons/di'
import { BsGit } from 'react-icons/bs'
import { FaDocker, FaPython, FaLaravel } from 'react-icons/fa'



interface Technology {
    name: string
    logo: React.ReactElement
}

const Technologies: Technology[] = [
    { name: 'HTML', logo: <BiLogoHtml5 /> },
    { name: 'CSS', logo: <BiLogoCss3 /> },
    { name: 'Javascript', logo: <BiLogoJavascript /> },
    { name: 'React js', logo: <BiLogoReact /> },
    { name: 'Git', logo: <BsGit /> },
    { name: 'Node js', logo: <DiNodejs /> },
    { name: 'Tailwind Css', logo: <BiLogoTailwindCss /> },
    {name: 'JAVA', logo:<BiLogoJava/>} ,
    {name : 'PHP' , logo: <BiLogoPhp/>} ,
    { name: 'Express Js', logo: <SiExpress /> },
    {name:'UI/UX' , logo:<BiLogoFigma/>},
    { name: 'Typescript', logo: <BiLogoTypescript /> },
    { name: 'Python', logo: <FaPython /> },
    { name: 'Appolo', logo: <SiApollographql />    },

];
const About = () => {
  return (
    <div className='container m-auto flex flex-col lg:flex-row items-center lg:items-start lg:gap-40 px-10'>
      <div className='md:w-1/2'>
        <MainTitle title={'À propos de moi'} />
        <div className='text-xl mt-20 border-t dark:border-gray-800 tracking-wider line shadow-xl p-10 rounded-lg dark:shadow-gray-800'>
          <p>Je suis Yazid Battou, étudiant en 2e année de licence informatique à l&apos;Université d&apos;Angers.</p>
          <br />
          <p>Je suis actuellement à la recherche d&apos;une alternance pour un Bac+3 dans le domaine du développement informatique.</p>
          <br />
          <p>Mes passions incluent la cybersécurité, les réseaux, et la programmation. J&apos;ai eu l&apos;occasion de travailler sur des projets académiques concrets en Python, C++, SQL, et développement Web.</p>
          <br />
          <p>J&apos;ai obtenu une mention très bien au baccalauréat mathématique et suivi une année en économie avant de me tourner vers l&apos;informatique.</p>
        </div>
      </div>
      <div className='md:w-1/2'>
                <MainTitle title={'mes comptences'} />
                <div className='flex mt-20 flex-wrap justify-between gap-x-5 gap-y-3 md:gap-x-10 md:gap-y-5'>
                    {Technologies.map((e, i) => {
                        return <div key={i} className='border hover:bg-black dark:shadow-gray-800 shadow-2xl hover:text-white dark:hover:bg-white dark:hover:text-black p-3 flex rounded-lg duration-500 items-center gap-4'>
                            <div className='lg:text-xl lg:font-medium'>{e.name}</div>
                            <div className='text-2xl lg:text-6xl'>{e.logo}</div>
                        </div>
                    })}
                </div>
            </div>
    </div>
  )
}

export default About
