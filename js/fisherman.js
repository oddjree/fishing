function createFisherman(){
	let fisherman = document.createElement('img')
	fisherman.setAttribute('src', 'images/fisherman.gif')
	fisherman.style.width = '500px'
	fisherman.style.display = 'block'
	fisherman.style.marginLeft = 'auto'
	fisherman.style.marginRight = 'auto'
	document.body.appendChild(fisherman)
}