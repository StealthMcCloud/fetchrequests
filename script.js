//mythology 680
//The Movies 309

fetch("http://jservice.io/api/category?id=680")
    .then(res => res.json())
    .then(data => {
        let titleElement = data.title
        let cluesElement = data.clues[Math.floor(Math.random() * data.clues.length)]
        document.write("Category: " + titleElement, "Question: " + cluesElement.question)
    })

    async function questionTwo () {
        const res = await fetch("http://jservice.io/api/category?id=309")
        const data = await res.json()

        let titleElement = data.title
        let cluesElement = data.clues[Math.floor(Math.random() * data.clues.length)]
        document.write("Category: " + titleElement, "Question: " + cluesElement.question)
    }
    questionTwo()