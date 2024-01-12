const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-bar"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

    toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
    });
    searchBtn.addEventListener("click", () =>{
        sidebar.classList.remove("close");
    });

    modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
            modeText.innerText = "Tryb dzienny"
        }else{
            modeText.innerText = "Tryb nocny"
        }
    });
