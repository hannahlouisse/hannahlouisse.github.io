const submitButton = document.getElementById("submit-button")

//function to be executed when submit button is clicked
const submit = () => {
    //retrieve values of all input fields
    inputName = document.getElementById("food-name").value
    inputDescription = document.getElementById("description").value
    inputURL = document.getElementById("image-url").value
    inputRank = document.getElementById("rank").value

    //reset values of all input fields
    document.getElementById("food-name").value = ""
    document.getElementById("description").value = ""
    document.getElementById("image-url").value = ""
    document.getElementById("rank").value = ""

    //check validity of all input values
    if ((inputName != null) && (inputDescription != null) && (inputURL != null) && (inputRank != null)) {
        if ((inputName != "") && (inputDescription != "") && (inputURL != "") && (inputRank != "")) {
            if (!isNaN(inputRank)) {
                //create elements to be displayed in the food card
                const image = document.createElement("img")
                image.src = inputURL
                image.alt = "food-image"
                image.width = "545"
                image.className = "image"

                const name = document.createElement("p")
                name.innerHTML = "<b>Food Name: </b>" + inputName

                const description = document.createElement("p")
                description.innerHTML = "<b>Description: </b>" + inputDescription

                const rank = document.createElement("p")
                rank.innerHTML = "<b>Rank: </b>" + inputRank

                const deleteButton = document.createElement("button")
                deleteButton.innerHTML = "Delete"
                deleteButton.id = "delete-button"
                deleteButton.addEventListener("click", function () {
                    this.parentNode.remove()    //when delete button is clicked, remove the food card where it is contained
                })

                //add all elements to the food card
                const newCard = document.createElement("div")
                newCard.className = "food-box"
                newCard.rank = inputRank
                newCard.appendChild(image)
                newCard.appendChild(name)
                newCard.appendChild(description)
                newCard.appendChild(rank)
                newCard.appendChild(deleteButton)

                //insert food card according to its rank
                numOfCards = document.body.childElementCount - 2    //minus 2 to exclude the <div> and <script> children in index.html
                if (numOfCards == 0) {      //if no existing cards yet, insert card at the end
                    document.body.appendChild(newCard)
                } else {    //if there are existing cards, iterate through the cards and insert at the right position
                    var currentCard
                    for (i = 2; i < document.body.childElementCount; i++) {
                        currentCard = document.body.children[i]
                        if (inputRank < currentCard.rank) {
                            document.body.insertBefore(newCard, currentCard)
                            return 0
                        }
                    }
                    document.body.appendChild(newCard)
                }
            } else {
                console.log("Rank is not a number.")
            }
        } else {
            console.log("Not all fields are filled.")
        }
    } else {
        console.log("Not all fields are filled.")
    }
}

submitButton.addEventListener("click", submit)