import { useState } from 'react'
import * as React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Avatar, Paper } from '@mui/material/';

import { Tabs, Tab } from '@mui/material/';
import { styled } from '@mui/material/styles';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'

import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
  }));

function App() {

	
	const [value, setValue] = React.useState('one');

	const handleChange = (event, newValue) => {
	  setValue(newValue);
	};

	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/projects' element={<Projects />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
