function IniciarContagem(ContadorAtual, Objetivo, Incremento, ContadorId) {
   let Intervalo = setInterval(function() {
        ContadorAtual += Incremento;
        document.getElementById(ContadorId).innerText = ContadorAtual.toLocaleString()
        if (ContadorAtual >= Objetivo) {
        clearInterval (Intervalo);
        document.getElementById(ContadorId).innerText = Objetivo.toLocaleString()}


    }, 15);
} 
window.onload=function(){
    IniciarContagem (0, 850, 11, 'contador1' )
    IniciarContagem (0, 40, 1, 'contador2')
    IniciarContagem (0, 2000000, 23456, 'contador3')
};
