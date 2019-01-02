var game = {
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
        var i = Math.floor(Math.random() * wordList.length);
        return this.wordList[i];
    },

    update : function (event){
        if (guess === )
    },


    /* compare : function (){
        
    }, */

    setCharAt : function(string, index, chr){
        if (index > (string.length - 1)){
            return string;
        }
        return string.substring(0,index) + chr + string.substring(index + 1);
    }   

    
}