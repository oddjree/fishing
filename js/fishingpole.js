function createFishingPole() {
	let fishingPole = document.createElement('img')
	fishingPole.setAttribute('src', 'images/fishingpole.png')
	fishingPole.style.width = '225px'
	fishingPole.style.left = '18%'
	fishingPole.style.top = '125px'
	fishingPole.style.position = 'absolute'
	document.body.appendChild(fishingPole)
}