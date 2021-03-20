

function createFish() {
	const img = document.createElement('img')
	img.src = 'images/fish1.gif'
	img.className = 'fish'
	img.style.position = 'absolute'
	img.style.width = '100px'
	img.style.transform = 'scaleX(-1)'
	const x = window.innerWidth - 2
	const y = Math.random() * window.innerHeight / 1
	img.style.left = `${x}px`
	img.style.top = `1800px`

	img.dataset.dx = Math.random() * 5
	// * number changes speed
	img.dataset.offY = window.innerWidth / 1
	//changes starting position on y axis
	img.dataset.range = Math.random() * 300
	//changes how wide the vertical starting area is
	img.dataset.scale = Math.random() * 0.0001
	// * number changes how much they move up and down

	img.update = function () {
		let x = parseFloat(this.style.left)
		let y = parseFloat(this.style.top)
		let dx = parseFloat(this.dataset.dx)
		let offY = parseFloat(this.dataset.offY)
		let range = parseFloat(this.dataset.range)
		let scale = parseFloat(this.dataset.scale)

		x -= dx
		if (x <= 0) {
			x = window.innerWidth - 2
		}

		y = Math.sin(Date.now() * scale) * range + offY

		img.style.left = `${x}px`
		img.style.top = `${y}px`
	}
	return img
}