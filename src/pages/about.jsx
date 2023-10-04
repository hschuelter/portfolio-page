import { useState } from 'react'
import * as React from 'react';
import '../App.css'

import { Avatar, Paper } from '@mui/material/';

import SessionHeader from '../components/SessionHeader';

import { Tabs, Tab } from '@mui/material/';
import { styled } from '@mui/material/styles';

import pythonLogo from '/static/images/icons/skills/python-logo.svg';
import cPlusPlusLogo from '/static/images/icons/skills/c-plusplus-logo.svg';
import javaScriptLogo from '/static/images/icons/skills/JavaScript-logo.png';
import cLogo from '/static/images/icons/skills/c-logo.svg';
import cSharpLogo from '/static/images/icons/skills/c-sharp-logo.svg';
import javaLogo from '/static/images/icons/skills/java-logo.png';
import htmlLogo from '/static/images/icons/skills/html-logo.svg';
import cssLogo from '/static/images/icons/skills/css-logo.svg';

import reactLogo from '/static/images/icons/skills/react-logo.svg';
import nodejsLogo from '/static/images/icons/skills/nodejs-logo.svg';
import angularLogo from '/static/images/icons/skills/angular-logo.svg';

import gitLogo from '/static/images/icons/skills/git-logo.svg';
import githubLogo from '/static/images/icons/social/github-white.png';
import dockerLogo from '/static/images/icons/skills/docker-logo.png';
import scrapyLogo from '/static/images/icons/skills/scrapy-logo.png';


import SkillButton from '../components/SkillButton';

const darkStyle = {
	maxWidth: '90%',
	minWidth: '85%',
	borderRadius: '16px',
	backgroundColor: '#363636',
	padding: '32px 0px 32px 32px',
	color: '#ffffff',
	marginBottom: '24px'
}

const lightStyle = {
	maxWidth: '90%',
	minWidth: '85%',
	borderRadius: '16px',
	backgroundColor: '#fff',
	padding: '32px 0px 32px 32px',
	color: '#363636',
	marginBottom: '24px'
}

function About() {
	return (
		<div className='content'>
			<Paper 
				elevation={3} 
				style={darkStyle}>

				<SessionHeader title={'About Me'}/>				
				<div className='grid-container' style={{marginRight: '32px'}}>
					<div className='item' style={{flex: '3'}}>
						<div className='item-content'>
							<Avatar 
								sx={{ width: '80%', height: 'auto' }}
								src='./src/assets/my-photo.jpg' />
						</div>
					</div>
					<div className='item' style={{flex: '8'}}>
						<div className='about-description'>
							&#9;Hello! 
							My name is Arthur Schuelter. 
							I'm a computer scientist from Brazil.
							I have 1 and a half year of experience with back-end applicantions and close to 1 year with front-end development.
							Well, not counting the experience I gained at  University studying Computer Science.
							I have a solid basis in Algorithms, Computational Theory, Artificial Intelligence and Security.
							<br />
							<br />
							&#9;In the moment, as a hobby, I am studying and practicing Game Design and UI Design as well.
							Which, I think, will help me further develop my skills as a Full Stack Software Developer.
							I also plan to start a Masters postgraduate program in the near future.
							My job is to make beautiful, clean and usable interfaces, that matches the message and identity of your company.
							<br />
							<br />
							&#9;You can find me on github, on linkedin and on leetcode, and their respective icons in the navigation bar.
							Feel free to contact me. 
							

						</div>
					</div>
				</div>
			</Paper>

			<SessionHeader title={'Programming Languages'}/>

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
				<div className='grid-container' style={{marginBottom: '16px', flexWrap: 'wrap'}}>
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
				<div className='grid-container' style={{marginBottom: '16px', flexWrap: 'wrap'}}>
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