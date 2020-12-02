// Your code goes here
// EXAMPLE
// launchButton.addEventListener("click", function (event) {
//     //   console.log("using the eventListener");
// });
const glowUp = document.getElementsByClassName("destination");
const navBar = document.querySelector("main-navigation")


//Bottom Buttons
const signMeUp = document.querySelectorAll(".btn");
console.log(signMeUp)

//Under goes all functions


//Nav function(s)


signMeUp.forEach((par) => {
    par.addEventListener("mouseover", function (event) {
        console.log("Sup")
    });
})




// Array.from(document.links).forEach(function (link) {
//     link.addEventListener("click", function (event) {
//         // console.log(
//         //   `disrupting the default behavior of "${event.target.textContent}"`
//         // );
//         event.preventDefault();
//     });
// });
document.addEventListener("keydown", function (event) {
    // if the event object contains the key 'escape', kill modal
    if (event.key === "Escape") {
        modal.classList.add("off");
    }
});