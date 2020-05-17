import React from 'react';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const pics = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/))

export const Photos = [
	{
		src: pics['1_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['2_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['3_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['4_43.jpg'],
		width: 4,
		height: 3
	},
	{
		src: pics['5_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['6_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['7_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['8_43.jpg'],
		width: 4,
		height: 3
	},	
	{
		src: pics['9_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['10_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['11_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['12_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['13_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['14_43.jpg'],
		width: 4,
		height: 3
	},
	{
		src: pics['15_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['16_34.jpg'],
		width: 3,
		height: 4
	}
]
