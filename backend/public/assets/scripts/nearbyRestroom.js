function nearbyRestroom(location, details, rating) {
    let rootElm = document.createElement("li")
    let locationElm = document.createElement("h4")
    let detailsElm = document.createElement("p")
    let ratingElm = document.createElement("p")
    
    locationElm.innerText = location
    detailsElm.innerText = details
    ratingElm.innerText = `${rating}/5`

    rootElm.classList.add("p-5", "bordered", "rounded", "bg-red-500", "mb-2")

    rootElm.appendChild(locationElm)
    rootElm.appendChild(ratingElm)
    rootElm.appendChild(detailsElm)

    return rootElm
}