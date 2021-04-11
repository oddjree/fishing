
function createFish() {
	const newFish = [
	'images/fish1.gif', 
	'images/fish2.gif', 
	'images/fish3.gif',
	'images/fish4.gif']
	const img = document.createElement('img')
	const n = Math.floor(Math.random() * newFish.length)
	img.src = newFish[n]
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

	img.addEventListener('click', function () {
		img.dataset.clicked = true
	})

	img.update = function () {
		let x = parseFloat(this.style.left)
		let y = parseFloat(this.style.top)
		let dx = parseFloat(this.dataset.dx)
		let offY = parseFloat(this.dataset.offY)
		let range = parseFloat(this.dataset.range)
		let scale = parseFloat(this.dataset.scale)

		

		if (img.dataset.clicked) {
			const boat = document.querySelector('#boat')
			const positionY = boat.offsetTop + boat.offsetHeight
			//find position of boat y axis
			const positionX = boat.offsetLeft
			//find position of boat x axis (also can use offsetWidth)
			y -= 10
			//also y = y - 10, 10 is the amount of pixels that the fish is moving at once
			//bigger number= faster, smaller number = slower
			if (y <= positionY) {
				//is y less than or equal to the position of the boat?
				y = positionY
				//yes, i am going to stop here 
			}
			if (x < positionX) {
				//x is different than y. since the boat is in the middle I have to know whether to add or subtract
				//pixels to get it to position x
				x += 10
				//x = x+10 , moves it from the left side to the center
			} else {
				x -= 10
				//x = x - 10 moves it from the right to the center
			}
			const r = 270
			img.style.transform = `rotate(${r}deg)`
			//this rotates the fish 

			//this is what's fucking up the code rn:
			//setTimeout(function(){
			//	if (y <= positionY) {
			//		y = window.innerWidth - 2
			//	}, 3000
			//})
			//im trying to make the fish dissappear

		} else {
			y = Math.sin(Date.now() * scale) * range + offY

			x -= dx
			if (x <= 0) {
				x = window.innerWidth - 2
			}
		}


		img.style.left = `${x}px`
		img.style.top = `${y}px`
	}
	return img
}