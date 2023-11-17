// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.





// dichiarazione iniziali di variabili 

let prezzoSconto = '';



// chiedo all utente quanti km vuole fare 
const km = parseInt(prompt('ciao, quanti km vuoi fare ?'));
document.getElementById("kilometri").innerHTML =  km;
// chiedo all utente la sua eta 
const nome = prompt('Quale è il tuo nome ?');
document.getElementById("name").innerHTML =  nome;
// chiedo l'eta del passeggiero 
const eta = parseInt(prompt('quanti anni hai ?'));
// calcolo il prezzo del bigletto 
const prezzoBase = (km * 0.21);
    // sconti 
        if (eta <= 18){
            // se il passeggiero ha un eta compresa tra i 0 18 avra uno sconto del 20 %
            const sconto =((prezzoBase * 20) / 100);
            let prezzoSconto = (prezzoBase - sconto);
            document.getElementById("risultato").innerHTML = prezzoSconto.toFixed(2);

        } else if ( eta >= 65){
            // se il passeggiero ha un eta >65 avra uno sconto del 40%
            const sconto = ((prezzoBase * 40) / 100);
            let prezzoSconto = (prezzoBase - sconto);
            document.getElementById("risultato").innerHTML = prezzoSconto.toFixed(2);

        } else {
            // se il passeggiero ha un eta >18 ma  <65 nessuno sconto 
            let prezzoSconto = prezzoBase;
            document.getElementById("risultato").innerHTML = prezzoSconto.toFixed(2);
        }
      
        



    
    // trasmissione del risultato in massimo due decimali