import React, {Component} from 'react';
import styled from 'styled-components';
import Gallery from "react-photo-gallery";
import {Photos} from "./Photos.js";

const Wrapper = styled.div`
	width: calc(200vmax + 1500px);
	height: 100%;
	overflow-y:hidden;
	display: flex;
	align-items: center;
	padding-right:2vw;
`



export default class Images extends Component{
	constructor(props) {
		super(props);
		this.state = { width: 0, height: 0 };
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	  }
	  
	  componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	  }
	  
	  componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	  }
	  
	  updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	  }

	render(){
		return <Wrapper><Gallery targetRowHeight={this.state.height > this.state.width ? this.state.height/4.2: this.state.height/3.5} photos={Photos}/></Wrapper>
	}
}

