//const Links ["https://www.pinkulani.com", "https://www.pinkulani.com/Social"];
const LinkNames = ["Home", "Social", "Archive", "About", "Donate"];
// Total number of links
const Lenght = LinkNames.length

function Menu() {
    // Navigation
    const Navigation = document.createElement("div");
    document.body.appendChild(Navigation)
    Navigation.setAttribute("id", "Navigation");
    
    // Title
    const Title = document.createElement("h1");
    Title.innerText = "Pinkulani";
    document.body.appendChild(Title);
    Navigation.append(Title);

    // Links
    var X = 0
    while (X < Lenght) {
        console.log(LinkNames[X])
        const Link = document.createElement("a");
        const Break = document.createElement("br");
        Link.setAttribute("href", "https://www.pinkulani.com");
        Link.innerHTML = LinkNames[X];
        document.body.appendChild(Link);
        Navigation.append(Link);
        document.body.appendChild(Break);
        Navigation.append(Break);
        X++
    }
    
    // Copyright
    const Copyright = document.createElement("p");
    Copyright.innerText = "© Pinkulani 2023-2023";
    document.body.appendChild(Copyright);
    Navigation.append(Copyright);
}
