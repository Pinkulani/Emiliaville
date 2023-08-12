let Counter = true;

function ToggleTheme() {
    let borders = document.querySelectorAll(".border"); // Don't forget the . (Justin)
    if (Counter == true) {
        borders.forEach((element) => {
            element.style.backgroundColor = "Black";
        });
    } else {
        borders.forEach((element) => {
            element.style.backgroundColor = "White";
        });
            
    }

    let p = document.querySelectorAll("p");
    p.forEach((element) => {
        element.classList.toggle("divtheme");
    });
    
    let div = document.querySelectorAll("body div");
    div.forEach((element) => {
        element.classList.toggle("divtheme");
    });      
    
    let body = document.body;
    body.classList.toggle("theme");
    
    let footer = document.querySelector("footer");
    footer.classList.toggle("theme");
    
    Counter = !Counter;
}
