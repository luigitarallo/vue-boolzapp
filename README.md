# Boolzapp

### Milestone 1

- Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
  dall’interlocutore (bianco) assegnando due classi CSS diverse
- Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
  nome e immagine di ogni contatto

### Milestone 2

- Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
  messaggi relativi al contatto attivo all’interno del pannello della conversazione
- Click sul contatto mostra la conversazione del contatto cliccato

### Milestone 3

- Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
  “enter” il testo viene aggiunto al thread sopra, come messaggio verde
- Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
  un “ok” come risposta, che apparirà dopo 1 secondo.

### Milestone 4

- Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
  contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
  “mar” rimangono solo Marco e Martina)

### Milestone 5 - opzionale

- Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
  permette di cancellare il messaggio selezionato
- Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti

## Svoglimento

### Milestone 1

- Replico la grafica in maniera statica, definendo solo HTML e CSS
- Aggiungo una direttiva v-for per stampare la lista contatti

### Milestone 2

- Aggiungo una funzione che al click mi selezioni la chat desiderata
- Aggiungo una direttiva v-for per stampare i messaggi sulla selezione di una chat

### Milestone 3

- Aggiungo una direttiva v-model all'input
- Creo un nuovo oggetto di appoggio dove salvare i dati di input
- Creo una funzione che copi l'oggetto di appoggio, quest'ultimo lo invio all'array di oggetti principale
- Svuoto l'oggetto di appoggio
- Creo una funzione temporalizzata che viene richiamata all'invio di un messaggio da parte dell'utente.
  - La funzione aggiora un oggetto dichiarato precedentemente con dei nuovi valori per il tempo calcolati al suo interno. Viene avviata dopo 1 secondo

### Milestone 4

- Aggiungo un v-model alla barra di ricerca
- Creo una variabile che prenderà gli input di testo dalla barra di ricerca
- Aggiungo un v-show all'elemento li, rendo il nome dell'oggetto minuscolo, con includes controllo che il testo digitato nella barra di ricerca(anche questo reso in minuscolo) corrisponda al valore della proprietà con chiave name

### Milestone 5
