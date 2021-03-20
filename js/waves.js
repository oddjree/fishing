
console.log('hello?')
function createWaves() {
	let waves = document.createElement('img')
	waves.setAttribute('src', 'images/waves4.gif')
	waves.style.width = '100px'
	waves.style.position = 'absolute'
	waves.style.top = '400px'
	document.body.appendChild(waves)
}