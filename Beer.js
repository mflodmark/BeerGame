$("#play").hide();
$("#play-info").hide();

function ShuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

newGame.cards.forEach(element => {
    var newDiv = document.createElement("div");
    newDiv.id = element.name + "-div-input";
    newDiv.classList.add("form-group");
    
    var newSelect = document.createElement("select");
    
    var option = document.createElement("option");
    option.innerHTML = "Select..";
    newSelect.appendChild(option);

    newGame.games.forEach(element => {
        var option = document.createElement("option");
        option.innerHTML = element.name;
        option.value = element;
        newSelect.appendChild(option);
    });

    newDiv.appendChild(newSelect);
   
    var divId = element.name + "-div";
    document.getElementById(divId).appendChild(newDiv);   
    
    $("#" + newDiv.id).hide();
});

for (let index = 0; index < 2; index++) {
    var newDiv = document.createElement("div");
    newDiv.classList.add("form-group");

    var newSelect = document.createElement("select");
    
    var option = document.createElement("option");
    option.innerHTML = "Select..";
    newSelect.appendChild(option);

    newGame.games.forEach(element => {
        var option = document.createElement("option");
        option.innerHTML = element.name;
        option.value = element;
        newSelect.appendChild(option);
    });

    newDiv.appendChild(newSelect);
        
    var divId;

    if (index == 0) {
        divId = "Black-div";
        document.getElementById(divId).appendChild(newDiv);  
        newDiv.id = "Black-div-input";
    } else {
        divId = "Red-div";
        document.getElementById(divId).appendChild(newDiv);  
        newDiv.id = "Red-div-input";  
    }
       
    $("#" + newDiv.id).hide();
}








