window.onload = function() {

    window.genCard = function(){
    
        var cardNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        var suit = ["Diamons", "Spades", "Clubs", "Hearts"];
        
        var randomCardNumber = Math.floor(Math.random() * cardNumber.length);
        console.log(randomCardNumber);
        var randomSuitNumber = Math.floor(Math.random() * suit.length);
        var finalSuit = suit[randomSuitNumber];
        console.log(getSuitClass(finalSuit));
        
        document.getElementById('cardContent').innerHTML = cardNumber[randomCardNumber];
        document.getElementById('cardContent').className = "";
        document.getElementById('cardContent').classList.add("card");
        document.getElementById('cardContent').classList.add(getSuitClass(finalSuit));
        
        function getSuitClass(suit) {
            switch(suit) {
                case "Diamons":
                    return "suit-diamons";
                case "Spades":
                    return "suit-spades";
                case "Clubs":
                    return "suit-clubs";
                case "Hearts":
                    return "suit-hearts";
            }
        }
    };
        
    // 3 ways of doing the same thing
    document.getElementById("notHardCoded").onclick = window.genCard;
    window.genCard();
    document.querySelector("#settingListener").addEventListener('click', window.genCard);
    
};