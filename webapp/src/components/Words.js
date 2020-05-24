import React, { Component } from 'react';
import styled from 'styled-components';
import VizSensor from 'react-visibility-sensor';
import { CSSTransition } from 'react-transition-group';


import '../MainLetter.css'

const Text = styled.div`
	font-family:'Open Sans';
	font-size:'1.5rem';
	color: #B9D9EB;
	text-align: center;
	width:30vw;
	opacity: ${props => props.inView ? "1": "0"};
	@media only screen and (max-width: 600px) {
		height:75vh;
		width: 75vw;
		margin-right:1vw;
	}
`

const TextWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content:center;
	width: 150vw;
	opacity:.85;
	@media only screen and (max-width: 600px) {
		width:100vw;
		height:100vh;
		align-items:center;
		padding-left:40vw;
	}
`

const Letter = styled.div`
	text-indent: 2rem;
	width: 100%;
	text-align: left;
	font-weight: 700;
	margin-bottom: 50px;
`
const From = styled.div`
	width: 100%;
	text-align:right;
	font-family: 'Arvo';
`
const Decider = styled.div`
	height:100vh;
	width:1px;
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
					<Text inView={this.state.isInView}>
						<Letter>
              				Congrats on graduating y'all! Each of us wrote a letter to you guys; find 'em linked below.
            			</Letter>
						<From>
							the juniors of <strong>thöWönk</strong>
						</From>
					</Text>
					<VizSensor
						active={this.state.hasNotFired}
						onChange={(isVisible) => this.updateBehavior(isVisible)}
					>
						<Decider/>
					</VizSensor>
				</TextWrapper>
			</CSSTransition> 
				
			</>
		);
	}
}

