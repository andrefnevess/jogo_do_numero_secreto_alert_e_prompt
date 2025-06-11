alert('Boas vindas ao jogo do número secreto!');
let numeroMaximo = 15;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
// Math.random - Gerar um número entre 0 e 1;
// parseInt() - Usada para converter uma string em um número inteiro.
console.log (numeroSecreto);
let chute;
let tentativas = 1;

// while(enquanto) - Enquanto chute não for igual ao n.s
while (chute != numeroSecreto){
    chute = prompt (`Escolha um número de 0 a ${numeroMaximo} `);

    // If (se) - Se chute for igualao número secreto
    if (chute == numeroSecreto){
        break; // Interrompe laço de repetição (loop);
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas}`);
    } 
    else {
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else{
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas +1
        tentativas ++
    }
}

// Operador ternário -  permite escrever uma estrutura if-else de forma mais concisa e legível.
let palavraTentativa = tentativas > 1 ? 'tentaivas' : 'tentativa'
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//if(tentativas > 1){
  //  alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentaiva`);
//} else{
  //  alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//}