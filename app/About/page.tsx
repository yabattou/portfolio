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
  <p>
    Mon parcours témoigne d&apos;une curiosité intellectuelle forte et d&apos;un cheminement riche : après un baccalauréat en mathématiques obtenu avec mention très bien, j&apos;ai exploré l&apos;économie et la statistique avant de m&apos;orienter vers ce qui est devenu une évidence pour moi : l&apos;informatique.
  </p>
  <br />
  <p>
    Aujourd&apos;hui étudiant en L2 Informatique à l&apos;Université d&apos;Angers, je me suis progressivement spécialisé en programmation, algorithmique, bases de données, systèmes d&apos;exploitation et développement web. Cet apprentissage m&apos;a conduit à m&apos;intéresser plus particulièrement à la cybersécurité et à la protection des systèmes d&apos;information.
  </p>
  <br />
  <p>
    J&apos;ai pu concrétiser ces compétences à travers plusieurs projets : un mini-SGBDR en Python et SQL, un système de gestion de bibliothèque en C++, ou encore un projet d&apos;analyse de stratégies de jeux à l&apos;aide de graphes (Python, NetworkX, Matplotlib).
  </p>
  <br />
  <p>
    Mon objectif est clair : intégrer une Licence 3 en informatique en alternance afin de renforcer mes acquis, évoluer dans un cadre académique stimulant, et me préparer efficacement à un Master en informatique. Mon ambition est de devenir ingénieur ou analyste en sécurité des systèmes d&apos;information.
  </p>
  <br />
  <p>
    Rigoureux, persévérant et passionné, je suis convaincu que l&apos;apprentissage est un processus continu. Mon esprit d&apos;initiative et ma capacité à m&apos;adapter sont des atouts que je souhaite mettre au service d&apos;une structure innovante et exigeante.
  </p>
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
