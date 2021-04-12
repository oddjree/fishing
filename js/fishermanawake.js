function createFishermanAwake(){
	const fisher = [
		'images/fisherman1awake.png',
		'images/fisherman2awake.png',
		'images/fisherman3awake.png'
	]
	const n = Math.floor(Math.random() * fisher.length)
	let fishermanA = document.createElement('img')
	fishermanA.setAttribute('src', fisher[n])
	fishermanA.id = 'boat'
	fishermanA.style.width = '450px'
	fishermanA.style.position = 'absolute'
	fishermanA.style.top = '150px'
	fishermanA.style.left = '25%'

	document.body.appendChild(fishermanA)
}