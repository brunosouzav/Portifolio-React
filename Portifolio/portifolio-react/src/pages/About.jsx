import React, { Component } from 'react'
import Card from '../components/Card'

import './About.css'
export class About extends Component {
  render() {
    return (
      <div className='container-about'>
          <Card/>
          <p className='title-about'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam tenetur repellendus totam, perspiciatis reprehenderit, facere neque soluta doloribus excepturi rerum reiciendis voluptatem asperiores nostrum voluptas mollitia accusantium. Dignissimos, dolorum unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis asperiores placeat numquam, dignissimos eligendi, illum obcaecati reprehenderit fugit exercitationem, perspiciatis autem iste natus minima cumque veniam facilis molestiae iusto ducimus.</p>
      </div>
    )
  }
}

export default About
