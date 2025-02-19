// GLI EVENTI DEL BROWSER SONO DELLE ENTITÀ CHE SI SCATENANO A SEGUITO
// DI PRINCIPALMENTE INTERAZIONI CON L'UTENTE.
// accadono NATURALMENTE nel caricamentio delle pagine, delle immagini o a seguito di click del mouse, barre di scorrimento che si muovono, pressioni di tasti sulla tastiera etc.

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
