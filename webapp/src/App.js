import React, {Component} from 'react';
import styled from 'styled-components';
import Title from './components/Title.js';
import Images from './components/Images.js';
import Words from './components/Words.js';
import './App.css';

const AppWrapper = styled.div`
	width: calc(340vmax + 1800px);
	height: 100vh;
	background-color: #00071A;
	display: flex;
	overflow-y: hidden;
`

const VisionWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background-image: linear-gradient(to right, black,transparent,transparent,transparent,transparent,transparent, black);	
	position:fixed;
	z-index:999;
	top:0;
	left:0;
	bottom: 0;
	right: 0;
	@media only screen and (max-width: 600px) {
		visibility: hidden;		
	}
`

class App extends Component {
	constructor(props){
		super(props)
		this.hScroll.bind(this)
	}

	hScroll = (e) => {
		// e.preventDefault()
		var container = document.getElementById('container')
		var containerScrollPosition = document.getElementById('container').scrollLeft
		container.scrollTo({
			top: 0,
			left: containerScrollPosition + e.deltaY + e.deltaX,
			behaviour: 'smooth' //if you want smooth scrolling
		})
	}

	render(){
		return (
			<div id='container' onWheel={this.hScroll} style={{width: "auto", height: '100vh',overflow:'scroll'}}>
				<style>
					@import url('https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400&family=Open+Sans:ital,wght@0,400;0,600;1,400&display=swap');
				</style>
				<AppWrapper>
					<VisionWrapper/>
					<Title/>
					<Images/>
					<Words/>
				</AppWrapper>
			</div>
		)
	}
}




export default App;
