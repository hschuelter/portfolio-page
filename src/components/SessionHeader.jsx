import React, {useState} from "react";
import '../App.css';

function SessionHeader({ title }) {

    return (     
        <div className='session-header'>
            <div className='item grid-container' style={{flex: '4'}}>
                <div className='dash' style={{minWidth: '10%'}}>
                    <hr />
                </div>
                <div className='title'>{title}</div>
            </div>
        </div>
    );
}

export default SessionHeader;