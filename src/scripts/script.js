document.getElementById("mb").addEventListener("click", showhidemenu);


            

function showhidemenu() {
    var g2 = document.getElementById("grow2");
    var g1 = document.getElementById("grow1");
    var x = document.getElementById("mb3");
    if (x.style.display === "none" || x.style.display === "" ) {
        x.style.display = "block";
        g2.style.width = "35px";
        g2.style.transform = 'rotate(45deg) translateY(-10px)';
        g1.style.transform = 'rotate(-45deg) translateY(11px)';
        console.log("Showing Menu");
        g1.style.height = "3px"
        g2.style.height = "3px"
    } else {
        x.style.display = "none";
        console.log("NOT Showing Menu")
        g2.style.width = "20px";
        g2.style.transform = 'rotate(0deg)';
        g1.style.transform = 'rotate(0deg)';
        g1.style.height = "3px"
        g2.style.height = "3px"
    }
}

document.querySelectorAll(".trigger").forEach(item => {
    item.addEventListener('click', event => {
        var g2 = document.getElementById("grow2");
        var g1 = document.getElementById("grow1");
        var x = document.getElementById("mb3");
        if (x.style.display === "block" || x.style.display === "" ) {
            x.style.display = "none";
            console.log("Atag CLose Menu");
            g2.style.transform = 'rotate(0deg)';
            g1.style.transform = 'rotate(0deg)';
            g1.style.transform = 'rotate(0deg)';
            g2.style.width = "20px"
            g1.style.height = "3px"
            g2.style.height = "3px"
            
        } else {
            x.style.display = "none";
            console.log("atag open")
            g2.style.width = "20px"
            g2.style.transform = 'rotate(0deg)';
            g1.style.transform = 'rotate(0deg)';
            g1.style.height = "3px"
            g2.style.height = "3px"
            
        }
    })})
