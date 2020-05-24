import React, {Component} from 'react';
import styled from 'styled-components';
import Title from './components/Title.js';
import Images from './components/Images.js';
import Words from './components/Words.js';
import {Photos} from './components/Photos.js';
import './App.css';

const AppWrapper = styled.div`
	width: calc(200vw + 240vmax + 1800px);
	height: 100vh;
	background-color: #00071A;
	display: flex;
	overflow: hidden;
`

const VisionWrapper = styled.div`
	pointer-events: none;
	width: 100vw;
	height: 100vh;
	background-image: linear-gradient(to right, black,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent,transparent, black);	
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
		this.state = { width: window.innerWidth, height: window.innerHeight }
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
		this.hScroll.bind(this)
	}

	componentDidMount() {
		require.context('./assets', false, /\.(png|jpe?g|svg)$/)
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}
	
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}
	
	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	hScroll = (e) => {
		var container = document.getElementById('container')
		var containerScrollPosition = document.getElementById('container').scrollLeft
		if(this.state.width <= 600){
			return;
		}
		container.scrollTo({
			top: 0,
			left: containerScrollPosition + e.deltaY,
			behaviour: 'smooth'
		})
	}

	render(){
		// const LetterHeight = this.state.width > 600 ? <style>.react-tabs__tab-panel--selected {display: block; height: 50vh; overflow: scroll;
		//   }</style>
		return (
			<div id='container' onWheel={this.hScroll} style={{width: "auto", height: '100vh',overflow:'scroll'}}>
				<style>
					@import url('https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400&family=Open+Sans:ital,wght@0,400;0,600;1,400&display=swap');
				</style>
				<AppWrapper>
					<VisionWrapper/>
					<Title/>
					<Images numHeight={this.state.height} numWidth={this.state.width} photos={Photos}/>
					<Words numWidth={this.state.width}/>
				</AppWrapper>
			</div>
		)
	}
}




export default App;
