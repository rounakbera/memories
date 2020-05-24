import React, { Component } from 'react';
import styled from 'styled-components';
import VizSensor from 'react-visibility-sensor';
import { CSSTransition } from 'react-transition-group';
import Letters from './Letters.js';


import '../MainLetter.css'

const Text = styled.div`
	margin: 5vh 15vw;
	font-family:'Open Sans';
	font-size:'1.5rem';
	color: #B9D9EB;
	text-align: center;
	width: 70vw;
	height: 90vh;
	opacity: ${props => props.inView ? "1": "0"};
	@media only screen and (max-width: 600px) {
		height:75vh;
		width: 75vw;
		margin: 0;
	}
`

const TextWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content:center;
	width: 100vw;
	opacity:.85;
	@media only screen and (max-width: 600px) {
		width:100vw;
		height:100vh;
		align-items:center;
	}
`

const Letter = styled.div`
	color: #FCC849;
	width: 30vw;
	margin-left: 20vw;
	text-align: left;
	font-weight: 700;
	margin-bottom: 25px;
	@media only screen and (max-width: 600px) {
		width: 100%;
		margin-left: 0;
	}
`
const From = styled.div`
	color: #f28e0a;
	width: 30vw;
	margin-left: 20vw;
	text-align:right;
	font-family: 'Arvo';
	margin-bottom: 25px;
	@media only screen and (max-width: 600px) {
		width: 100%;
		margin-left: 0;
	}
`
const Decider = styled.div`
	height:100vh;
	width:1px;
`

const LetterWrapper = styled.div`
	font-size: 0.9rem;
	text-align: left;
	width: 60vw;
	margin-left: 5vw;
	@media only screen and (max-width: 600px) {
		width: 100%;
		margin-left: 0;
	}
`

export default class Words extends Component{
	constructor(props) {
		super(props);
		this.state = {
			isInView:false,
			hasNotFired:true
		}
	}

	updateBehavior = (isVisible) =>{
		this.setState({isInView:isVisible});
	}
	
	render(){
		return(
			<>
			<CSSTransition
			in={this.state.isInView}
			timeout={1250}
			classNames="letter"
			onEnter={() => this.setState({hasNotFired:false})}
			> 
				<TextWrapper>
					<VizSensor
						style={{position: "absolute", top: "0"}}
						active={this.state.hasNotFired}
						onChange={(isVisible) => this.updateBehavior(isVisible)}
					>
						<Decider/>
					</VizSensor>
					<Text inView={this.state.isInView}>
						<Letter>
              				Congrats on graduating y'all! Each of us wrote a letter to you guys; find 'em linked below.
            			</Letter>
						<From>
							the juniors of <strong>thOwOnk</strong>
						</From>
						<LetterWrapper>
							<Letters numWidth={this.props.numWidth}/>
						</LetterWrapper>
					</Text>
				</TextWrapper>
			</CSSTransition> 
				
			</>
		);
	}
}

