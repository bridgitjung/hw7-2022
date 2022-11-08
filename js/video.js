var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay=false;
	video.loop=false;
	console.log("Autoplay is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

var demoButton = document.getElementById("demoButton");

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
})

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
})

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slower");
	video.playbackRate *= 0.9;
	console.log("Speed = " + video.playbackRate);
})

document.querySelector("#faster").addEventListener("click", function() {
	console.log("faster");
	video.playbackRate *= 1.1;
	console.log("Speed = " + video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function() {
	console.log("skip");
	video.currentTime += 10;
	console.log("Current location = " + video.currentTime);
	if (video.currentTime >= video.duration) {
		video.currentTime = 0
	}
})

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {
	video.muted = true;
	console.log("muted")
	console.log(video.volume);
	}

	else {
		video.muted = false;
		console.log("unmuted");
		console.log(video.volume);
	}
})


let volume = document.querySelector("#slider");

volume.addEventListener("change", function(e) {
	console.log("before volume = " + video.volume);
	video.volume = e.currentTarget.value / 100;
	console.log("after volume = " + video.volume);
})

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("vintage");
})

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("original");
})




demoButton.addEventListener("click", onClick);
demoButton.addEventListener("mouseover", onHover);
demoButton.addEventListener("mouseout", onOut);

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

