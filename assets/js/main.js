/* Traccia
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
Consigli
Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno?
Da quanti minuti è composta un'ora?
Da quanti secondi è composto un minuto?
Da quanti millisecondi è composto un secondo?
Quanti millisecondi mi separano da domani alle 9:30?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi?
 */


const countdownEl = document.querySelector('.count-down');
const targhetTime = new Date(2023, 8, 6, 9, 30, 0, 0); //(year, monthIndex, day, hours, minutes, seconds, milliseconds)

// genero il tempo rimanente in millisecondi
const secondsMs = 1000;
const minuteMs = secondsMs * 60 ;
const hourMs = minuteMs * 60;
const dayMs = hourMs * 24;

const clock = setInterval(function(){

    // ottengo la data attuale in millisecondi e poi faccio la differenza
    const realTime = new Date().getTime();
    const milliSecTime = Number(targhetTime - realTime);

    if(milliSecTime > 0) {

        // calcolo la differernza e la divido a seconda di quello che mi occorre
        let secondsRemain = Math.floor( (milliSecTime % minuteMs) / secondsMs );
        let minuteRemain = Math.floor((milliSecTime % hourMs) / minuteMs );
        let hourRemain = Math.floor((milliSecTime % dayMs) / hourMs );
        let dayRemain = Math.floor(milliSecTime / dayMs);
        
        //stampo in pagina il conto alla rovescia
        countdownEl.innerHTML = `<h1>Alla lezione del ${targhetTime.toDateString()}</h1><h2>Mancano ${dayRemain} giorni, ${hourRemain} ore, ${minuteRemain} minuti e ${secondsRemain} secondi.</h2>`;
    } else {
        //quando scatta il timer fermo il loop e stampo in pagina
        clearInterval(clock);
        countdownEl.innerHTML = '<h1>Inizia la lezione!</h1>'
    };
}, 1000);


