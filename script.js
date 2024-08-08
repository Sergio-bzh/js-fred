const justPrice = 57;
/* Avec un joueur et 3 possibilités et retour sur console.log()*/
// let playerName = prompt("Entrez votre nom : ");
// let price = parseInt(prompt("entrez votre proposition de prix : "));

// // console.log("Le joueur "+playerName+" propose le prix : "+price);

// if(price < justPrice){
//     console.log("C'est plus ");
// } else if(price > justPrice){
//     console.log("C'est moins");
// } else {
//     console.log("C'est le juste prix");
// };

// const players = [];

const players = new Array();
let diff = []; 


/* Avec quatre joueurs et retour sur console.log()*/
// for(let i=1 ; i<=4; i++){
    // let player = prompt("Entrez votre nom : Joueur"+i);
    // let price = parseInt(prompt("entrez votre proposition de prix : "))
//     players.push([player, price]);
// }

// for(let i = 0; i<players.length; i++){
//     diff = Math.abs(players[i][1] - justPrice);
//     players[i][1] = diff;
// }

// const gagnant = [players[0]];

// for(let i = 0; i<players.length; i++){
//     if(players[i][1] < gagnant[1]){
//         gagnant = players[i];
//     }
//     console.log(gagnant)
// }

// for(let i = 1; i<=2; i++){
//     let player = document.getElementById("name"+i).textContent;
//     players.push(document.getElementById("name"+i).value);
// }
// console.log(players);

const submit = document.getElementById("form");

/* Avec quatre joueurs et un mixe de retours sur console.log() en récupérant les infos du DOM */
// submit.addEventListener("submit", function(evt){
//     evt.preventDefault();
//     let player;
//     let price;

//     for(let i = 1; i<=4; i++){
//         player = document.getElementById("name"+i).value;
//         price = parseInt(document.getElementById("price"+i).value);
//         players.push([player, price]);
//     }

//     for(let i = 0; i<players.length; i++){
//         diff = Math.abs(players[i][1] - justPrice);
//         players[i][1] = diff;
//     } 
//     // console.log(players);
    

//     let gagnant = new Array();

//     for(let i = 0; i<players.length; i++){
//         gagnant = players[0];
//         if(players[i][1] < gagnant[1]){
//             gagnant = players[i];
//         } else {
//             gagnant = gagnant;
//         }
//         console.log(gagnant);
//     }
// })

/* Code nettoyé et commenté pour utilisation avec le DOM */

submit.addEventListener("submit", function(evt){
    evt.preventDefault();

    // Récupération des données des joueurs
    for(let i = 1; i <= 4; i++){
        let player = document.getElementById("name" + i).value;
        let price = parseInt(document.getElementById("price" + i).value);
        players.push([player, price]);
    }

    // Calcul des différences
    for(let i = 0; i < players.length; i++){
        diff = Math.abs(players[i][1] - justPrice);
        players[i][1] = diff;
    }

    // Définition du gagnant
    let gagnant = players[0];
    for(let i = 1; i < players.length; i++){
        if(players[i][1] < gagnant[1]){
            gagnant = players[i];
        }
    }

    // Affichage du gagnant dans la div
    document.getElementById("result").innerText = `Félicitation ${gagnant[0]} ! Vous avez gagné avec une différence de ${gagnant[1]} !!`;
});
