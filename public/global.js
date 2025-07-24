

scripts = ["theme.js"]


for (let i = 0; i < scripts.length; i++) {
    let script = document.createElement('script');
    script.src = scripts[i];
    document.body.appendChild(script);
    console.log("Loaded " + scripts[i]);
}

console.log("Global scripts loaded.");

currentTheme = localStorage.getItem("theme")
setInterval(function(){
    // reload if theme cheanged
    if (currentTheme != localStorage.getItem("theme")) {
        location.reload();
    }
},500)