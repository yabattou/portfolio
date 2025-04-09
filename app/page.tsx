import Image from 'next/image'
import Me from '../public/moi.jpg'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

export default function Home() {
  return (
    <div className='container px-10 md:px-20 m-auto mt-14 md:mt-32 grid md:flex md:flex-row md:gap-16'>
      <div className='pb-10 shadow-md dark:shadow-gray-800 md:w-150 px-5'>
        {/* Photo à remplacer par une vraie si disponible */}
        <Image
          src={Me}
          width={300}
          height={300}
          alt='Photo de Yazid Battou'
          className='w-60 m-auto md:w-80 rounded-full'
        />
        <div className='grid gap-5 mt-5'>
          <h1 className='text-center font-bold text-3xl'>Yazid Battou</h1>
          <h2 className='text-center text-lg '>Étudiant en informatique | Passionné par l&apos;informatique</h2>
          <div className='flex justify-center gap-5 text-2xl'>
            {/* Réseaux si existants */}
          </div>
        </div>
      </div>
      <div className='text-xl text-center md:text-left box-border mt-10'>
        <p>
          Bonjour ! Je suis Yazid, étudiant en 2ème année de Licence Informatique à l&apos;Université d&apos;Angers, je suis a la recherche d&apos;une alternance pour mon bac +3 passionné par la programmation, la cybersécurité et les réseaux. Motivé et rigoureux, je cherche à approfondir mes compétences techniques et académiques dans un environnement dynamique.
        </p>
      </div>
    </div>
  )
}
