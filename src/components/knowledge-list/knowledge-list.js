import React from 'react';
import uniqueId from 'lodash/uniqueId'
import './knowledge-list.css';


const KnowledgeList = ({ myKnowledge }) => {
    return(
        <div className='skill'>
            <div className ='headlines title'>Навыки</div>

            <div className = 'skill-list knowledge'>
                <ul>
                    {
                        myKnowledge.map(( elem ) => {
                            return(
                                <li key={uniqueId()}>
                                    <span className = 'bold'>{elem}</span>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>

        </div>
    );
}

export default KnowledgeList;