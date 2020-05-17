import React from 'react'
import styled from 'styled-components'
import Thowonk from '../thowonk.png'

const TitleWrapper = styled.div`
	width: 50vw;
	display: flex;
    align-items: center;
	justify-content:center;
`

const TitleImage = styled.img`
	width: 10vw;
	height: 10vw;
	margin: 1vw;
`

const TitleText = styled.div`
	width: 25vw;
	margin: 1vw;
	font-size: 3rem;
	font-family: 'Arvo';
	color: #B9D9EB;
	@media only screen and (max-width: 600px) {
		font-size: 4rem;
	}	
`

export default function Title(props){
	return (
		<TitleWrapper>
			<TitleImage src={Thowonk}/>
			<TitleText>Class of <strong>2020</strong></TitleText>
		</TitleWrapper>
)
}

