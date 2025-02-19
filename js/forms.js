// il modo corretto di gestire la raccolta dati di un form è:
// 1) si intercetta l'evento di SUBMIT del form
// 2) a partire dai campi <input />, ne leggerò uno ad uno il valore

// 1)
// recupero in qualche modo un riferimento al tag form nel DOM
const myForm = document.querySelector('form')
// applico a questo form la mia logica allo scatenarsi del suo evento di submit
myForm.addEventListener('submit', (e) => {
  // come logica di default dei form, al loro submit il browser cercherà di AGGIORNARE
  // la pagina! è un comportamento di default di ogni browser che esiste dall'alba
  // dei tempi... dobbiamo "circumnavigare" il problema!
  e.preventDefault() // questa riga è fondamentale per lavorare con i form in JS
  // da questa riga in poi posso eseguire tutta la logica che voglio!
  console.log('INVIO DEL FORM!')
  // recuperiamo ora i valori dei singoli campi
  // per prima cosa, devo cercare dei riferimenti ai campi input/select/textarea

  const firstNameInput = document.getElementById('firstname') // <input id="firstname" />
  const lastNameInput = document.getElementById('lastname') // <input id="lastname" />
  const ageInput = document.getElementById('age')
  const emailInput = document.getElementById('email')
  const childrenInput = document.getElementById('children')
  const bioInput = document.getElementById('bio')

  // ----------
  // oppure potete collezionarli tutti in un array, grazie alla loro classe comune:
  const arrayOfInputs = document.getElementsByClassName('form-element')
  // avreste ottenuto un array così:
  // [ <input id="firstname" />, <input id="lastname" />, <input id="age" /> etc. ]
  // a questo punto i singoli input sarebbero:
  // arrayOfInputs[0] <-- input firstname
  // arrayOfInputs[1] <-- input lastname
  // arrayOfInputs[2] <-- input age
  // arrayOfInputs[3] <-- input email
  // etc.
  // e avrei potuto recuperare i VALORI di questi input con:
  // arrayOfInputs[0].value // "topo"
  // arrayOfInputs[1].value // "gigio"
  // arrayOfInputs[2].value // "66"
  // arrayOfInputs[3].value // "topogigio@rai.tv"
  // etc.
  // ----------

  // in OGNI riferimento ad un input field, posso utilizzare la sua proprietà "value"
  // per estrapolarne il VALORE corrente

  //   console.log(firstNameInput.value)
  //   console.log(lastNameInput.value)
  //   console.log(ageInput.value)
  //   console.log(emailInput.value)
  //   console.log(childrenInput.value)
  //   console.log(bioInput.value)

  // compattiamoli in un unico oggetto:

  const formValue = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    age: ageInput.value,
    email: emailInput.value,
    children: childrenInput.value,
    bio: bioInput.value,
  }

  console.log('ECCO I DATI RECUPERATI', formValue)
})
