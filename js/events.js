// GLI EVENTI DEL BROWSER SONO DELLE ENTITÀ CHE SI SCATENANO A SEGUITO
// DI PRINCIPALMENTE INTERAZIONI CON L'UTENTE.
// accadono NATURALMENTE nel caricamentio delle pagine, delle immagini o a seguito di click del mouse, barre di scorrimento che si muovono, pressioni di tasti sulla tastiera etc.

let counter = 2

// es. di eventi:
// - click del mouse
// - puntatore che passa sopra un elemento
// - scroll della pagina
// - campo input che diventa "attivo"
// - form che viene inviato
// etc. etc. -> https://www.w3schools.com/jsref/dom_obj_event.asp

// alcune volte può avere senso cercare di "intercettare" questi eventi, al fine di lanciare le nostre funzioni al click dei pulsanti, al fine di ingrandire un'immagine quando il puntatore ci passa sopra/fuori, ...

// per intercettare un evento di qualsiasi tipo, esiste un metodo "standard"
// bisogna impostare un "event listener" (una "trappola per orsi")

const handleClick = function (e) {
  console.log('BOTTONE 1 CLICCATO', e)
}

// 3 ATTORI IN GIOCO
// a) elemento su cui volete scatenare l'evento (es. bottone)
// b) funzione che volete collegare allo scatenarsi dell'evento (es. handleClick)
// c) l'event listener, la "trappola per orsi" che impostate sull'elemento a

const handleMouseEnter = function (e) {
  console.log('mouse sopra bottone 1', e)
}

const createThirdButton = function () {
  // usando createElement, creiamo un bottone "in memoria"
  const newButton = document.createElement('button') // <button></button>

  // per creare un'etichetta progressiva...
  counter = counter + 1

  newButton.innerText = 'BOTTONE ' + counter

  // ora sto per appendere il bottone alla pagina...
  // ...ma prima, assegniamoci anche un comportamento! cosa succede se lo clicco?
  // assegniamogli un event listener (trappola) via JS:
  newButton.addEventListener('click', (e) => {
    console.log(`BOTTONE ${counter} CLICCATO`, e)
    // variante senza ``
    // console.log('BOTTONE ' + counter + ' CLICCATO')

    // cliccando questo bottone andiamo anche a GENERARE del contenuto nuovo nella pagina!
    createImage()
  })

  // ora il bottone "è pronto"
  // ora dobbiamo appenderlo alla "button-area"...
  // ...prendiamone un riferimento!
  const buttonArea = document.getElementById('button-area')
  // e ora lo appendo:
  buttonArea.appendChild(newButton)
}

const createImage = function () {
  // lo scopo di questa funzione è: creare un'immagine, darle una src
  // darle una classe CSS, fornirle
  // una descrizione, renderla sensibile a un evento e inserirla nel DOM!
  console.log('FUNZIONA!')
  // 1) creare l'immagine
  const newImage = document.createElement('img') // <img />
  // 2) diamole l'src
  newImage.setAttribute('src', 'https://placedog.net/500/500')
  // <img src="https://placedog.net/500/500" />
  // 3) diamole una classe CSS
  newImage.classList.add('img-dog')
  // <img src="https://placedog.net/500/500" class="img-dog" />
  // 4) diamole una descrizione "alt"
  newImage.setAttribute('alt', 'Immagine di cane')
  // <img src="https://placedog.net/500/500" class="img-dog" alt="Immagine di cane" />
  // 5) rendiamola sensibile al passaggio del mouse
  newImage.addEventListener('mouseenter', () => {
    console.log('mouse sopra il doggo')
    // ingrandiamo leggermente l'immagine!
    newImage.classList.add('bigger')
  })
  newImage.addEventListener('mouseleave', () => {
    // quando il cursore esce...
    newImage.classList.remove('bigger')
  })
  // 6) pronta! dobbiamo appenderla ora nella pagina
  const container = document.getElementById('img-container')
  container.appendChild(newImage)
}

// creiamo ora il terzo bottone automaticamente all'avvio della pagina
createThirdButton()
