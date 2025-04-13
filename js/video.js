var video;

window.addEventListener("load", function () {
    console.log("Good job opening the window");
	video = document.getElementById("player1");
    video.autoplay = false;
	console.log("Auto play is set to false")
    video.loop = false;
	console.log("Loop is set to false")
    video.load();
	video.poster = "assets/thumbnail.jpg";
});

// Playing the video 
document.querySelector("#play").addEventListener("click", function() {
   	console.log("Play Video");
   	video.play();

	// Here, getting the current volume from the slider
	let sliderValue = document.querySelector("#slider").value;
	video.volume = sliderValue / 100;
	document.querySelector("#volume").innerHTML = sliderValue + "%";
    });


// Pausing the video 
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
		video.pause();
	 });

// Slowing the video down by 10% e
document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate *= 0.9;
	console.log("New speed is" + video.playbackRate);
});

// Speeding the video up by 10% (or the inverse of 0.9x)
document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate *= 1/0.9;
	console.log("New speed is" + video.playbackRate);
});

// Skip forward 10 seconds
document.querySelector("#skip").addEventListener("click", function () {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log("Current time is" + video.currentTime);
});

// Mute / unmute the video and update the text in the button
document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted) {
		video.muted = false;
		this.innerHTML = "Mute";
		console.log("Video is muted");
	} else {
		video.muted = true;
		this.innerHTML = "Unmute";
		console.log("Video is unmuted.")
	}
});

// Change the volume based on the slider and update the volume information.

document.querySelector("#slider").addEventListener("input", function () {
    video.volume = this.value / 100;

    document.querySelector("#volume").innerHTML = this.value + "%";
});

// Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function () {
    video.classList.add("oldSchool");
});

// Remove the oldSchool class from the video.
document.querySelector("#orig").addEventListener("click", function () {
    video.classList.remove("oldSchool");
});

// Bonus attempt: show the video runtime 


// Code written with reference to the W3 HTML Audio/Video DOM Reference guide





