import React from 'react'
import styled from 'styled-components'
import Thowonk from '../thowonk.png'

const TitleWrapper = styled.div`
	width: 50vmax;
	display: flex;
    align-items: center;
	justify-content:center;
	margin-left: -20px;
`

const TitleImage = styled.img`
	width: 10vmax;
	height: 10vmax;
	margin: 1vmax;
`

const TitleText = styled.div`
	width: 25vmax;
	margin: 1vmax;
	font-size: 3rem;
	font-family: 'Arvo';
	color: #B9D9EB;
`

const Chevron =styled.span`
	border-color: #B9D9EB;
	border-style: solid;
	border-width: 0.25em 0.25em 0 0;
	content: '';
	display: inline-block;
	height: 0.45em;
	left: 0.15em;
	position: relative;
	top: 0.15em;
	transform: rotate(-45deg);
	vertical-align: top;
	width: 0.45em;
	left: 0;
	transform: rotate(45deg);
	animation: expand 1s ease-in infinite alternate;
    @keyframes expand {
        0% {
            transform: scale(1.0) rotate(45deg);
        }
        100% {
            transform: scale(1.2) rotate(45deg);
        }
    }
`

export default function Title(props){
	return (
		<>
		<TitleWrapper>
			<TitleImage src={Thowonk}/>
			<TitleText>Class of <strong>2020</strong></TitleText>
			<Chevron/>
		</TitleWrapper>
		</>
)
}

