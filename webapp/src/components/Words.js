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
				Congrats on graduating y'all!
			</p>
			<From>
				the juniors of thöWönk
			</From>
		</Text>
	</Wrapper>
	)
}
