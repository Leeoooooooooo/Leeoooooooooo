document.querySelector('#menu').a.addEventListener("click",a);
function a(){
	document.getElementById('word').innerHTML = "Three normal sized men can kill a normal sized bear with their fists <img src ='images/bear.jpg' alt = 'bear' id = 'bear'>";

}
document.querySelector('#menu').b.addEventListener("click",b);
function b(){
	document.getElementById('word').innerHTML = "YouTube's 2018 rewind has a most dislikes in a video <img src ='images/youtube.png' alt = 'youtube' id = 'youtube'>";

}
document.querySelector('#menu').c.addEventListener("click",c);
function c(){
	document.getElementById('word').innerHTML = "Since bananas don't have any seeds it can't Reproduce <img src ='images/banana.png' alt = 'banana' id = 'banana'>";

}
document.querySelector('#menu').d.addEventListener("click",d);
function d(){
	document.getElementById('word').innerHTML = "Hot water will turn into ice faster than cold water. <img src ='images/ice.png' alt = 'ice' id = 'ice'>";

}
document.querySelector('#menu').e.addEventListener("click",e);
function e(){
	document.getElementById('word').innerHTML = "With the average life time, most people will spend a whole year on a toliet. <img src ='images/toilet.png' alt = 'toilet' id = 'toilet'>";

}

document.querySelector('#BG').dk.addEventListener("click",godk);

function godk(){
	document.querySelector('body').style.backgroundColor = "#9F7E69";
	document.querySelector('section').style.backgroundColor = "#F2EFC7";
	document.querySelector('section').style.borderColor = "#D2BBA0";
	document.querySelector('section').style.color = "#000000";
	var inputs = document.getElementsByName('input');
	for (var i = 0; i < inputs.length; i++){
		inputs[i].style.color = "red"
		inputs[i].style.backgroundColor = "yellow"
		inputs[i].style.border = "blue"
		inputs[i].style.fontFamily = "Arial"
	}
}

document.querySelector('#BG').lt.addEventListener("click",golt);

function golt(){
	document.querySelector('body').style.backgroundColor = "#67597A";
	document.querySelector('section').style.backgroundColor = "#6E8894";
	document.querySelector('section').style.borderColor = "#544E61";
	document.querySelector('section').style.color = "#000000";
	var inputs = document.getElementsByName('input');
	for (var i = 0; i < inputs.length; i++){
		inputs[i].style.color = "green"
		inputs[i].style.backgroundColor = "yellow"
		inputs[i].style.border = "blue"
		inputs[i].style.fontFamily = "Arial"
	}
}
document.querySelector('#BG').dt.addEventListener("click",godt);

function godt(){
	document.querySelector('body').style.backgroundColor = "#FFD275";
	document.querySelector('section').style.backgroundColor = "#E8AE68";
	document.querySelector('section').style.borderColor = "#E3A587";
	document.querySelector('section').style.color = "#000000";
	var inputs = document.getElementsByName('input');
	for (var i = 0; i < inputs.length; i++){
		inputs[i].style.color = "green"
		inputs[i].style.backgroundColor = "yellow"
		inputs[i].style.border = "blue"
		inputs[i].style.fontFamily = "Arial"
	}
}

