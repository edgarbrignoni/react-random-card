/*
    This is your main stylesheet, you should use it only
    to include other styles into your web app.
*/
//include jquery into the bundle and store its contents into the $ variable
import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';
//include your own styles
import '../style/index.scss';

window.onload = function(){

function init() {
	var randomNumber = Math.floor(Math.random() * 12 + 1);
	var randomSuit = Math.floor(Math.random() * 4);
	buildCard(randomNumber, randomSuit);
	return false;
}    

function buildCard(number, suit) {
	var topEAB = document.querySelector('.topEAB');
	var botEAB = document.querySelector('.botEAB');
	
	if (number == 1){ number = 'A'}
	if (number == 11){ number = 'J'}
	if (number == 12){ number = 'Q'}
	if (number == 13){ number = 'K'}
	
	if (suit == 0) {
		topEAB.setAttribute('class', 'topEAB heart');
		botEAB.setAttribute('class', 'botEAB heart');
		document.querySelector('.midEAB').innerHTML = number;
		document.querySelector('.midEAB').style.color = 'red';
	} else if (suit == 1) {
		topEAB.setAttribute('class', 'topEAB spade');
		botEAB.setAttribute('class', 'botEAB spade');
		document.querySelector('.midEAB').innerHTML = number;
		document.querySelector('.midEAB').style.color = 'black';
	} else if (suit == 2) {
		topEAB.setAttribute('class', 'topEAB diamo');
		botEAB.setAttribute('class', 'botEAB diamo');
		document.querySelector('.midEAB').innerHTML = number;
		document.querySelector('.midEAB').style.color = 'red';
	} else if (suit == 3) {
		topEAB.setAttribute('class', 'topEAB clubs');
		botEAB.setAttribute('class', 'botEAB clubs');
		document.querySelector('.midEAB').innerHTML = number;
		document.querySelector('.midEAB').style.color = 'black';
	}
	return false;
}

document.querySelector('body').addEventListener('click',init);

var btn = document.createElement("BUTTON");
var t = document.createTextNode("CLICK ME");
btn.appendChild(t);
document.querySelector('p').appendChild(btn);

};