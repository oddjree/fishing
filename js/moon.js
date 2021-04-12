function createMoon() {
	let moon = document.createElement('img')
	moon.setAttribute('src', 'images/moon.png')
	moon.style.width = '450px'
	moon.style.left = '25%'
	moon.style.position = 'relative'
	document.body.appendChild(moon)
}