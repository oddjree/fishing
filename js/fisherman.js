function createFisherman(){
	const fisher = [
		'images/fisherman1update.gif',
		'images/fisherman2update.gif',
		'images/fisherman3update.gif'
	]
	const n = Math.floor(Math.random() * fisher.length)
	let fisherman = document.createElement('img')
	fisherman.setAttribute('src', fisher[n])
	fisherman.id = 'boat'
	fisherman.style.width = '400px'
	fisherman.style.position = 'absolute'
	fisherman.style.top = '150px'
	fisherman.style.left = '25%'

	document.body.appendChild(fisherman)
}