import { useState } from 'react'
import * as React from 'react';
import '../App.css'

import { Avatar, Paper } from '@mui/material/';

import SessionHeader from '../components/SessionHeader';

import { Tabs, Tab } from '@mui/material/';
import { styled } from '@mui/material/styles';

import pythonLogo from '../assets/img/icons/skills/python-logo.svg';
import cPlusPlusLogo from '../assets/img/icons/skills/c-plusplus-logo.svg';
import javaScriptLogo from '../assets/img/icons/skills/JavaScript-logo.png';
import cLogo from '../assets/img/icons/skills/c-logo.svg';
import cSharpLogo from '../assets/img/icons/skills/c-sharp-logo.svg';
import javaLogo from '../assets/img/icons/skills/java-logo.png';
import htmlLogo from '../assets/img/icons/skills/html-logo.svg';
import cssLogo from '../assets/img/icons/skills/css-logo.svg';

import reactLogo from '../assets/img/icons/skills/react-logo.svg';
import nodejsLogo from '../assets/img/icons/skills/nodejs-logo.svg';
import angularLogo from '../assets/img/icons/skills/angular-logo.svg';

import gitLogo from '../assets/img/icons/skills/git-logo.svg';
import githubLogo from '../assets/img/icons/social/github-white.png';
import dockerLogo from '../assets/img/icons/skills/docker-logo.png';
import scrapyLogo from '../assets/img/icons/skills/scrapy-logo.png';


import SkillButton from '../components/SkillButton';

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



function About() {
	const [value, setValue] = React.useState('one');

	const handleChange = (event, newValue) => {
	  setValue(newValue);
	};

	return (
		<div className='content'>
			<Paper 
				elevation={3} 
				className='box'
				style={darkStyle}>

				<SessionHeader title={'About Me'}/>

				{/* <div className='session-header'>
					<div className='item grid-container' style={{flex: '4'}}>
						<div className='title'>About Me</div>
						<div className='dash' style={{minWidth: '30%'}}>
							<hr />
						</div>
					</div>
				</div> */}
				
				<div className='grid-container'>
					<div className='item' style={{flex: '3'}}>
						<div className='item-content'>
							<Avatar 
								sx={{ width: '80%', height: 'auto' }}
								src='./src/assets/my-photo.jpg' />
						</div>
					</div>
					<div className='item' style={{flex: '8'}}>
						<div className='item-content'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Sed fermentum mollis rutrum.
							Curabitur pharetra vel tortor ut rhoncus.
							Mauris at nulla pretium, ornare erat vel, malesuada orci.
							Pellentesque porta lorem nec vulputate luctus.
							Pellentesque pulvinar pharetra urna ut maximus.
							Aenean consequat vehicula felis, nec tempor ligula dictum id.
							Etiam purus mi, malesuada ut tristique sed, varius sed lacus.
							Donec ex justo, lobortis rhoncus lacinia ac, lobortis id dolor.
							Mauris eu ante elit.
							Curabitur hendrerit tortor sit amet ligula venenatis pharetra.
							Morbi porttitor dictum libero ut pulvinar.
							Curabitur pellentesque cursus elementum.
							Vivamus sollicitudin enim ac cursus fermentum.
							Fusce vel maximus ante, quis iaculis sem.
						</div>
					</div>
				</div>
			</Paper>

			<SessionHeader title={'Programming Languages'}/>
			
			{/* <Tabs
				value={value}
				onChange={handleChange}
				aria-label="wrapped label tabs example">
					<Tab
						value="one"
						label="New Arrivals in the Longest Text of Nonfiction that should appear in the next line"
						wrapped
					>
					</Tab>
        		<Tab value="two" label="Item Two"> 
				</Tab>
        		<Tab value="three" label="Item Three" >
				</Tab>
			</Tabs> */}

			<div>
				<div className='grid-container' style={{marginBottom: '16px', flexWrap: 'wrap'}}>
					<SkillButton 
						logo={pythonLogo}
						title={'Python'}
						grade={'Advanced'}/>

					<SkillButton 
						logo={javaScriptLogo}
						title={'JavaScript'}
						grade={'Advanced'}/>

					<SkillButton 
						logo={javaLogo}
						title={'Java'}
						grade={'Advanced'}/>

					<SkillButton 
						logo={cPlusPlusLogo}
						title={'C++'}
						grade={'Advanced'}/>

					<SkillButton 
						logo={cLogo}
						title={'C'}
						grade={'Advanced'}/>

					<SkillButton 
						logo={cSharpLogo}
						title={'C#'}
						grade={'Advanced'}/>

					<SkillButton 
						logo={htmlLogo}
						title={'HTML'}
						grade={'Intermediate'}/>

					<SkillButton 
						logo={cssLogo}
						title={'CSS'}
						grade={'Intermediate'}/>
				</div>
			</div>


			<SessionHeader title={'Frameworks'}/>
			<div>
				<div className='grid-container' style={{marginBottom: '16px'}}>
					<SkillButton 
						logo={reactLogo}
						title={'React'}
						grade={'Intermediate'}/>

					<SkillButton 
						logo={nodejsLogo}
						title={'Node.js'}
						grade={'Intermediate'}/>

					<SkillButton 
						logo={angularLogo}
						title={'Angular'}
						grade={'Intermediate'}/>
					
				</div>
			</div>

			<SessionHeader title={'Tools'}/>
			<div>
				<div className='grid-container' style={{marginBottom: '16px'}}>
					<SkillButton 
						logo={gitLogo}
						title={'Git'}
						grade={'Intermediate'}/>

					<SkillButton 
						logo={githubLogo}
						title={'Github'}
						grade={'Intermediate'}/>

					<SkillButton 
						logo={scrapyLogo}
						title={'Scrapy'}
						grade={'Intermediate'}/>
					
					<SkillButton 
						logo={dockerLogo}
						title={'Docker'}
						grade={'Beginner'}/>
				</div>
			</div>

		</div>
	)
}

export default About;