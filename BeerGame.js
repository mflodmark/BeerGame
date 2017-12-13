function Card(name, image, color) {
    this.name = name
    this.action = ""
    this.image = image
    this.color = color    
}

class Game {
    constructor(name, info, change) {
        this.name = name
        this.info = info
        this.break = change  
    }
    
    add() {

    }
}

var hatman = new Game("Hatman", 
"Den som får kortet måste ha en hatt på sig. Hatman måste dricka när alla sjunger Nanananana-HATMAN.",
"Byte av hatt sker vid nästa hatman eller ev vid regel")

var tum = new Game("Tumme", 
"Använd din tumme och sätt var du vill, alla ska göra samma sak med sin tumme",
"Sisten dricker!")

var question = new Game("Frågespel",
"Ställ en fråga till någon annan, den personen ska i sin tur ställa en fråga till någon annan.",
"För långsam att ställa nästa fråga eller blir ställd - DRICK")

var taliTali = new Game("Tali-Tali",
"bla bla",
"Den som inte lyckas skicka vidare")

var woopWoop = new Game("Woop-Woop", 
"Alla använder sina händer som glasögon för ögonen. Den som fick kortet börjar och skickar (woop-woop) vidare till en annan person genom att flytta handen ut och säga woop-woop (max 2 steg och inte tillbaka-kaka)",
"Den som missar")   

var category = new Game("Kategori",
"Spelaren som får kortet kommer på en kategori och börjar sedan säga en sak från kategorin, nästa person ska säga en annan sak från kategorin",
"Den som missar")

var rule = new Game("Regel",
"Välj en egen regel som gäller hela omgången",
"Den som missar")

var eightGame = new Game("Åttan",
"Regler..",
"Den som missar")

var drink = new Game("Drick",
"Drick antal klunkar på kortet",
"Den som får kortet")

var giveAway = new Game("Ge",
"Gebort antal klunkar på kortet",
"Den som får kortet kan ger bort klunkar till någon rolig person")

var sevenGame = new Game("Sjuan",
"Börja med siffran 1. Klockvis fortsätter med 2. Om 7 ingår i siffran eller i 7:ans tabell så ska man säga biip istället och det byter håll",
"Den som missar")

// preloadImages(["./Kortlek/3.png"]);
// var cAce = checkCookie("ace","./Kortlek/3.png",365);
setCookie("name","Markus",1000);
var markus = getCookie("name");

// var markus = checkCookie("name","Markus",365);

window.alert(markus);

var ace = new Card("Ace","./Kortlek/3.png", "Red");
var ace2 = new Card("Ace","./Kortlek/1.png", "Black");
var ace3 = new Card("Ace","./Kortlek/2.png", "Black");
var ace4 = new Card("Ace","./Kortlek/4.png", "Red");

var king = new Card("King", "./Kortlek/7.png", "Red"); 
var king2 = new Card("King", "./Kortlek/5.png", "Black"); 
var king3 = new Card("King", "./Kortlek/6.png", "Black"); 
var king4 = new Card("King", "./Kortlek/8.png", "Red"); 

var queen = new Card("Queen","./Kortlek/11.png", "Red");
var queen2 = new Card("Queen","./Kortlek/9.png", "Black");
var queen3 = new Card("Queen","./Kortlek/10.png", "Black");
var queen4 = new Card("Queen","./Kortlek/12.png", "Red");

var knight = new Card("Knight","./Kortlek/15.png", "Red");
var knight2 = new Card("Knight","./Kortlek/13.png", "Black");
var knight3 = new Card("Knight","./Kortlek/14.png", "Black");
var knight4 = new Card("Knight","./Kortlek/16.png", "Red");

var ten = new Card("Ten","./Kortlek/19.png", "Red");
var ten2 = new Card("Ten","./Kortlek/17.png", "Black");
var ten3 = new Card("Ten","./Kortlek/18.png", "Black");
var ten4 = new Card("Ten","./Kortlek/20.png", "Red");

var nine = new Card("Nine","./Kortlek/23.png", "Red");
var nine2 = new Card("Nine","./Kortlek/21.png", "Black");
var nine3 = new Card("Nine","./Kortlek/22.png", "Black");
var nine4 = new Card("Nine","./Kortlek/24.png", "Red");

var eight = new Card("Eight","./Kortlek/27.png", "Red"); 
var eight2 = new Card("Eight","./Kortlek/25.png", "Black"); 
var eight3 = new Card("Eight","./Kortlek/26.png", "Black"); 
var eight4 = new Card("Eight","./Kortlek/28.png", "Red"); 

var seven = new Card("Seven","./Kortlek/31.png", "Red");
var seven2 = new Card("Seven","./Kortlek/29.png", "Black");
var seven3 = new Card("Seven","./Kortlek/30.png", "Black");
var seven4 = new Card("Seven","./Kortlek/32.png", "Red");

var six = new Card("Six", "./Kortlek/35.png", "Red");
var six2 = new Card("Six", "./Kortlek/33.png", "Black");
var six3 = new Card("Six", "./Kortlek/34.png", "Black");
var six4 = new Card("Six", "./Kortlek/36.png", "Red");

var five = new Card("Five","./Kortlek/39.png", "Red");
var five2 = new Card("Five","./Kortlek/37.png", "Black");
var five3 = new Card("Five","./Kortlek/38.png", "Black");
var five4 = new Card("Five","./Kortlek/40.png", "Red");

var four = new Card("Four","./Kortlek/43.png", "Red");
var four2 = new Card("Four","./Kortlek/41.png", "Black");
var four3 = new Card("Four","./Kortlek/42.png", "Black");
var four4 = new Card("Four","./Kortlek/44.png", "Red");

var three = new Card("Three","./Kortlek/47.png", "Red");
var three2 = new Card("Three","./Kortlek/45.png", "Black");
var three3 = new Card("Three","./Kortlek/46.png", "Black");
var three4 = new Card("Three","./Kortlek/48.png", "Red");

var two = new Card("Two","./Kortlek/51.png", "Red");
var two2 = new Card("Two","./Kortlek/49.png", "Black");
var two3 = new Card("Two","./Kortlek/50.png", "Black");
var two4 = new Card("Two","./Kortlek/52.png", "Red");

function Games() {
    var games = [sevenGame,giveAway,drink,eightGame,
        rule,category,woopWoop,taliTali,question,tum,hatman];

    return games;
}

function Cards() {
    var cards = [six, seven, eight, nine, ten, knight, queen, king, ace];

    return cards;
}

function LowCards() {
    var lowCards = [two, three, four, five];
    
    return lowCards;
}

function AllCards() {
    var allCards = [ace,ace2,ace3,ace4,two,two2,two3,two4,three,three2,three3,three4,four,four2,four3,four4,
        five,five2,five3,five4,six,six2,six3,six4,seven,seven2,seven3,seven4,eight,eight2,eight3,eight4,
        nine,nine2,nine3,nine4,ten,ten2,ten3,ten4,knight,knight2,knight3,knight4,queen,queen2,queen3,queen4,
        king,king2,king3,king4];

    return allCards; 
}


class NewCardGame {
    constructor() {
        this.allCards = AllCards();  
        this.lowCards = LowCards();
        this.cards = Cards();
        this.games = Games();
        this.currentCard;
    }

    updateCard(name, action, color) {
        if(color == "Red" || color == "Black") 
        {
            this.allCards.forEach(element => {
                if (element.name == name && element.color == color) 
                {
                    element.action = action; 
                }
            });
        } else {
            this.allCards.forEach(element => {
                if (element.name == name) 
                {
                    element.action = action; 
                }
            });
        }
    }
}

var newGame = new NewCardGame();