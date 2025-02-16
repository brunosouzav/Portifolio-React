import React, { Component } from 'react'
import Contact from '../components/Contact'
import './Email.css'
export class Email extends Component {
  render() {
    return (
      <div className='container-email-pricipal'>
        <h1 className='title-enviar-email'>Vamos criar algo <span>INCRIVEL</span></h1>
        <Contact/>
      </div>
    )
  }
}

export default Email
