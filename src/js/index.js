const body = document.querySelector("body");
const changeMode = document.getElementById("change-mode");
const buttonChange = document.querySelector(".img-button");

changeMode.addEventListener("click", () => {
    const darkModeActive = body.classList.contains("dark-mode");
    
    body.classList.toggle("dark-mode");

    if(darkModeActive) {
        buttonChange.setAttribute("src", "./src/images/light.png");
    } else {
            buttonChange.setAttribute("src", "./src/images/dark.png");
    };
});