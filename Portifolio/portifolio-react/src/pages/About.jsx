import React, { Component } from 'react'
import Card from '../components/Card'

import './About.css'
export class About extends Component {
  render() {
    return (
      <div className='container-about'>
          <Card/>
          <p className='title-about'>Sou um Desenvolvedor Full Stack e Designer UI/UX, apaixonado por criar aplicações escaláveis e experiências interativas. No back-end, utilizo Java para desenvolver soluções robustas e eficientes. No front-end, trabalho com React Native, criando interfaces dinâmicas e responsivas. Além disso, tenho experiência com Figma, onde projeto layouts modernos e intuitivos, garantindo a melhor experiência do usuário. Meu foco está na construção de aplicações bem estruturadas, com código limpo e design estratégico para proporcionar usabilidade e performance. </p>
      </div>
    )
  }
}

export default About
