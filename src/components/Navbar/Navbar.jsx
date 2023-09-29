import React from "react"; 
import { BrowserRouter, Route, Link, useLocation } from "react-router-dom"; 
import '../../App.css';
import githubLogo from '../../assets/img/icons/social/github-white.png';
import linkedInLogo from '../../assets/img/icons/social/lin-white.png';
import leetCodeLogo from '../../assets/img/icons/social/leetcode-white-2.png';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const selected = {
    color: 'white',
    borderBottom: '2px solid #646cff'
}

const notSelected = {
    color: 'grey'
}

var homeStyle, aboutStyle, projectStyle;

function setStyle() {
    location = useLocation().pathname;

    if (location == '/') homeStyle = selected
    if (location == '/about') aboutStyle = selected
    if (location == '/projects') projectStyle = selected

}

function Navbar() {
    const githubLink = "https://github.com/hschuelter/";
    const linkedInLink = "https://www.linkedin.com/in/arthur-schuelter/";
    const leetCodeLink = "https://leetcode.com/tururuca/";

    const location = useLocation().pathname;
    // homeStyle = selected;
    // aboutStyle = selected;
    // projectStyle = selected;

    homeStyle = (location == '/') ? selected : notSelected;
    aboutStyle = (location == '/about') ? selected : notSelected;
    projectStyle = (location == '/projects') ? selected : notSelected;

    return (     
        <nav>
            <div className="container" style={{flex: '2'}}>
                arthurSchuelter();
            </div>
            <div className="container" style={{flex: '1'}}>
                <div className="nav-element"><Link to="/"           style={homeStyle}>Home</Link></div>
                <div className="nav-element"><Link to="./about"     style={aboutStyle}>About</Link></div>
                <div className="nav-element"><Link to="./projects"  style={projectStyle}>Projects</Link></div>
            </div>
            <div className="container" style={{flex: '2'}}>
                <a href={githubLink}    target="_blank" > <img src={githubLogo} className="contact-logo" alt="My github profile"/> </a>
                <a href={linkedInLink}  target="_blank" > <img src={linkedInLogo} className="contact-logo" /> </a>
                <a href={leetCodeLink}  target="_blank" > <img src={leetCodeLogo} className="contact-logo" /> </a>
            </div>

        </nav>
    );
}

export default Navbar;