"use client"

import MainTitle from '../components/MainTitle'
import ProjectCard from '../components/ProjectCard'
import Image from 'next/image'
import sgbr from '../../public/sgbdr.png'
import bibli from '../../public/bibli.png'
import graphes from '../../public/graphes.png'
import web from '../../public/web.png'

export default function Projects() {
  return (
    <div>
      <MainTitle title={'Mes projets'} />
      <div className='container p-10 m-auto flex gap-20 flex-wrap justify-center lg:justify-start'>
        <ProjectCard
          title={'Mini SGBDR'}
          image={sgbr}
          desc={'Système simplifié de gestion de base de données relationnelle'}
          link={''}
          stack={['Python', 'SQL']}
        />

        <ProjectCard
          title={'Système de bibliothèque'}
          image={bibli}
          desc={'Application C++ pour la gestion de prêts et retours de livres'}
          link={''}
          stack={['C++']}
        />

        <ProjectCard
          title={'Stratégies de jeux par graphes'}
          image={graphes}
          desc={'Utilisation de graphes pour analyser des stratégies de jeux'}
          link={''}
          stack={['Python', 'NetworkX', 'Matplotlib']}
        />

        <ProjectCard
          title={'Développement Web'}
          image={web}
          desc={'Pages statiques codées en HTML/CSS/JS pour pratique personnelle'}
          link={''}
          stack={['HTML', 'CSS', 'JS', 'PHP']}
        />
      </div>
    </div>
  )
}
