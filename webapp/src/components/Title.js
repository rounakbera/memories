import React from 'react'
import styled from 'styled-components'
import Thowonk from '../thowonk.png'


const TitleWrapper = styled.div`
	width: 100vw;
	display: flex;
	align-items: center;
	overflow-y:hidden;
	justify-content:center;


	@media only screen and (max-width: 600px) {
		display:flex;
		flex-direction:column;
		align-items:center;
		justify-content:center;
		width:100vw;
		padding-right:1vw;
		padding-left:1vw;
	}

	opacity: .85;
	animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 4s;
	
    @keyframes fadeInOpacity {
        0% {
			opacity: 0;
		}
		100% {
			opacity: .85;
		}
`

const TitleImage = styled.img`
	width: 10vmax;
	height: 10vmax;
	margin: 1vmax;
	@media only screen and (max-width: 600px) {
		width: 15vmax;
		height: 15vmax;
	}

`

const TitleText = styled.div`
	width: 25vmax;
	margin: 1vmax;
	font-size: 3rem;
	font-family: 'Arvo';
	color: #B9D9EB;

	@media only screen and (max-width: 600px) {
		width:70vw;
		text-align:center;
	}
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
			<TitleImage className="title-image" src={Thowonk}/>
			<TitleText className="title-text">Class of <strong>2020</strong></TitleText>
			<Chevron/>
		</TitleWrapper>
		</>
)
}

