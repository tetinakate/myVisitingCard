import React from "react";

import './my-skills.css'
import EduList from "../edu-list/edu-list";
import KnowledgeList from "../knowledge-list";
import ExperienceList from "../experience-list";


const MySkills = () => {
  
    const myEducation = [
      {
          university: 'Воронежский государственный университет', 
          faculty: 'Факультет компьютерных наук. Информационные системы в телекоммуникациях/Информационные системы и технологии', 
          year: 2015
      },
      {
          university: 'Воронежский государственный аграрный университет им. Императора Петра I', 
          faculty: 'Факультет бухгалтерского учета и финансов. Бухгалтерский учет, анализ и аудит', 
          year: 2017
      }
    ];

    const myKnowledge = ['HTML', 'CSS', 'JavaScript', 'JQuery', 'PHP', 'React'];

    const myExperience = ['Адаптивная верстка', 'Кроссбраузерная верстка', 'Разработка функционала в различных CMS', 'Настройка редиректов', 'Наполнение контентом' ];





    return(
        <div className = 'my-skills-block'>

          <div className='skills'>

            <EduList myEducation={myEducation} />

            <KnowledgeList myKnowledge={myKnowledge} />

            <ExperienceList myExperience={myExperience} />


          </div>
        </div>

    );
}

export default MySkills;