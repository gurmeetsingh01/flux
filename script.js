var upgrade = document.querySelector("#upgrade");
var account = document.querySelector("#account");
var right = document.querySelector("#right");
var closeOverlay = document.querySelector("#closeOverlay"); 
var upgrade1 = document.querySelector("#upgrade1"); 
var playbtn = document.querySelector(".playbutton")
var audioPlayer = document.querySelector("#audio-player")
var playerimage = document.querySelector("#playerimage")

const data = [
    {song:"Starboy",img:"images/starboy.jpg"}, // Only keep the image path, no need to include the <img> tag here
];

// Open subscription page
upgrade.addEventListener("click", function() {
    window.location.href = "subscription.html";
});

// Open account overlay
account.addEventListener("click", function() {
    right.classList.add("overlayin");
});

// Close account overlay
closeOverlay.addEventListener("click", function() {
    right.classList.remove("overlayin");
});

// Open subscription page from another button
upgrade1.addEventListener("click", function() {
    window.location.href = "subscription.html"; 
});

// Play or pause audio and update UI
playbtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playerimage.src = data[0].img; // Set the image src when playing
        playbtn.innerHTML = '<i class="ri-pause-circle-fill"></i>'; // Change button text to 'Pause' when playing
    } else {
        audioPlayer.pause();
        playbtn.innerHTML = '<i class="ri-play-circle-fill"></i>'; // Change button text to 'Play' when paused
    }
});
