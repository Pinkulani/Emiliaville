// Adding the Menu Stylesheet
function Stylesheet() {
    Style = document.createElement("link");
    Style.rel = "stylesheet";
    Style.href = "https://pinkulani.com/Stylesheets/Layout"
    document.head.appendChild(Style);
}

// Create Header
function Header() {
    Header = document.createElement("header");
    Header.setAttribute("id", "layout");
    document.body.appendChild(Header);
}

// Create Menu
function Menu() {
    Menu = document.createElement("div");
    Menu.setAttribute("id", "menu");
    Header.appendChild(Menu);
}

// Create Title
function Title() {
    Title = document.createElement("h1");
    Title.setAttribute("id", "menutitle");
    Title.innerHTML = "Pinkulani";
    Menu.appendChild(Title);
}

// Create Links
function Links() {
    Navigation = document.createElement("nav");
    Menu.appendChild(Navigation);
    
    const URLs = ["https://www.pinkulani.com", "https://www.pinkulani.com/Social", "https://www.pinkulani.com/Archive", "https://www.pinkulani.com/About", "https://ko-fi.com/pinkulani"];
    const Links = ["Home", "Social", "Archive", "About", "Donate"];
    const Lenght = Links.length

    // Get total number of Links and place in Menu
    let X = 0;
    while (X < Lenght) {
        const Link = document.createElement("a");
        Link.setAttribute("href", URLs[X]);
        Link.innerHTML = Links[X];
        Navigation.append(Link);
        X++;
    }
    
    LineTop = document.createElement("hr");  
    Header.appendChild(LineTop);
}

// Create Content Section
function Main() {
    Main = document.createElement("main");
    Main.setAttribute("id", "content");
    document.body.appendChild(Main);
}

// Append Footer to Main for proper alignment
function Footer() {
    Footer = document.createElement("footer");
    Footer.setAttribute("id", "footer");
    
    LineBottom = document.createElement("hr");

    Lemon = document.createElement("p");
    Lemon.innerText = "© Pinkulani 2023-2023";
    
    Main.append(Footer);
    Footer.appendChild(LineBottom);
    Footer.append(Lemon);
}

function Layout() {
    Stylesheet();
    Header();
    Menu();
    Title();
    Links();
    Main();
    Footer();
}

// Load automatically
window.addEventListener("load", function() {
    Layout();
});
