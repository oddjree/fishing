function createFish() {
			const img = document.createElement('img')
			img.src = 'fish1.gif'
			img.position = 'absolute'
			img.style.left = '50px'
			img.style.top = '50px'
			img.style.width = '100px'
			return img
		}

		const fish = createFish()

		document.body.appendChild(fish)