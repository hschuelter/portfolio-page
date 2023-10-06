import { useState } from 'react'
import * as React from 'react';
import '../App.css'

import { Avatar, Paper } from '@mui/material/';

import ProjectCard from '../components/ProjectCard';
import SessionHeader from '../components/SessionHeader';

import portfolioImg from '/static/images/projects/portfolio.png';
import pokedexImg from '/static/images/projects/pokedex-js.png';
import pokedexGif from '/static/images/projects/pokedex-js.gif';
import learnKana from '/static/images/projects/learn-kana.png';
import namelessSurvivors from '/static/images/projects/nameless-survivors.png';
import searchEngine from '/static/images/projects/searchEngine.png';
import metadataScraper from '/static/images/projects/metadataScraper.png';
import javaCompiler from '/static/images/projects/javaCompiler.png';


import blankImg from '/static/images/projects/blank.png';



import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

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

function Projects() {
	return (
        <div className='content'>
            <div>
				<SessionHeader title={'Personal Projects'} />
				<div className='grid-container' style={{marginBottom: '16px', flexWrap: 'wrap'}}>
				<ProjectCard 
                        title={'Portfolio Website'}
                        cover={portfolioImg}
                        description={'Wow! Is this website recursive? Well, unfortunately it is not. This is my personal portfolio website, showcasing my skills and past personal projects. Design inspired by a post on TikTok.'}
                        tags={['React', 'Vite', 'MaterialUI']}
                        references={
							[{
                                link: 'https://github.com/hschuelter/portfolio-page', 
                                icon: <GitHubIcon/>
                            }, 
                            {
                                link: 'https://bit.ly/arthur-schuelter',
                                icon: <OpenInNewIcon/>
                            }]} />

					<ProjectCard 
                        title={'Pokédex-JS'}
                        cover={pokedexImg}
                        description={`Pokédex visualization project, including the first 151 Pokémon, using data from PokéAPI. You can search Pokémon by it's name or type. Main objective: practice React and interface design`}
                        tags={['React', 'Vite', 'MaterialUI', 'API']}
                        references={
							[{
                                link: 'https://github.com/hschuelter/pokedex-js', 
                                icon: <GitHubIcon/>
                            }, 
                            {
                                link: 'https://bit.ly/pokedex-js',
                                icon: <OpenInNewIcon/>
                            }]} />

                    <ProjectCard 
                        title={'Learn Kana'}
                        cover={learnKana}
                        description={`Minimalist app to learn and practice Hiragana. I'll eventually add Katana and Kanji as well. Also testing website deployment in Vercel.`}
                        tags={['React', 'Vite', 'MaterialUI', 'Vercel']}
                        references={
                            [{
                                link: 'https://github.com/hschuelter/learn-kana', 
                                icon: <GitHubIcon/>
                            }, 
                            {
                                link: 'https://bit.ly/learn-kana',
                                icon: <OpenInNewIcon/>
                            }]} />

                    <ProjectCard 
                        title={'Nameless Survivors'}
                        cover={namelessSurvivors}
                        description={`2D BulletHell Survivor Roguelike Game. Those were a bunch of keywords, wasn't it? Well, it's basically Vampire Survivors.`}
                        tags={['Unity', 'C#']}
                        references={
							[{
                                link: 'https://github.com/hschuelter/', 
                                icon: <GitHubIcon/>
                            }, 
                            {
                                link: 'https://tururuca.itch.io/',
                                icon: <OpenInNewIcon/>
                            }]} />
				</div>
			</div>

            <div>
				<SessionHeader title={'Academic Projects'} />
				<div className='grid-container' style={{marginBottom: '16px', flexWrap: 'wrap'}}>
				
                <ProjectCard 
                        title={'Scientific Article Search Engine'}
                        cover={searchEngine}
                        description={`Back-end and Front-end for my final Comp Sci project. It's a search engine and recommendation system for scientific articles.`}
                        tags={['React', 'Node.js', 'HTML/CSS']}
                        references={
							[{
                                link: 'https://github.com/hschuelter/frontend', 
                                icon: <GitHubIcon/>
                            }, 
                            {
                                link: 'https://github.com/hschuelter/as-backend',
                                icon: <GitHubIcon/>
                            }]} />

					<ProjectCard 
                        title={'Scientific Article Metadata Scraper'}
                        cover={metadataScraper}
                        description={'Web Scraping and Web Crawling scripts for caputring scientific articles metadata.'}
                        tags={['Python', 'Scrapy', 'PostgreSQL']}
                        references={
							[{
                                link: 'https://github.com/hschuelter/WebCrawler', 
                                icon: <GitHubIcon/>
                            }]} />

					<ProjectCard 
                        title={'Java Compiler in C'}
                        cover={javaCompiler}
                        description={`Compiler of a made up programming language (Java--). C was used for the Data Structures, compiler functions, with full lexic and syntactic analysis.`}
                        tags={['C', 'GNU Bison', 'Yacc', 'Flex']}
                        references={
							[{
                                link: 'https://github.com/hschuelter/uni-general', 
                                icon: <GitHubIcon/>
                            }]} />
				</div>
			</div>
        </div>
	)
}

export default Projects;