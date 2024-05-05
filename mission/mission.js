const themeSelector = document.getElementById("theme_selector");

function changeTheme() {

const chosenTheme = themeSelector.value;

if (chosenTheme === "dark") {

    document.body.classList.add("dark");
    
    document.getElementById("logo").src = "university_logo_dark_theme.png";

}

else {

    document.body.classList.remove("dark");

    document.getElementById("logo").src = "university_logo.webp";

}
}

themeSelector.addEventListener("change", changeTheme);