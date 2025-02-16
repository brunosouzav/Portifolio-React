import React from 'react';
//Logo
import LogoReact from '../assets/react.svg';
import LogoHtml from '../assets/html.svg';
import LogoCss from '../assets/css.svg';
import LogoJs from '../assets/js.svg';
import LogoJava from '../assets/java.svg';
import LogoSpring from '../assets/spring-boot.svg';
import LogoAws from '../assets/aws.svg';
import LogoFigma from '../assets/figma.svg';
import LogoDocker from '../assets/docker.svg';

import './DataCards.css'
export const news = [
  {
    name: "React",
    icon: <img className='icons-cards' id='react' src={LogoReact} alt="Logo-React" />
  },
  
  {
    name: "HTML",
    icon: <img className='icons-cards' id='all' src={LogoHtml} alt="Logo-React" />
  },
  
  {
    name: "CSS",
    icon: <img className='icons-cards' id='all' src={LogoCss} alt="Logo-React" />
  },
  
  {
    name: "Java Script",
    icon: <img className='icons-cards' id='all' src={LogoJs} alt="Logo-React" />
  },
  
  {
    name: "Java",
    icon: <img className='icons-cards' id='all' src={LogoJava} alt="Logo-React" />
  },
  
  {
    name: "Spring-Boot",
    icon: <img className='icons-cards' id='all' src={LogoSpring} alt="Logo-React" />
  },
  
  {
    name: "Aws",
    icon: <img className='icons-cards' id='all' src={LogoAws} alt="Logo-React" />
  },
  
  {
    name: "Figma",
    icon: <img className='icons-cards' id='all' src={LogoFigma} alt="Logo-React" />
  },
  
  {
    name: "Docker",
    icon: <img className='icons-cards' id='all' src={LogoDocker} alt="Logo-React" />
  },
 
];