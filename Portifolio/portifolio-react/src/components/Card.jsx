import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';  // Importar o hook useNavigate
import './Card.css';
import Foto from '../assets/foto.svg';

const Card = () => {
  const navigate = useNavigate();  // Usar o hook aqui

  const handleClick = () => {
    navigate('/email');
  };

  return (
    <div className='container-card'>
      <div className="card-conteudo">
        <div className="my-foto">
          <img className='foto' src={Foto} alt="Foto" />
        </div>
        <h1 className='title-card'>Bruno Souza</h1>
        <p className='p-card'>FullStack Developer & IX Designer</p>
      </div>
      <div className="cards-icon-contact"></div>
      <div className='social-midia'>
        <a href="https://www.instagram.com/bruno_souzav/" target="_blank" rel="noopener noreferrer">
         <FaInstagram className="icon" />
        </a>
        
        <a href="https://www.linkedin.com/in/brunosouzav/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="icon" />
        </a>
        
        <a 
        href="https://github.com/brunosouzav" target="_blank" rel="noopener noreferrer">
        <FaGithub className="icon" />
        </a>
      
      </div>

      <p className='contact' onClick={handleClick}>CONTACT</p>
    </div>
  );
};

export default Card;
