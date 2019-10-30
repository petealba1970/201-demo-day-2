'use strict';
var userName = prompt('What is your name?');
//console.log('Welcome ' + userName + ', feel free to read my biography and answer some questions about me.')
alert('Welcome ' + userName + ', feel free to read my biography and answer some questions about me.');

var question1 = prompt('Did I learn to be a pro musician in New Orleans, yes or no?');
question1 = question1.toLowerCase();
if (question1 === 'yes' || question1 === 'y') {
    //console.log('Correct, ' + userName);
    alert('Correct, ' + userName);
} else {
    //console.log(userName + ', that is incorrect.')
    alert(userName + ', that is incorrect.');
}
var question2 = prompt('Did I receive my MM in jazz performance in New Orleans?');
question2 = question2.toLowerCase();
if (question2 === 'yes' || question2 === 'y') {
    //console.log('Correct, ' + userName);
    alert('Correct, ' + userName);
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
}
var question5 = prompt('Do I wish to apply coding skills to music?');
question5 = question5.toLowerCase();
if (question5 === 'yes' || question5 === 'y') {
    //console.log('Correct, ' + userName);
    alert('Correct, ' + userName + ', thank you for participating!');
}
else {
    //console.log(userName + ', that is incorrect.');
    alert(userName + ', that is incorrect. Thank you for participating!');
}
