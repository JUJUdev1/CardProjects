const button = document.getElementById("button");
const form = document.getElementById("new_project-form");
const cards = document.getElementById("cards");
const formTitle = document.getElementById("project-title");
const formImageUrl = document.getElementById("project-img_link");
const formText = document.getElementById("project-text");

const createNewProjectCard = (formTitle,formText) => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    cards.appendChild(newCard)

    const newCardTitle = document.createElement('h3')
    newCardTitle.classList.add('card_title')
    newCardTitle.innerText = formTitle.value
    newCard.appendChild(newCardTitle)

    const newCardImg = document.createElement('img')
    newCardImg.classList.add('card_img')
    newCardImg.src = formImageUrl.value
    newCard.appendChild(newCardImg)



    const newCardText = document.createElement('p')
    newCardText.classList.add('card_text')
    newCardText.innerText = formText.value
    newCard.appendChild(newCardText)
    
};

function submitForm() {
    button.addEventListener('click' , function(){
        createNewProjectCard(formTitle,formText)
    })
}
submitForm()

