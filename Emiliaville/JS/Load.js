function Load(Page) {
    switch (Page) {
        case Main:
            console.log("Main");
            Test = document.createElement("p");
            Test.innerHTML = "AAA";
            document.getElementById("page").appendChild(Test);
            break;
        
        case Social:
            console.log("Social");
            break;
        
        default:
            console.log("Default");
            break;
    }
}
