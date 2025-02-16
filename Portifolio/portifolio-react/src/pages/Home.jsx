import React, { Component } from 'react'

//Typewriter
import Typewriter from 'typewriter-effect';

import { Canvas } from '@react-three/fiber';
import Earth from '../components/Earth';
import StarField from "../components/StarField";
import About from '../pages/About';
import Skills from '../pages/Skills';
import Email from '../pages/Email';
import './Home.css';



export class Home extends Component {
  render() {
    return (
      <div className='container-home'>

        {/* Fundo estrelado fixo na tela toda */}
        <Canvas
          camera={{ position: [0, 0, 10] }}
          style={{
            background: "black",
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            zIndex: -1,
          }}
        >
          <StarField />
        </Canvas>
      <div className="container-pages">
        <div className="home-conteudo">
          <h1 className='h1-home-pricipal'>
            Hi, <br />I´m <span>Bruno</span>
            <br />
            <Typewriter
              options={{
                strings: ['Full Stack Developer', 'IX Designer'],
                autoStart: true,
                loop: true,
                deleteSpeed: 25,
              }}
            />
          </h1>
          <p className='home-texto'>
            Bem-vindo ao meu MUNDO da web! Sou um desenvolvedor web dedicado com experiência em HTML, CSS, JavaScript, React e muito mais. Trago criatividade e habilidade técnica para cada projeto, garantindo uma experiência de usuário perfeita e envolvente.
          </p>
            <div className='canvas'>
            <Canvas
              camera={{ position: [0, 0, 5] }}
              style={{
                width: "380px",   // Define um tamanho fixo para o canvas
                height: "300px",
                position: "absolute",
                top: "430px", // Ajuste a posição verticalmente
                left: "50%", // Centraliza horizontalmente
                transform: "translateX(-50%)", // Mantém centralizado 
              }}
            >
              <Earth />
            </Canvas>
          </div>    
        </div>    
          <About />
          <Skills />
          <Email />  
         
        </div>
        <footer className='rodape'></footer>
      </div>
    );
  }
}

export default Home;