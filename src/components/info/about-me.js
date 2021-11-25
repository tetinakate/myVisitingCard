import React from 'react';
import './about-me.css';

const AboutMe = () => {

const aboutme = 'В поисках вакансии junior frontend developer в динамично развивающейся компании';
    return (

  
          <div className = 'info'>
            <div className = 'info-inner about'>
                <div className ='info-title'>Обо мне</div>
                <div className = 'info-text'>{ aboutme }</div>
            </div>
            <div className = 'info-inner photo'><img src={require('../assert/photo-info-block.jpg').default} alt='it is me'></img></div>
            <div className = 'info-inner contact'>
                <ul>
                    <li><span>г. Москва</span><i className="fas fa-map-marker-alt"></i></li>
                    <li><span><a href ='tel:+79525519180'>8 952 551 91 80</a></span> <i className="fas fa-phone-volume"></i></li>
                    <li><span><a href ='mailto:kate-alekseenko92@mail.ru'>kate-alekseenko92@mail.ru</a></span> <i className="fas fa-envelope"></i></li>
                </ul>
            </div>
          </div>

    );
}

export default AboutMe;