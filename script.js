var upgrade = document.querySelector("#upgrade");
var account = document.querySelector("#account");
var right = document.querySelector("#right");
var closeOverlay = document.querySelector("#closeOverlay"); 
var upgrade1 = document.querySelector("#upgrade1"); 

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
