import { useState } from 'react'
import * as React from 'react';
import '../App.css'

import { Avatar, Paper } from '@mui/material/';

const darkStyle = {
	borderRadius: '16px',
	backgroundColor: '#363636',
	color: '#ffffff',
	marginBottom: '24px'
}

const lightStyle = {
	borderRadius: '16px',
	backgroundColor: '#fff',
	color: '#363636',
	marginBottom: '24px'
}

function Home() {
	return (
        <div className='content'>
            <div className='home-content'>
                <div className='grid-container'>
                    <div className='item description' style={{flex: '2'}}>
                        <div className='other'>Hello World, I'm</div>
                        <div className='name'>Arthur Schuelter</div>
                        <div className='job'>Computer Scientist</div>
                        <div className='other'>Welcome to my personal website.</div>
                    </div>

                    <div className='item' style={{flex: '2'}}>
                        <div className='item-content'>
                            <Avatar 
                                sx={{ 
                                    width: '70%', 
                                    height: 'auto',
                                    border: '3px solid #646cff',
                                    boxShadow: '0px 0px 32px #646cff'
                                }}
                                src='./src/assets/my-photo.jpg' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
	)
}

export default Home;