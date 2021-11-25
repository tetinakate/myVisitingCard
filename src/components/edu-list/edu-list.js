import React from "react";
import uniqueId from 'lodash/uniqueId'

import './edu-list.css';

const EduList = ({ myEducation }) => {



    return (

        <div className='skill'>
        <div className ='headlines title'>Образование</div>

            <div className = 'skill-list education'>
                <ul>
                    {
                        myEducation.map(({ university, faculty, year }) => {
                            return (
                                <li key={uniqueId()}>
                                    <span className = 'bold'>{university}, {year}.</span> {faculty}
                                </li>
                            )
                        })
                    }
                </ul>
                
            </div>
    </div>

    );
}

export default EduList;