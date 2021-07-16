function Vervalor() {
    var msg = document.getElementById('msg')
    var tn1 = document.getElementById('valorhoras')
    numero = Number(tn1.value)
    document.getElementById('valorhoras').style.display = 'none';
    document.getElementById('botao').style.display = 'none';
    document.getElementById('voltar').style.display = 'block';
    if (numero >= 0 && numero <= 3){ 
    msg.style.color = "#FFF"
    msg.innerHTML = "Seu uso está saudavel! <br> Para contribuir com nosso projeto clique em voltar e digite novamente o valor e pressione enter 🥰"
}
    else {
        msg.style.color = "#D62839"
        msg.innerHTML = "Você não está tendo um uso saudavel!! <br> Para contribuir com nosso projeto clique em voltar e digite novamente o valor e pressione enter 🥰" 
    }
}
function Voltar(){
    var msg = document.getElementById('msg')
    var tn1 = document.getElementById('valorhoras')
    numero = Number(tn1.value)
    document.getElementById('valorhoras').style.display = 'block';
    document.getElementById('botao').style.display = 'block';
    document.getElementById('voltar').style.display = 'none';
    if (numero >= 0 && numero <= 3){ 
    msg.style.color = "#FFF"
    msg.innerHTML = "Quanto tempo voce passa jogando?"
}
    else {
        msg.style.color = "#FFF"
        msg.innerHTML = "Quanto tempo voce passa jogando?" 
    }
}
