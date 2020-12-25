const navButton = document.getElementById("nav-button")
const container = document.querySelector(".youtube-container")
const navBar = document.querySelector(".nav-bar")
const liEl = document.querySelectorAll("li")
const searchButton = document.getElementById("search-button")
const searchBar = document.getElementById("search-bar")


navButton.addEventListener("click", (evt) => {
    const windowWidth = window.innerWidth
    if(windowWidth < 801){
        container.classList.remove("active")
        navBar.classList.toggle("active")
    }
    else{
        container.classList.toggle("active")
        navBar.classList.remove("active")
    }
})

liEl.forEach((li) => {
    li.addEventListener("click", () => {
        liEl.forEach(li => {
            li.classList.remove("active")
        })
        li.classList.add("active")
    })
})

searchButton.addEventListener("click", () => {
    if(searchBar.classList.contains("active")){
        console.log("Query Search!")
    }
    else{
        const arrowButton = document.createElement("button")
        const arrowIcon = document.createElement("i")

        arrowIcon.classList.add("fas")
        arrowIcon.classList.add("fa-arrow-left")

        arrowButton.classList.add("arrow-button")
        arrowButton.appendChild(arrowIcon)
        
        searchBar.appendChild(arrowButton)
        searchBar.classList.add("active")

        arrowButton.addEventListener("click", () => {
            searchBar.classList.remove('active')
            arrowIcon.remove()
            arrowButton.remove()
        })
    }

    
})