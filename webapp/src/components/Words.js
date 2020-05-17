import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
	font-family:'Open Sans';
	font-size:'1.5rem';
	color: #B9D9EB;
`

const Wrapper = styled.div`
	display: flex;
	align-items: center;	
	width: 36vmax;
	padding: 3vmax;
	margin: 5vmax;
`

const From = styled.div`
	width: 100%;
	text-align:right;
	font-weight: 700;
`

export default function Words(props){

	return(
	<Wrapper>
		<Text>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum, nunc eu tincidunt suscipit, est odio rhoncus magna, id accumsan arcu leo eu tortor. Donec non ex vel odio convallis finibus eget id velit. Donec faucibus risus sit amet nisi tincidunt, non lobortis tellus mollis. Nam ut felis ac ante egestas egestas. Duis et enim vel quam placerat consequat. Donec bibendum feugiat dictum. Donec et sem libero. Integer a ipsum nibh. Aliquam placerat purus nulla, ac efficitur risus eleifend non. Praesent ac condimentum tellus. Quisque cursus lectus vel ultricies pharetra. Cras at justo porttitor, malesuada tellus eget, tincidunt nunc. Aenean vel egestas urna. Proin ut dolor ac magna porta mollis.
			</p>
			<From>
				Rounak, Matt
			</From>
		</Text>
	</Wrapper>
	)
}
