var textovi=["Danas je divan dan","Danilo isprektor","Idemo na pivo sutra"]
var random=Math.floor(Math.random()*textovi.length);
var start=document.getElementById('start');
var info=document.getElementById('info');
var player1=document.getElementById('player1');
var player2=document.getElementById('player2');
var player3=document.getElementById('player3');
var player4=document.getElementById('player4');
var textarea1=document.getElementById('textarea1');
var textarea2=document.getElementById('textarea2');
var textarea3=document.getElementById('textarea3');
var textarea4=document.getElementById('textarea4');
var testText=document.getElementById('textZaPisanje');
start.addEventListener('click',startClock);
textarea1.addEventListener('keydown',userFinish)
var num = 5;
var pobednik=0;
function startClock() {
	start.innerHTML=num;
	var loop=setInterval(function () {
		num--;
		start.innerHTML=num;
		if (num == 0) {

			testText.innerHTML=textovi[random]
			info.style.display="block";
			start.style.display="none";
			clearInterval(loop);
			textarea1.focus();
			comp1Start();
			comp2Start();
			comp3Start();
		}

	},300)
}
function userFinish(e) {
	if (e.keyCode == 13) {
		if (this.value == textovi[random]) {
			console.log("uspesno");
			pobednik++;
			player1.className="btn btn-success form-control"
			player1.innerHTML="Pozicija "+pobednik;
		}else {
			console.log("neuspesno");
			player1.className="btn btn-danger form-control"
			player1.innerHTML="Pogresan tekst";
		}
	}
}
function comp1Start() {
	var speed=Math.floor(Math.random()*1000);
	var compText = textovi[random];
	var comTextAr = compText.split("");
	var loop = setInterval(function () {
		if (comTextAr.length > 0) {
			textarea2.value += comTextAr.shift();
		}else {
			pobednik++;
			if (pobednik == 1) {
				player2.className="btn btn-success form-control"
			}if (pobednik == 2) {
				player3.className="btn btn-primary form-control"
			}
			if (pobednik == 3) {
				player2.className="btn btn-info form-control"
			}
			if (pobednik == 4) {
				player2.className="btn btn-default form-control"
			}
			player2.innerHTML="Pozicija "+pobednik;
			clearInterval(loop);
		}
	},speed)
}
function comp2Start() {
	var speed=Math.floor(Math.random()*1000);
	var compText = textovi[random];
	var comTextAr = compText.split("");
	var loop = setInterval(function () {
		if (comTextAr.length > 0) {
			textarea3.value += comTextAr.shift();
		}else {
			pobednik++;
			if (pobednik == 1) {
				player3.className="btn btn-success form-control"
			}if (pobednik == 2) {
				player3.className="btn btn-primary form-control"
			}
			if (pobednik == 3) {
				player3.className="btn btn-info form-control"
			}
			if (pobednik == 4) {
				player3.className="btn btn-default form-control"
			}
			player3.innerHTML="Pozicija "+pobednik;
			clearInterval(loop);
		}
	},speed)
}
function comp3Start() {
	var speed=Math.floor(Math.random()*1000);
	var compText = textovi[random];
	var comTextAr = compText.split("");
	var loop = setInterval(function () {
		if (comTextAr.length > 0) {
			textarea4.value += comTextAr.shift();
		}else {
			pobednik++;
			if (pobednik == 1) {
				player4.className="btn btn-success form-control"
			}if (pobednik == 2) {
				player3.className="btn btn-primary form-control"
			}
			if (pobednik == 3) {
				player4.className="btn btn-info form-control"
			}
			if (pobednik == 4) {
				player4.className="btn btn-default form-control"
			}
			player4.innerHTML="Pozicija "+pobednik;
			clearInterval(loop);
		}
	},speed)
}
