createFisherman()
createWaves()

function setUp() {
	let splash = document.querySelector('#splash')
	splash.style.display = 'none'
	for (let i = 0; i < 4; i++) {
		setTimeout(function(){
			const fish = createFish()
			document.body.appendChild(fish)
		}, 3000 * i)
	}
	music()
	draw()
}


function draw() {
	requestAnimationFrame(draw)

	const fishes = document.querySelectorAll('.fish')
	fishes.forEach(img => img.update())
}


let startGame = document.querySelector('#startGame')
startGame.addEventListener('click', setUp)
startGame.style.top = '100px'

