function createFisherman(){
	const fisher = [
		'images/fisherman1awake.png',
		'images/fisherman2awake.png',
		'images/fisherman3awake.png'
	]
	const n = Math.floor(Math.random() * fisher.length)
	let fisherman = document.createElement('img')
	fisherman.setAttribute('src', fisher[n])
	fisherman.id = 'boat'
	fisherman.style.width = '450px'
	fisherman.style.position = 'absolute'
	fisherman.style.top = '150px'
	fisherman.style.left = '25%'

	document.body.appendChild(fisherman)
}