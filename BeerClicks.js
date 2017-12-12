
$("#Red-div img").click(function(){
    $("#Red-div-input").toggle(300);  
});      

$("#Black-div img").click(function(){
    $("#Black-div-input").toggle(300);  
});      

$("#start-img").click(function() {
    $("#start-info").fadeOut(300);

    $(".jumbotron").slideUp(500);
    
    $("#play-info").slideDown(500);
});

$("#end-img").click(function() {
    $("#play-info").fadeOut(500);

    $("#play").slideDown(700);

    $("input").blur();
      
    newGame.cards.forEach(element => {
        var input = document.getElementById(element.name + "-div-input");
        var arr = input.getElementsByTagName("option"); 
                              
        for (let index = 0; index < newGame.games.length + 1; index++) {
            if (arr[index].selected == true) {
                newGame.updateCard(element.name, newGame.games[index-1])
            }
        } 
    });   

    BlackEnd();
    RedEnd();
});

function BlackEnd() {
    var input = document.getElementById("Black-div-input");
    var arr = input.getElementsByTagName("option"); 
                          
    for (let index = 0; index < newGame.games.length + 1; index++) {
        if (arr[index].selected == true) {
            newGame.updateCard("Two", newGame.games[index-1], "Black")
            newGame.updateCard("Three", newGame.games[index-1], "Black")
            newGame.updateCard("Four", newGame.games[index-1], "Black")
            newGame.updateCard("Five", newGame.games[index-1], "Black") 
        }
    } 
}

function RedEnd() {
    var input = document.getElementById("Red-div-input");
    var arr = input.getElementsByTagName("option"); 
                          
    for (let index = 0; index < newGame.games.length + 1; index++) {
        if (arr[index].selected == true) {
            newGame.updateCard("Two", newGame.games[index-1], "Red")
            newGame.updateCard("Three", newGame.games[index-1], "Red")
            newGame.updateCard("Four", newGame.games[index-1], "Red")
            newGame.updateCard("Five", newGame.games[index-1], "Red")
        }
    } 
}

function GetRandomCard() {
    var number = Math.floor(Math.random() * newGame.allCards.length); 

    newGame.currentCard = newGame.allCards[number];

    newGame.allCards.splice(number, 1);
}

$("#play-img").click(function(){
    GetRandomCard();

    var img = document.getElementById("play-img");
 
    img.src = newGame.currentCard.image;

    document.getElementById("play-name").innerHTML = newGame.currentCard.action.name;

    var play = document.getElementById("play-div");

    play.children[1].innerHTML = newGame.currentCard.action.info;
    play.children[2].innerHTML = newGame.allCards.length + " kort kvar.";

    if (newGame.allCards.length == 1) {
        $("#play-img-side").fadeOut(300);       
    } else if (newGame.allCards.length == 0) {
        $("#play-img").fadeOut(3000);        
    }
    
});

$("#standard-btn").click(function(){
    newGame.allCards.forEach(element => {
        if (element.name == "Ace") {
            element.action = tum;
        } else if (element.name == "King") {
            element.action = question;            
        } else if (element.name == "Queen") {
            element.action = woopWoop;            
        } else if (element.name == "Knight") {
            element.action = category;            
        } else if (element.name == "Ten") {
            element.action = rule;            
        } else if (element.name == "Nine") {
            element.action = taliTali;            
        } else if (element.name == "Eight") {
            element.action = eightGame;            
        } else if (element.name == "Seven") {
            element.action = sevenGame;            
        } else if (element.name == "Six") {
            element.action = woopWoop;            
        } else if ((element.name == "Five" || element.name == "Four" || 
        element.name == "Three" ||element.name == "Two") && element.color == "Red") {
            element.action = giveAway;            
        } else if ((element.name == "Five" || element.name == "Four" || 
        element.name == "Three" ||element.name == "Two") && element.color == "Black") {
            element.action = drink;
        } 
    });

    Cards();
    Black();
    Red();
});

newGame.cards.forEach(element => {
    $("#" + element.name + "-div img").click(function(){
        $("#" + element.name + "-div-input").toggle(300);  
    });
});

function Cards() {
    newGame.cards.forEach(element => {
        $("#" + element.name + "-div-input").slideDown(300);
       
        var input = document.getElementById(element.name + "-div-input");

        var arr = input.getElementsByTagName("option");
        
        for (let index = 0; index < newGame.games.length + 1; index++) {
            if (arr[index].innerHTML == element.action.name) {
                arr[index].selected = true;
            }
        } 
    });
}

function Black() {
    $("#Black-div-input").slideDown(300);
    
    var input = document.getElementById("Black-div-input");

    var arr = input.getElementsByTagName("option");
    
    for (let index = 0; index < newGame.games.length + 1; index++) {
        if (arr[index].innerHTML == drink.name) {
            arr[index].selected = true;
        }
    }  
}

function Red() {
    $("#Red-div-input").slideDown(300);

    var input = document.getElementById("Red-div-input");

    var arr = input.getElementsByTagName("option");
    
    for (let index = 0; index < newGame.games.length + 1; index++) {
        if (arr[index].innerHTML == giveAway.name) {
            arr[index].selected = true;
        }
    } 
    
}

