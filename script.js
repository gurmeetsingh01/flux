var upgrade = document.querySelector("#upgrade");
var account = document.querySelector("#account");
var right = document.querySelector("#right");
var closeOverlay = document.querySelector("#closeOverlay"); 
var upgrade1 = document.querySelector("#upgrade1"); 
var playbtn = document.querySelector(".playbutton")
var audioPlayer = document.querySelector("#audio-player")


upgrade.addEventListener("click", function() {
    window.location.href = "subscription.html";
});

account.addEventListener("click", function() {
    right.classList.add("overlayin");
});

closeOverlay.addEventListener("click", function() {
    right.classList.remove("overlayin");
});

upgrade1.addEventListener("click", function() {
    window.location.href = "subscription.html"; 
});

playbtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playbtn.innerHTML = '<i class="ri-pause-circle-fill"></i>'; // Change button text to 'Pause' when playing
    } else {
        audioPlayer.pause();
        playbtn.innerHTML = '<i class="ri-play-circle-fill"></i>'; // Change button text to 'Play' when paused
    }
});