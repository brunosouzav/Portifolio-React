import React, { Component } from 'react';
import './SkillsCard.css';
import { news } from '../components/DataCards';

export class SkillsCard extends Component {
  render() {
    return (
      <div className="skill-cards-container">
        {news.map((item, index) => (
          <div key={index} className="skill-cards-container-sub">
            <div className="container-skill-cards-icone">{item.icon}</div>
            <div className="container-skill-cards-name">
              <p className="name-skills">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default SkillsCard;