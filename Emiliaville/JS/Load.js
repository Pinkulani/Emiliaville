// Pointer for Content
let URL = "Hewwo";

// Get Content URL from Storage
function Load(Page) {
    switch (Page) {
        // Developer Page
        case "Dev":
            URL = "https://www.pinkulani.com/Content/Dev"
            break;

        // Navigation Content
        case "Home":
            URL = "https://www.pinkulani.com/Content/Home"
            break;
        
        case "Social":
            URL = "https://www.pinkulani.com/Content/Social"
            break;
        
        case "Archive":
            URL = "https://www.pinkulani.com/Content/Archive"
            break;

        // Archive Topics
        case "Computer Science":
            URL = "https://www.pinkulani.com/Content/Computer Science"
            break;
        
        case "Mathematics":
            URL = "https://www.pinkulani.com/Content/Mathematics"
            break;

        case "Writing":
            URL = "https://www.pinkulani.com/Content/Writing"
            break;

        case "Personal Care":
            URL = "https://www.pinkulani.com/Content/Personal Care"
            break;
        
        case "Random":
            URL = "https://www.pinkulani.com/Content/Random"
            break;

        default:
            console.log("Default / Error");
            break;
    }

    Loader(URL);
}

// Append Content to Main
function Loader(URL) {
    fetch(URL)
        .then(Response => Response.text())
        .then(text => document.getElementById("page").innerHTML = text)
}
