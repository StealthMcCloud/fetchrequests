//mythology 680
//The Movies 309

fetch("http://jservice.io/api/category?id=680")
    .then(res => res.json())
    .then(data => {
        let titleElement = data.title
        let cluesElement = data.clues[Math.floor(Math.random() * data.clues.length)]
        document.write("Category: " + titleElement, "Question: " + cluesElement.question)
    })

// async function questionTwo(id) {
//     const res = await fetch("http://jservice.io/api/category?id=309" + id)
//     const data = await res.json()

//     const postElementTwo = document.getElementById("questionTwo" + id)
//     postElementTwo.dataset.title = postElementTwo.title
//     postElementTwo.dataset.clue = postElementTwo.clue
//     postElementTwo.querySelector("p").textContent = postElementTwo.title

//     const postBodyTwo = document.createTextNode(postElementTwo.body)
//     postElementTwo.appendChild(postBodyTwo)
//   }

//   questionTwo(0)