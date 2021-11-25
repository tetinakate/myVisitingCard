import React from "react";
import uniqueId from 'lodash/uniqueId'
import './practice.css';

const Practice = ({ mySpecialty, myPractice}) => {
    return(

        <div className = 'practice'>
          <div className = 'practice-title'>Опыт</div>
          <div className = 'specialty'>{ mySpecialty }</div>
          <div className = 'responsibilities'>
            <ul>
              {
                myPractice.map((elem) => {

                  return(
                    <li key={uniqueId()}>{ elem }</li>
                  );
                  
                })
              }
            </ul>
          </div>
  
        </div>

    );
}

export default Practice;