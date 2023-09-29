import React, {useState} from "react";
import '../App.css';

function ProjectCard({ cover, title, description, tags, references }) {

    return (     
        <div className='project-card' style={{flex: '1 0 28%', maxWidth: '28%', minWidth: '205px', marginBottom: '16px'}}>
            <div className='title'> {title} </div>
            <img src={cover}/>
            <div className='description'> {description} </div>
            <div className="footer">
                <div className="tags"> 
                    { tags.join(', ') } 
                </div>
                <div className="links"> { 
                    references.map( (ref) => 
                        <a href={ref.link} target="_blank" key={ref.img}>
                            {ref.icon}
                        </a> 
                    )} 
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;