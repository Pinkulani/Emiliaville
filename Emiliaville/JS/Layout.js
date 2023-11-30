function Layout() {
    // Create Header
    Header = document.createElement("header");
    Header.setAttribute("id", "layout");
    document.body.appendChild(Header);

    // Create Menu
    Menu = document.createElement("div");
    Menu.setAttribute("id", "menu");
    Header.appendChild(Menu);

    // Create Title
    Title = document.createElement("h1");
    Title.setAttribute("id", "menutitle");
    Title.innerHTML = "Pinkulani";
    Menu.appendChild(Title);

    // Create Links
    Navigation = document.createElement("nav");
    Menu.appendChild(Navigation);
    
    const URLs = ["https://www.pinkulani.com", "https://www.pinkulani.com/Social", "https://www.pinkulani.com/Tools", "https://www.pinkulani.com/Archive", "https://ko-fi.com/pinkulani"];
    const Links = ["Home", "Social", "Tools", "Archive", "Donate"];
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

    // Create Content Section
    Main = document.createElement("main");
    Main.setAttribute("id", "content");
    document.body.appendChild(Main);

    // Page Content
    Page = document.createElement("div");
    Page.setAttribute("id", "page");
    Main.appendChild(Page);

    // Append Footer to Main for proper alignment
    Footer = document.createElement("footer");
    Footer.setAttribute("id", "footer");
    
    LineBottom = document.createElement("hr");

    Lemon = document.createElement("p");
    Lemon.innerText = "© Pinkulani 2023-2023";
    
    Main.append(Footer);
    Footer.appendChild(LineBottom);
    Footer.append(Lemon);
}

// Load automatically
window.addEventListener("load", function() {
    Layout();
});
