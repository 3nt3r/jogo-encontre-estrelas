var aleatorio = parseInt(Math.random() * (9 - 2) + 2);
var verifica = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var ponto = 0;

function primeiro(prim){
	document.getElementById("d" + prim).style.backgroundImage = "url('estrela.png')";
	verifica[0] = 1;
}

function jogo(div){

	if(verifica[0] === 0){
		alert("Clique no primeiro quadrado!");
		return false;
	} else if (parseInt(div) === aleatorio && verifica[parseInt(div)-1] === 0){
		document.getElementById("d" + div).style.backgroundImage = "url('estrela.png')";
		if (verifica[aleatorio-1] != 1){
		ponto += 10;
		}
		verifica[parseInt(div)-1] = 1;
	} else if (verifica[parseInt(div)-1] !== 1) {
		var r = parseInt(Math.random() * (255 - 0) + 0);
		var g = parseInt(Math.random() * (255 - 0) + 0);
		var b = parseInt(Math.random() * (255 - 0) + 0);
		document.getElementById("d" + div).style.backgroundColor = "rgb(" + r + ", " + g + " ," + b + ")";
		document.getElementById("d" + div).style.backgroundImage = "url()";
		if (verifica[aleatorio-1] != 1){
		ponto -= 1;
		}
	}
	verifica[parseInt(div)-1] = 1;
	document.getElementById("pontos").innerHTML=ponto;
	if (verifica[aleatorio-1] == 1){
		document.getElementById("mensagem").innerHTML= "Parabéns! Você Acertou!";
	}	
}
