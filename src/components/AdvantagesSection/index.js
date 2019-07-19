import React from 'react';
import 'scss/bwk.scss'
import { advantages } from '../../source';
import { Link } from 'gatsby';
import './avantages-section.scss';
const AdvantageSection = () => (
  <div className="advantages-section">
    <h2>Korzyści</h2>
    <div className="advantages-section__field">
      {advantages.map(advantage => (
        <div key={advantage.id} >
          <Link to={`/advantage`}>

            <div className="advantage-field">
              <img src={advantage.icon} alt={`${advantage.title} icon`} />
              <h3>{advantage.title}</h3>
              <p>{advantage.content}</p>
            </div>

          </Link>
        </div>
      ))}
    </div>
  </div>
);
export default AdvantageSection