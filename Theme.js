function SetLightTheme() { 
    var Body = document.body; 
    Body.classList.remove("text-bg-dark")
    Body.classList.add("text-bg-light"); 
    var connect_btn = document.getElementById("btn1")
    connect_btn.classList.remove("border-white"); 
    connect_btn.classList.add("border-black"); 
}

function SetDarkTheme() { 
    var Body = document.body; 
    Body.classList.remove("text-bg-light")
    Body.classList.add("text-bg-dark"); 
}

document.getElementById('lt').addEventListener("click" , SetLightTheme) ;
document.getElementById('dt').addEventListener("click" , SetDarkTheme) ; 