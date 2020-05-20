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

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content:center;
	width: 150vw;
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
			<Wrapper>
				<div className="wrapper-fade">
			      <CSSTransition
					in={this.state.isInView}
					timeout={2000}
					classNames="letter"
				>
				<Text className="letter" inView={this.state.isInView}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum, nunc eu tincidunt suscipit, est odio rhoncus magna, id accumsan arcu leo eu tortor. Donec non ex vel odio convallis finibus eget id velit. Donec faucibus risus sit amet nisi tincidunt, non lobortis tellus mollis. Nam ut felis ac ante egestas egestas. Duis et enim vel quam placerat consequat. Donec bibendum feugiat dictum. Donec et sem libero. Integer a ipsum nibh. Aliquam placerat purus nulla, ac efficitur risus eleifend non. Praesent ac condimentum tellus. Quisque cursus lectus vel ultricies pharetra. Cras at justo porttitor, malesuada tellus eget, tincidunt nunc. Aenean vel egestas urna. Proin ut dolor ac magna porta mollis.
					</p>
					<From>
						Rounak, Matt
					</From>
				</Text>
				</CSSTransition>
				</div>
			</Wrapper>
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