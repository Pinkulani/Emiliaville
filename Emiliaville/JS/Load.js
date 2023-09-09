// Pointer for Content
let URL = "Hewwo";

// Get Content URL from Storage
function Load(Page) {
    switch (Page) {
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
