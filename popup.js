let popupBTNs = document.querySelectorAll("button.popup-btn")

if (popupBTNs) {
    var popupWrapper = document.createElement("div")
    popupWrapper.className = "popup-wrapper"
    document.body.prepend(popupWrapper)
}

popupBTNs.forEach(popupbtn => {
    popupbtn.addEventListener("click", e => {
 
        let popup = popupbtn.nextElementSibling
        popup.classList.add("show")
        popupWrapper.classList.add("show")
    
        let popupCloseFunc = e => {
            popup.classList.remove("show")
            popupWrapper.classList.remove("show")
        }
        let popupcloses = document.querySelectorAll(".popup-close")
        popupcloses.forEach(popupclose => {
        popupclose.addEventListener("click", popupCloseFunc)
        })
        popupWrapper.addEventListener("click", popupCloseFunc)
    })
    
})
