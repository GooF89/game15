var boxes = document.querySelectorAll('.box');
var btn_mix= document.querySelector('#mix');
btn_mix.addEventListener('click', mix);

var game = document.querySelector('#boxes');
game.addEventListener('click', moveNumber);

var emptyId = 15;
var sign;

function moveNumber(e) {
  if (nearToEmpty(Number(e.target.id))) {
     swapWithEmptyById(e.target.id);
  }
};

function nearToEmpty(id) {
   return ((emptyId == id - 1 && id % 4 != 0) 
   || (id == emptyId - 1 && emptyId % 4 != 0) 
   || (emptyId == id - 4) || (id == emptyId - 4));
};

function swapWithEmptyById(id) {
   boxes[emptyId].innerHTML = boxes[id].innerHTML;
   boxes[emptyId].style.border="2px solid black";
   boxes[id].innerHTML = "";
   emptyId = boxes[id].id;
   boxes[emptyId].style.border="8px red";
};

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
};

function mix() {
   for (var i = 0; i < 1000; i++) {
      randomSwap();
   }
};


function randomSwap() {
   var random = randomIntFromInterval(1,4);
   var idToSwap;
   switch(random) {
      case 1:
	    idToSwap = nearToEmpty(Number(emptyId) + 1) ? Number(emptyId) + 1 : -1;
		break;
      case 2:
	    idToSwap = nearToEmpty(Number(emptyId) - 1) ? Number(emptyId) - 1 : -1;        
		break;
	  case 3:
	    idToSwap = nearToEmpty(Number(emptyId) + 4) ? Number(emptyId) + 4 : -1;
		break;
      case 4:
	    idToSwap = nearToEmpty(Number(emptyId) - 4) ? Number(emptyId) - 4 : -1;
		break;		
   }
   if (Number(idToSwap) >=0 && Number(idToSwap) <= 15) {
       console.log("idToSwap ", idToSwap);
       swapWithEmptyById(Number(idToSwap));
   }
};

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
			if (Number(emptyId) % 4 != 3) {swapWithEmptyById(Number(emptyId) + 1)}
            break;
        case 38:
			if (Number(emptyId) / 4 < 3) {swapWithEmptyById(Number(emptyId) + 4)}
            break;
        case 39:
			if (Number(emptyId) % 4 != 0) {swapWithEmptyById(Number(emptyId) - 1)}
            break;
        case 40:
			if (Number(emptyId) / 4 >= 1) {swapWithEmptyById(Number(emptyId) - 4)}
            break;
    }
};
