
console.log('hello?')
function createWaves() {
	const image = document.createElement('img')
	image.src = 'images/waves4.gif'
	image.className = 'wave'
	image.style.width = '100px'
	image.style.position = 'absolute'
	image.style.top = '400px'

	return image
}

for (let i = 0; i < 10) {
      const wave = createWaves()
      document.body.appendChild(wave)
    }