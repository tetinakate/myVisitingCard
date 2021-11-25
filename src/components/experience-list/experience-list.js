import React from 'react';
import uniqueId from 'lodash/uniqueId'


const ExperienceList = ({ myExperience }) => {
    return(
        <div className='skill'>
        <div className ='headlines title'>Умения</div>

            <div className = 'skill-list experience'>
                <ul>
                    {
                        myExperience.map(( elem ) => {
                            return(
                                <li key={uniqueId()}>
                                    <span className = 'bold'>{ elem }</span>
                                </li>
                            );
                        })

                    }
                    <li></li>
                </ul>
            </div>
        </div>
        
    );
}

export default ExperienceList;