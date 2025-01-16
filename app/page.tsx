import Image from 'next/image'
import Me from '../public/moi.jpg'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
export default function Home() {
  return (
    <div className='container px-10 md:px-20 m-auto mt-14 md:mt-32 grid md:flex md:flex-row md:gap-16'>
      <div className='pb-10 shadow-md dark:shadow-gray-800 md:w-150 px-5'>
        <Image
          src={Me}
          priority={true}
          alt='Picture Of me'
          className='w-60 m-auto md:w-80 rounded-full'
          placeholder='blur'
        />
        <div className='grid gap-5 mt-5'>
          <h1 className='text-center font-bold text-3xl'>HADJEBAR Nassim</h1>
          <h2 className='text-center text-lg '>devloppeur web | étudiant en informatique</h2>
          <div className='flex justify-center gap-5 text-2xl'>
            <a href='https://github.com/nassimhadj'><BsGithub></BsGithub></a>
            <a href='https://www.linkedin.com/in/nassim-hadjebar-836466290/'><BsLinkedin></BsLinkedin></a>
            
          </div>
        </div>
      </div>
      <div className='text-xl text-center md:text-left box-border mt-10'>
        <p>
          Bonjour! je suis Nassim , un étudiant en informatique et un devloppeur web a l'age de 19 ans 
          courament etudiant en L2 informatique à l'université d'Angers en France
        </p>
        
      </div>
    </div>
  )
}
