let newDiv = document.createElement("div")

fetch("https://jservice.io/api/category?id=680")
    .then(res => res.json())
    .then(data => {
        let titleElement = data.title
        let cluesElement = data.clues[Math.floor(Math.random() * data.clues.length)]

        let message = "Category: " + titleElement + " Question: " + cluesElement.question + "."
        let newMessage = document.createTextNode(message)
        let newDiv = document.createElement("div")
        newDiv.appendChild(newMessage)
        document.body.appendChild(newDiv)
    })

async function questionTwo() {
    const res = await fetch("https://jservice.io/api/category?id=309")
    const data = await res.json()

    let titleElement = data.title
    let cluesElement = data.clues[Math.floor(Math.random() * data.clues.length)]

    let message = "Category: " + titleElement + " Question: " + cluesElement.question + "."
    let newMessage = document.createTextNode(message)
    let newDiv = document.createElement("div")
    newDiv.appendChild(newMessage)
    document.body.appendChild(newDiv)
}
questionTwo()