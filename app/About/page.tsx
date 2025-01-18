import React from 'react'
import MainTitle from '../components/MainTitle'
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
                <MainTitle title={'Apropos de moi'} />
                <div className='text-xl mt-20 border-t dark:border-gray-800 tracking-wider line shadow-xl p-10 rounded-lg dark:shadow-gray-800'>
                    <p>HADJEBAR Nassim , un étudiant en informatique </p>
                    <p><strong>Formation :</strong></p>
<p>Mon parcours académique reflète une progression ambitieuse vers le développement web :</p>
<br/>
<p>je souhaite integrer un <strong>Bachelor 3 en Développement Web</strong> à l&apos;EPSI France pour l&apos;année prochaine. J&apos;envisage de poursuivre cette formation en alternance l&apos;année prochaine afin de me spécialiser et d&apos;acquérir une expérience pratique enrichissante dans le domaine du développement web.</p>
<br/>
<p>actuellement, je suis inscrit en <strong>L2 en Informatique</strong> à l&apos;Université d&apos;Angers, où j&apos;approfondis mes connaissances techniques tout en consolidant mes compétences dans la programmation.</p>
<br/>
<p>Mes bases ont été construites à l&apos;<strong>École Nationale Supérieure d'Informatique</strong> (ESI SBA), où j'ai validé deux années de classes préparatoires. En <em>première année</em>, j&apos;ai obtenu une mention <strong>très bien</strong>, et en <em>deuxième année</em>, une mention <strong>bien</strong>, ce qui m&apos;a permis de développer rigueur et polyvalence.</p>
<p>Ce parcours me prépare à exceller dans le domaine du développement web, avec une approche pratique et des bases théoriques solides.</p>

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