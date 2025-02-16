import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const userData = {
      nome: formData.get('nome'),
      email: formData.get('email'),
      mensagem: formData.get('mensagem'),
    };

    console.log('Dados do usuário:', userData); // Verifica os dados antes do envio

    emailjs
      .sendForm('service_3esq0nn', 'template_7opil9p', formRef.current, {
        publicKey: 'iMCe3n5RXaNfBc4wr',
      })
      .then(
        () => {
          console.log('Email enviado com sucesso!');
        },
        (error) => {
          console.log('Falha no envio...', error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="container-contact">
      <form ref={formRef} onSubmit={sendEmail} className="container-infos-contact"> 
        <div className="contact-infos">Nome</div>
        <input className="input-infos" name="nome" type="text" placeholder="Nome" />

        <div className="contact-infos">Email</div>
        <input className="input-infos" name="email" type="email" placeholder="Digite seu email" />

        <div className="contact-infos">Mensagem</div>
        <textarea
          className="input-infos"
          name="mensagem"
          id="input-infos-mensagem"
          placeholder="Mensagem"
        ></textarea>

        <button className='button-enviar' type="submit">Enviar</button>
      </form>
    </div>  
  );
};

export default Contact;