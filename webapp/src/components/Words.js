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

const From = styled.div`
	width: 100%;
	text-align:right;
	font-weight: 700;
`
const Decider = styled.div`
	height:100vh;
	width:1px;
`

export default class Words extends Component{
	constructor(props) {
		super(props);
		this.state = {
			isInView:false
		}
	}
	
	render(){
		return(
			<>
			<CSSTransition
			in={this.state.isInView}
			timeout={2500}
			classNames="letter"
			> 
				<TextWrapper>
					<Text inView={this.state.isInView}>
						<p>
              				Congrats on graduating y'all!
            			</p>
						<From>
							the juniors of <strong>thöWönk</strong>
						</From>
					</Text>
				</TextWrapper>
					
			</CSSTransition> 
				
			<VizSensor
				onChange={(isVisible) => {
				this.setState({isInView: isVisible})
				}}
			>
				<Decider/>
			</VizSensor>
			</>
		);
	}
}

