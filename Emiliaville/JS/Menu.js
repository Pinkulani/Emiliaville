function Menu() {
    // Navigation
    const Navigation = document.createElement("div");
    document.body.appendChild(Navigation)
    Navigation.setAttribute("id", "Navigation");

    // Copyright
    const Copyright = document.createElement("p");
    Copyright.innerText = "© Pinkulani 2023-2023";
    document.body.appendChild(Copyright);
    Navigation.append(Copyright);
}
