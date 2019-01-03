/* var game = {
    wordList : [
        "Bulbasaur",    
        "Weedle",
        "Geodude",
        "Pikachu",
        "Magikarp",
        "Mewtwo"
    ],

    score : 0,

    guess : function (answer) {
        var result = "_"
        for (var i = 1; i < answer.length; i++){
            result = result + " _";
        }
        return result; 
    },

    wordPicker : function (){
        return this.wordList[Math.floor(Math.random() * wordList.length)];
    },

    

    compare : function (){
        
    }, 

    setCharAt : function(string, index, chr){
        if (index > (string.length - 1)){
            return string;
        }
        return string.substring(0,index) + chr + string.substring(index + 1);
    }   

    
} */

// declare some variable before the game starts, some left empty for future use
var wordList = [
    "Bulbasaur",    
    "Weedle",
    "Geodude",
    "Pikachu",
    "Magikarp",
    "Mewtwo"
];

var wins = 0;
var losses = 0;
var answer = "";
var current = "";
var wrongGuesses = [];
var guessesRemain = 10;

// pick a random word from wordlist
function wordPicker(){
    return wordList[Math.floor(Math.random() * wordList.length)];
}

//non-prototype bulky version
/* function setCharAt(string, i, char){
    if (index > (string.length - 1)){
        return string;
    }
    return string.substring(0, i) + chr + string.substring(i + 1);
} */

// create prototype function for string to set char at certain index to given value
String.prototype.setCharAt = function (i, char){
    return this.substring(0, i) + chr + this.substring(i + 1);
}

//non-prototype bulky version
/* function isLetter(char) {
    return char.toLowerCase() != char.toUpperCase();
} */

//create prototype function for string to check if the given string is a letter
String.prototype.isLetter = function (char){
    return (char.toLowerCase() != char.toUpperCase() && char.length === 1);
}

//create prototype function for string to check if the string contains a certain character
String.prototype.containsLetter = function(char){
    var check = false;
    for (var i = 0; i < this.length; i++){
        if (this.charAt[i] === char){
            check = true;
        }
    }
    return check;
}

//initiate the game by giving value to empty variables declared at the beginning
function initiateGame(){
    answer = wordPicker(wordList);
    current = function (){
        var j = "_";
        for (var i = 1; i < answer.length; i++){
            j += " _";
        }
        return j;
    }
    // set innerHTML to current.
}

//compare the user input(guess) to each character in the answer string. 
//if match, update the character with the same index in "current"
//if wrong guess and the guess is not already in wrongGuesses, add to
function update(guess){
    //if answer doesn't contain guess
    if (!answer.containsLetter(guess)){
        //if wrongGuesses list doesn't contain guess, add it
        if (wrongGuesses.indexOf(guess) === -1){
            wrongGuesses.push(guess);
            guessesRemain--;
        }
    } else {
        for (var i = 0; i < answer.length; i++){
           if (answer.charAt[i] === guess){
              current = current.setCharAt(i, guess);
            } 
        }
    }
}

function gameOver(){
    if (answer === current) {
        //game over and win
        wins++;
    } else if(guessesRemain === 0) {
        //game over and loss
        losses++;
    }
}

function reset(){
    var answer = "";
    var current = "";
    var wrongGuesses = [];
    var guessesRemain = 10;
}

initiateGame();

document.onkeyup = function(event){
    var input = event.key.toLowerCase();
    if (input.isLetter()){
        update(input);

    }

}