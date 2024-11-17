var upgrade = document.querySelector("#upgrade");
var account = document.querySelector("#account");
var right = document.querySelector("#right");
var closeOverlay = document.querySelector("#closeOverlay"); 
var upgrade1 = document.querySelector("#upgrade1"); 
var randomvideo = document.querySelector(".randomvideo");

const data = [
    {song:"Starboy",img:"images/starboy.jpg"}, // Only keep the image path, no need to include the <img> tag here
    {song:"Starboy",img:"images/toomanynights.jpg"}, // Only keep the image path, no need to include the <img> tag here
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


        document.addEventListener('DOMContentLoaded', function() {
            const songs = {
                starboy: document.getElementById('audio-player-starboy'),
                toomanynights: document.getElementById('audio-player-toomanynights'),
                blindinglights: document.getElementById('audio-player-blindinglights'),
                highestintheroom: document.getElementById('audio-player-highestintheroom')
            };

            const playerImage = document.getElementById('playerimage');

            document.querySelectorAll('.playbutton').forEach(button => {
                button.addEventListener('click', function() {
                    const songId = this.getAttribute('data-song');
                    const currentPlayer = songs[songId];
                    const imageSrc = this.getAttribute('data-image');

                    // Pause all other songs
                    Object.keys(songs).forEach(key => {
                        if (key !== songId) {
                            songs[key].pause();
                            songs[key].currentTime = 0;
                            document.querySelector(`.playbutton[data-song="${key}"]`).innerHTML = '<i class="ri-play-circle-fill"></i>';
                        }
                    });
                    randomvideo.src="videos/videoplayback.mp4";
                    // Toggle play/pause for the selected song
                    if (currentPlayer.paused) {
                        currentPlayer.play();
                        this.innerHTML = '<i class="ri-pause-circle-fill"></i>';
                        playerImage.src = imageSrc;
                    } else {
                        currentPlayer.pause();
                        currentPlayer.currentTime = 0;
                        this.innerHTML = '<i class="ri-play-circle-fill"></i>';
                    }
                });
            });
        });