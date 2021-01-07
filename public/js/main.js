//exo 1 


let nombre = parseInt(prompt("entre ton nombre")); 

let reponse = (nombre%2==0); 

switch(reponse){
    case true:
        console.log('Il est pair');
    break; 

    case false:
        console.log('il est impair');
    break;

    default: 
        console.log('eee');
    break;
}




//exo 2 

//let mois = ["janvier","février","mars","avril","mais","juin","juillet","aout","septembre","octobre","novembre","decembre"];


let qmois = parseInt(prompt("Entre le numero du mois (1-12) ?")); 


switch(qmois){
    case 1:
        console.log("janvier");
    break; 
    case 2:
        console.log("février");
    break; 
    case 3:
        console.log("mars");
    break; 
    case 4:
        console.log("avril");
    break;
    case 5:
        console.log("mais");
    break; 
    case 6:
        console.log("juin");
    break; 
    case 7:
        console.log("juillet");
    break; 
    case 8:
        console.log("aout");
    break; 
    case 9:
        console.log("septembre");
    break; 
    case 10:
        console.log("octobre");
    break; 
    case 11:
        console.log("novembre");
    break; 
    case 12:
        console.log("decembre");
    break; 
    default:
        console.log('inconnu');
    break;
}