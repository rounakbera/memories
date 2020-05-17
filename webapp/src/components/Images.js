import React from 'react';
import styled from 'styled-components';
import Gallery from "react-photo-gallery";
import {Photos} from "./Photos.js";

const Wrapper = styled.div`
	width: calc(200vmax + 1500px);
	height: 100%;
	display: flex;
	align-items: center;
`

export default function Images(props){
	return <Wrapper><Gallery targetRowHeight={250} photos={Photos}/></Wrapper>
}

