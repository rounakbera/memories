import React, {Component} from 'react';
import styled from 'styled-components';
import Gallery from "react-photo-gallery";
import {Photos} from "./Photos.js";

const Wrapper = styled.div`
	width: calc(240vmax + 1800px);
	height: 100%;
	overflow-y:hidden;
	display: flex;
	align-items: center;
	padding-right:2vw;
`



export default class Images extends Component{
	constructor(props) {
		super(props);
	}

	render(){
		const h = this.props.numHeight;
		const w = this.props.numWidth;
		return(
			<Wrapper>
				<Gallery targetRowHeight={h > w ? h/4.2 : h/3.5} photos={Photos}/>
			</Wrapper>
		)
	}
}

