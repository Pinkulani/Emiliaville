let Counter = true;

function ToggleCSS () {
    let head = document.querySelector("head");
    
    link = document.createElement("link");
    link.rel = "stylesheet";
    if (Counter == true) {
        link.href = "https://pinkulani.com/Stylesheets/Test.css";
    } else {
        link.href = "https://pinkulani.com/Stylesheets/Test2.css";
    }
    
    head.appendChild(link);
    
    Counter = !Counter;
}
