// Select Changeable Link Element
let Stylesheet = document.querySelector("#Stylesheet");

function ToggleCSS() {
    // Set Stylesheet to opposite of default/current
    if (Stylesheet.getAttribute("href") == "https://www.pinkulani.com/Stylesheets/Test") {
        Stylesheet.setAttribute("href", "https://www.pinkulani.com/Stylesheets/Test2");
    } else {
        Stylesheet.setAttribute("href", "https://www.pinkulani.com/Stylesheets/Test")
    }
}
