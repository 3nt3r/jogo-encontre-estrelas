var sorteioPosicaoEstrela = parseInt((Math.random() * 9) + 2);
var quadrados = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var pontos = 0;

function primeiraJogada(){
	document.getElementById("d1").style.backgroundImage = "url('estrela.png')";
	quadrados[0] = 1;
}

function jogo(div){

	if(quadrados[0] === 0){

		alert("Clique no primeiro quadrado!");
		return false;

	} else if (parseInt(div) === sorteioPosicaoEstrela){

		document.getElementById("d" + div).style.backgroundImage = "url('estrela.png')";

		if (quadrados[sorteioPosicaoEstrela-1] != 1){
			pontos += 10;
		}
		quadrados[parseInt(div)-1] = 1;

	} else if (quadrados[parseInt(div)-1] !== 1) {

		var r = parseInt(Math.random() * (255 - 0) + 0);
		var g = parseInt(Math.random() * (255 - 0) + 0);
		var b = parseInt(Math.random() * (255 - 0) + 0);

		document.getElementById("d" + div).style.backgroundColor = "rgb(" + r + ", " + g + " ," + b + ")";
		document.getElementById("d" + div).style.backgroundImage = "url()";

		if (quadrados[sorteioPosicaoEstrela-1] != 1){
			pontos -= 1;
		}

	}

	quadrados[parseInt(div)-1] = 1;

	document.getElementById("pontos").innerHTML = pontos;

	if (quadrados[sorteioPosicaoEstrela-1] == 1){
		document.getElementById("mensagem").innerHTML = "Parabéns, encontrou a estrela!";
	}	

}
