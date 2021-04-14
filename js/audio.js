function music(){
	//<audio></audio>
	let intro = document.createElement("audio")
	//<audio src="audio/seashanty2.mp3"></audio>
	//intro.setAttribute('src', 'audio/seashanty2.mp3')
	document.body.appendChild(intro)
	intro.play()
}