function Layout() {
    Title = document.createElement("title");
    Title.innerHTML = "Hello";
    document.head.appendChild(Title);
}

// Load automatically
window.addEventListener("load", function() {
    Layout();
});