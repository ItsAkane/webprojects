function iniciarContador(dataInicial) {
    function atualizarContador() {
        const agora = new Date().getTime();
        const diferenca = agora - dataInicial;

        const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
        const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        if(anos != 0){
            document.getElementById("temporizer").innerHTML = 
                `${anos} anos, ${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
        }else{
            document.getElementById("temporizer").innerHTML = 
                `${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
        }
    }

    atualizarContador();
    setInterval(atualizarContador, 1000);
}

const dataInicio = new Date("Oct 13, 2024 00:00:00").getTime(); 
iniciarContador(dataInicio);