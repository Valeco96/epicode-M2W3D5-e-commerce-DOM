// Il tuo compito è creare un sito e-commerce per Smartphones.
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto.
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro

function cambiaTitolo() {
  let heading = document.querySelector("h1");
  heading.textContent = "🎁 Silly gifts for silly people 🎁";
}

function cambiaTitolo2() {
  let heading = document.querySelector("h1");
  heading.textContent = "It's a present!";
  console.log(heading);
}

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

function cambiaTema() {
  let body = document.querySelector("body");
  // body.classList.add("ligther");
  let newBody = body.classList.contains("ligther");

  if (newBody === false) {
    body.classList.add("ligther");
  } else {
    body.classList.remove("ligther");
  }
  console.log(newBody);
}

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio

function cambiaIndirizzo() {
  let address = document.getElementById("indirizzo");
  //console.log(address);
  address.innerHTML = "Amsterdamsestraatweg 55B, 3512TB, Utrecht";
}

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

/*function cambiaFormaLink() {
  let linkShape = document.getElementsByClassName("link");
  linkShape.classList.add("link-shape");
  console.log(linkShape);
}*/

function cambiaFormaLink() {
  let linkShape = document.getElementsByClassName("link");
  //console.log(linkShape);

  for (let link of linkShape) {
    link.classList.add("link-shape");
  }
}

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

function mostraImmagini(indice) {
  let pictures = document.getElementById("nome_" + indice);
  //console.log(pictures);
  let pics = pictures.classList.contains("no-img-display");
  console.log(pics);
  if (pics === false) {
    pictures.classList.add("no-img-display");
  } else {
    pictures.classList.remove("no-img-display");
  }
}

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

function changeColor() {
  let prezzi = document.getElementById("prezzo_0");
  prezzi.style.color =
    "rgb(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + ")";
  console.log(prezzi);
  prezzi.style.color = "rgb (" + randomTotalNumber() + ")";
}

function randomTotalNumber() {
  let x0 = Math.random() * 255 + 1;
  let x1 = Math.random() * 255 + 1;
  let x2 = Math.random() * 255 + 1;
  let numeroTotale = `${x0}, ${x1}, ${x2}`;
  return numeroTotale;
}

function randomNumber() {
  let x = Math.random() * 255 + 1;
  return x;
}
