function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const pics = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/))

function shuffle(k) {
	for(let i = (k.length - 1); i > 0; i--){
		const j = Math.floor(Math.random() * i)
		const temp = k[i]
		k[i] = k[j]
		k[j] = temp
	  }
	return k;
}

export const Photos = shuffle([
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
	},
	{
		src: pics['17_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['18_43.jpg'],
		width: 4,
		height: 3
	},
	{
		src: pics['19_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['20_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['21_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['22_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['23_43.jpg'],
		width: 4,
		height: 3
	},
	{
		src: pics['24_43.jpg'],
		width: 4,
		height: 3
	},
	{
		src: pics['25_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['26_43.jpg'],
		width: 4,
		height: 3
	},
	{
		src: pics['27_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['28_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['29_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['30_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['31_43.jpg'],
		width: 4,
		height: 3
	},
	{
		src: pics['32_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['33_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['34_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['35_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['36_43.jpg'],
		width: 4,
		height: 3
	},
	{
		src: pics['37_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['38_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['39_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['40_23.jpg'],
		width: 2,
		height: 3
	},
	{
		src: pics['41_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['42_43.jpg'],
		width: 4,
		height: 3
	},
	{
		src: pics['43_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['44_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['45_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['46_43.jpg'],
		width: 4,
		height: 3
	},
	{
		src: pics['47_43.jpg'],
		width: 4,
		height: 3
	},
	{
		src: pics['48_34.jpg'],
		width: 3,
		height: 4
	},
	{
		src: pics['49_43.jpg'],
		width: 4,
		height: 3
	},
	{
		src: pics['50_43.jpg'],
		width: 4,
		height: 3
	},
	{
		src: pics['51_43.jpg'],
		width: 4,
		height: 3
	},
	{
		src: pics['52_43.jpg'],
		width: 4,
		height: 3
	},
	{
		src: pics['53_43.jpg'],
		width: 4,
		height: 3
	}
])