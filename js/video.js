var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay=false;
	video.loop=false;
	console.log("Autoplay is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
})

// var demoButton = document.getElementById("demoButton");

function onClick() {
	document.getElementById("status").innerHTML = "clicked"
}

function onHover() {
	document.getElementById("status").innerHTML = "moused over"
}

function onOut() {
	document.getElementById("status").innerHTML = "moused out"
}

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";
})

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
})

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate);
})

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate /= 0.9;
	console.log("Speed is " + video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime += 10;
	console.log("Video current time is " + video.currentTime);
	if (video.currentTime >= video.duration) {
		video.currentTime = 0
	}
})

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {
	video.muted = true;
	console.log("Mute")
	document.getElementById("mute").innerHTML = document.getElementById("mute").innerHTML.replace('Mute', 'Unmute');
	}

	else {
		video.muted = false;
		console.log("Unmute");
		document.getElementById("mute").innerHTML = document.getElementById("mute").innerHTML.replace('Unmute', 'Mute');
	}
})


let volume = document.querySelector("#slider");

volume.addEventListener("change", function(e) {
	video.volume = e.currentTarget.value / 100;
	console.log("The current value is " + video.volume);
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";
})

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Vintage");
})

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Original");
})

// demoButton.addEventListener("click", onClick);
// demoButton.addEventListener("mouseover", onHover);
// demoButton.addEventListener("mouseout", onOut);

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

