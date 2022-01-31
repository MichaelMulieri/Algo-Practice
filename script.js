// create a function that mimicks rolling a die

function d6() {
    var roll = Math.random();
    return Math.ceil(roll*6)
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

// create a function that mimicks a magic 8 ball

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];
function crystal(){
    var i = Math.ceil(Math.random() * lifesAnswers.length-1)
    return lifesAnswers[i];
}
var answer = crystal();
console.log(answer);

