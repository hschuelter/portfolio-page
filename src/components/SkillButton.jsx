import React, {useState} from "react";
import '../App.css';

function SkillButton({ logo, title, grade}) {
    const [style, setStyle] = useState({display: 'none'});

    return (     
        <div className='skill-button' style={{flex: '1 0 21%', maxWidth: '21%', minWidth: '205px', marginBottom: '16px'}}
            onMouseEnter={e => { setStyle({display: 'block', animationDuration: '1.0s'}) }}
            onMouseLeave={e => { setStyle({display: 'none'}) }}>
                <img src={logo}/>
                <ul className='name'>
                    <li className='title'> {title} </li>
                    <li className='grade' style={style}> {grade} </li>
                </ul>
        </div>
    );
}

export default SkillButton;