'use strict';
var userName = prompt('What is your name?');
//console.log('Welcome ' + userName + ', feel free to read my biography and answer some questions about me.')
alert('Welcome ' + userName + ', feel free to read my biography and answer some questions about me.');
var correctAnswers = 0
var question1 = prompt('Did I learn to be a pro musician in New Orleans, yes or no?');
question1 = question1.toLowerCase();
if (question1 === 'yes' || question1 === 'y') {
    //console.log('Correct, ' + userName);
    alert('Correct, ' + userName);
    var correctAnswers = correctAnswers + 1
} else {
    //console.log(userName + ', that is incorrect.')
    alert(userName + ', that is incorrect.');
}
var question2 = prompt('Did I receive my MM in jazz performance in New Orleans?');
question2 = question2.toLowerCase();
if (question2 === 'yes' || question2 === 'y') {
    //console.log('Correct, ' + userName);
    alert('Correct, ' + userName);
    var correctAnswers = correctAnswers + 1
}
else {
    //console.log(userName + ', that is incorrect.')
    alert(userName + ', that is incorrect.');
}
var question3 = prompt('Do I teach guitar?');
question3 = question3.toLowerCase();
if (question3 === 'yes' || question3 === 'y') {
    // console.log('Correct, ' + userName);
    alert('Correct, ' + userName);
    var correctAnswers = correctAnswers + 1
}
else {
    //console.log(userName + ', that is incorrect.')
    alert(userName + ', that is incorrect.');
}
var question4 = prompt('Did I grow up on the west coast?');
question4 = question4.toLowerCase();
if (question4 === 'yes' || question4 === 'y') {
    //console.log(userName + ', that is incorrect.');
    alert(userName + ', that is incorrect.');
}
else {
    //console.log('Correct, ' + userName);
    alert('Correct, ' + userName);
    var correctAnswers = correctAnswers + 1
}
var question5 = prompt('Do I wish to apply coding skills to music?');
question5 = question5.toLowerCase();
if (question5 === 'yes' || question5 === 'y') {
    //console.log('Correct, ' + userName);
    alert('Correct, ' + userName);
    var correctAnswers = correctAnswers + 1


}
else {
    //console.log(userName + ', that is incorrect.');
    alert(userName + ', that is incorrect.');
}


var question6 = prompt('Guess a number between 1 and 5');
var guessCounter = 1
function getRandomIntInclusive(min, max) {
    min = Math.ceil(5);
    max = Math.floor(1);
    return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
    //The maximum is inclusive and the minimum is inclusive 
}
var correctanswer = getRandomIntInclusive(1, 5);
while (question6 !== correctanswer && guessCounter < 5) {
    console.log('incorrect!')
    alert('Incorrect, ' + userName);
    if (question6 < correctanswer) {
        var guessCounter = guessCounter + 1;
        question6 = prompt('Too low, guess again 1-5');


    }

    else {
        var guessCounter = guessCounter + 1;
        //console.log('too high try again, 1-5.')
        question6 = prompt('Too high, guess again 1-5');


    }

}
alert('Correct!');
correctAnswers = correctAnswers + 1

var numTries = 0
var hasNotBeenFound = true
var faveGitPlayers = ['jimi hendrix', 'jimmy page', 'jeff beck', 'chuck berry', 'eric clapton', 'toni iommi', 'eddie van halen', 'randy rhoads', 'marty friedman', 'jennifer batten'];
var question7 = prompt('Guess one of my favorite guitar players in six tries. Note- the name will not be case sensitive but must be spelled correctly.');
var question7 = question7.toLowerCase();

while (hasNotBeenFound === true && numTries <= 6) {

    numTries++;
    if (question7 === faveGitPlayers[0] ||
        question7 === faveGitPlayers[1] ||
        question7 === faveGitPlayers[2] ||
        question7 === faveGitPlayers[3] ||
        question7 === faveGitPlayers[4] ||
        question7 === faveGitPlayers[5] ||
        question7 === faveGitPlayers[6] ||
        question7 === faveGitPlayers[7] ||
        question7 === faveGitPlayers[8] ||
        question7 === faveGitPlayers[9]) {


        var hasNotBeenFound = false

    }
    else {
        question7 = prompt('Try Again')
    }
}
alert('yes! You guessed it in ' + numTries + ('attempts!'));


var correctAnswers = correctAnswers + 1;
alert(userName + ', You now have a total of ' + correctAnswers + ' questions right!');
