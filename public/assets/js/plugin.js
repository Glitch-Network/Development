const plugins = localStorage.getItem("axiom_plugins")

// Setup plugin API to make it easier to make plugins

window.axiomAPI = {
    addSidebarIcon: function(material_symbol, url, use_proxy) {
        if (document.getElementById("plugin-area")){
            const pluginArea = document.getElementById("plugin-area")
            const newPlugin = document.createElement("div")
            newPlugin.classList.add("sidebar-item")
            newPlugin.onclick = () => open_page(url, use_proxy)
            newPlugin.innerHTML = `<span class="material-symbols-outlined">${material_symbol}</span>`
            pluginArea.appendChild(newPlugin)
            return 0
        }
        else {
            return 1
        }
    },
    addTab: function(name, url) {
        try{
           createTab(name, url)
           return 0
        }
        catch(e){
            return 1
        }
    },
    addTheme: function(themeKey, themeData) {
    try {
        if (!themeKey || typeof themeKey !== 'string') {
            console.error('Theme key must be a non-empty string');
            return 1;
        }
        
        if (!themeData || typeof themeData !== 'object') {
            console.error('Theme data must be an object');
            return 1;
        }
        
        // Ensure theme has a name
        if (!themeData.name) {
            themeData.name = themeKey.charAt(0).toUpperCase() + themeKey.slice(1);
        }
        
        window.themeManager.addTheme(themeKey, themeData);
        return 0;
    } catch (e) {
        console.error('Failed to add theme:', e);
        return 1;
    }
}
}

if (plugins) {
    plugins.split(",").forEach(plugin => {
        if (plugin) {
            const script = document.createElement('script');
            script.src = plugin;
            document.body.appendChild(script);
            console.log("Loaded " + plugin);
        }
    });
}
