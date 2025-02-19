// per prima cosa mettiamo l'anno nel footer
const footerSpan = document.getElementById('current-year')
const year = new Date().getFullYear() // 2025
footerSpan.innerText = year

// devo intervenire sull'evento di SUBMIT del form, in modo da poter
// raccogliere le informazioni inserite ed eventualmente creare una "card"
// con i dati raccolti nella sezione centrale

const pageForm = document.getElementById('new-contact-form')
pageForm.addEventListener('submit', (e) => {
  // !!!
  e.preventDefault() // FERMO IL COMPORTAMENTO DI DEFAULT DEL BROWSER
  console.log('RACCOLGO I DATI E CREO LA CARD')
  // per prima cosa raccolgo i dati inseriti nei 3 campi del form
  // i 3 campi
  const firstnameInput = document.getElementById('firstname')
  const lastnameInput = document.getElementById('lastname')
  const phoneInput = document.getElementById('phone')

  const contact = {
    firstName: firstnameInput.value, // "topo"
    lastName: lastnameInput.value, // "gigio"
    phone: phoneInput.value, // "312312312"
  }

  console.log('CONTACT', contact)

  // e ora... creare una porzione di contenuto e appenderla nel DOM
  // 1) creo un div vuoto
  const card = document.createElement('div') // <div></div>
  // 2) lo abbellisco: gli assegno la classe CSS "contact-card"
  card.classList.add('contact-card') // <div class="contact-card"></div>
  // 3) ora RIEMPIO il mio div vuoto con due paragrafi e un bottone
  card.innerHTML = `
    <p>${contact.firstName} ${contact.lastName}</p>
    <p>${contact.phone}</p>
    <button onclick="deleteCard(event)">ELIMINA</button>
  `
  //   <div class="contact-card">
  //     <p>Topo Gigio</p>
  //     <p>123123</p>
  //     <button>ELIMINA</button>
  //   </div>

  // 4) ora appendo la card nel DOM
  const cardContainer = document.getElementById('saved-contacts')
  cardContainer.appendChild(card)

  // SVUOTIAMO IL FORM A CARD CREATA
  firstnameInput.value = ''
  lastnameInput.value = ''
  phoneInput.value = ''

  // rendiamo funzionanti quei bottoni elimina
  // ogni volta che creo una card, vado a ricercare TUTTI i bottoni di TUTTE le card
  //   const allTheDeleteButtons = document.querySelectorAll('.contact-card button')
  //   console.log('ALLTHEDELETEBUTTONS', allTheDeleteButtons)
})

const deleteCard = function (e) {
  console.log('ELIMINA', e.target.parentElement)
  // e.target è il bottone
  // e.target.parentElement è la card
  const pressedButton = e.target
  const cardToRemove = pressedButton.parentElement // il contenitore del bottone
  cardToRemove.remove() // elimino la card
}
