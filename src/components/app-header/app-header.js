import React from "react";
import './app-header.css';

const AppHeader = ({ myName, myProffesion}) => {

    
    return (
        <header>
          <div className = 'intro-outer'>
            <div className = 'intro-inner'>
              <div className = 'intro my-name'>{myName}</div>
              <div className = 'intro my-prof'>{myProffesion}</div>
            </div>
  
          </div>
        </header>
    );
}

export default AppHeader;