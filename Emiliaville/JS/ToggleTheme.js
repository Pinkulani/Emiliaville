function ToggleTheme() {
    let body = document.body;
    let div = document.querySelectorAll("body div");
    let footer = document.querySelector("footer");
    let p = document.querySelectorAll("p");
    p.forEach((element) => {
        element.classList.toggle("divtheme");
    });
    div.forEach((element) => {
        element.classList.toggle("divtheme");
    });      
    body.classList.toggle("theme");
    footer.classList.toggle("theme");
}
