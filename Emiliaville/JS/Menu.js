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
    const Home = document.createElement("a");
    Home.setAttribute("href", "https://www.pinkulani.com");
    Home.innerHTML = "Home";
    document.body.appendChild(Home);
    Navigation.append(Home);

    const Social = document.createElement("a");
    Social.setAttribute("href", "https://www.pinkulani.com/Social");
    Social.innerHTML = "Social";
    document.body.appendChild(Social);
    Navigation.append(Social);

    const Archive = document.createElement("a");
    Archive.setAttribute("href", "https://www.pinkulani.com/Archive");
    Archive.innerHTML = "Archive";
    document.body.appendChild(Archive);
    Navigation.append(Archive);

    const About = document.createElement("a");
    About.setAttribute("href", "https://www.pinkulani.com/About");
    About.innerHTML = "About";
    document.body.appendChild(About);
    Navigation.append(About);

    const Donate = document.createElement("a");
    Donate.setAttribute("href", "https://ko-fi.com/pinkulani");
    Donate.innerHTML = "Donate";
    document.body.appendChild(Donate);
    Navigation.append(Donate);

    // Copyright
    const Copyright = document.createElement("p");
    Copyright.innerText = "© Pinkulani 2023-2023";
    document.body.appendChild(Copyright);
    Navigation.append(Copyright);
}
