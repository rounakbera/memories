import React, {Component} from 'react';
import styled from 'styled-components';
import Gallery from "react-photo-gallery";

const Wrapper = styled.div`
	width: calc(240vmax + 1800px);
	height: 100%;
	overflow-y:hidden;
	display: flex;
	align-items: center;
	padding-right:2vw;
`



export default class Images extends Component{

	render(){
		const h = this.props.numHeight;
		const w = this.props.numWidth;
		return(
			<Wrapper>
				<Gallery targetRowHeight={h > w ? h/4.2 : h/4.5} photos={this.props.photos}/>
			</Wrapper>
		)
	}
}

