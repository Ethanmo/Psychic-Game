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
var guessesRemain = 7;
var temp = "";

// pick a random word from wordlist
function wordPicker(){
    return wordList[Math.floor(Math.random() * wordList.length)];
}

// set the character at given index in a string to char
function setCharAt(string, i, char){
    if (i > (string.length - 1)){
        return string;
    }
    return string.substring(0, i) + char + string.substring(i + 1);
} 

// create prototype function for string to set char at certain index to given value
function containsLetter(word, char){
    var check = false;
    for (var i = 0; i < word.length; i++){
        if (word.charAt(i).toLowerCase() === char){
            check = true;
        }
    }
    return check;
}

//return true if the given char is a letter
function isLetter(char){
    if (char.toLowerCase() !== char.toUpperCase()){
        if (char.length === 1){
            return true;
        }
    }
    return false;
}


//initiate the game by giving value to empty variables declared at the beginning
function initiateGame(){
    answer = wordPicker(wordList);
    console.log(answer + ' 1');
    for (var i = 0; i < answer.length; i++){
        current += '_';
    }
    // set innerHTML to current.
    document.getElementById('current').innerHTML = ' ' + current;
}

//compare the user input(guess) to each character in the answer string. 
//if match, update the character with the same index in "current"
//if wrong guess and the guess is not already in wrongGuesses, add to
function update(guess){
    //if answer doesn't contain guess
    if (!(containsLetter(answer, guess))){
        //if wrongGuesses list doesn't contain guess, add it
        if (wrongGuesses.indexOf(guess.toUpperCase()) === -1){
            wrongGuesses.push(guess.toUpperCase());
            guessesRemain--;
        }
    } else {
        for (var i = 0; i < answer.length; i++){
            if (answer.charAt(i).toLowerCase() === guess){
                current = setCharAt(current, i, answer.charAt(i));
            } 
        }
    }
}

//show the progress of the game to player
function gameProgress(){
    console.log("the answer is: " + answer);
    console.log(current);
    if (answer === current) {
        //game over and win
        winSound();
        console.log(answer + ' 2');
        audioImg();
        wins++;
        reset();
        document.getElementById('current').innerHTML = "Win!";
    } else if(guessesRemain === 0) {
        //game over and loss
        lossSound();
        document.getElementById('pic').src = "assests/img/fainted.jpg";
        losses++;
        reset();
        document.getElementById('current').innerHTML = "You lose";
    } else {
        document.getElementById('current').innerHTML = current;
        document.getElementById('remain').innerHTML = 'Guesses remain : ' + guessesRemain;
        document.getElementById('start').innerHTML = '';
    }
    
}

//when win or run out of guesses, reveal answer and reset the game
function reset(){
    temp = answer;
    document.getElementById('remain').innerHTML = "The Pokemon was : " + answer;
    answer = "";
    current = "";
    wrongGuesses = [];
    guessesRemain = 7;
    document.getElementById('start').innerHTML = 'Press any key to play again';
    initiateGame();
    //setTimeout(initiateGame, 2000);
}

var bulbasaurAud = document.getElementById('bulbasaurAud');
var weedleAud = document.getElementById('weedleAud');
var geodudeAud = document.getElementById('geodudeAud');
var pikachuAud = document.getElementById('pikachuAud');
var magikarpAud = document.getElementById('magikarpAud');
var MewtwoAud = document.getElementById('MewtwoAud');

var soundArray = [
    bulbasaurAud, 
    weedleAud, 
    geodudeAud, 
    pikachuAud,
    magikarpAud, 
    MewtwoAud
]

var correctSound = document.getElementById('correctSound');
var clickSound = document.getElementById('clickSound');
var faintSound = document.getElementById('faint');


function winSound(){
    correctSound.play();
}

function lossSound(){
    faintSound.play();
}

function playClickSound(){
    clickSound.play();
}

//audio and image after win
function audioImg() {
    //set img to according pokemon
    document.getElementById('pic').src = "assests/img/" + answer + ".png";
    //set a delay before the cry of the pokemon is played
    setTimeout(pokemonSound, 2000);
    //pokemonSound();
}

//play the cry of the pokemon
function pokemonSound(){
    console.log(temp + ' 3');
    console.log(wordList.indexOf(temp));
    soundArray[wordList.indexOf(temp)].play();
}

//call the function to start the game
initiateGame();

//takes in the user input and update 
document.onkeyup = function(event){
    playClickSound();
    var input = event.key.toLowerCase();
    console.log(input);
    if (isLetter(input)){
        update(input);
        gameProgress();
        // display current, wrongGuesses,guessesRemain,wins,losses
        document.getElementById('wrong').innerHTML = wrongGuesses.join('  ');
        document.getElementById('wins').innerHTML = wins;
        document.getElementById('losses').innerHTML = losses;
    }


}