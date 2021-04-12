
console.log('hello?')
function createWaves() {
	let wave = document.createElement('img')
	wave.setAttribute('src', 'images/waves4.gif')
	wave.className = 'waves'
	wave.style.width = '100px'
	wave.style.position = 'absolute'
	wave.style.top = '400px'

	document.body.appendChild(wave)

}
