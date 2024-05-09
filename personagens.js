/*2) Em um jogo o seu personagem tem 100 de HP (vida). Criar um programa onde o usuário digite o 
valor de um dano (ataque sofrido pelo personagem). Caso a vida do personagem chegue a zero ou negativo, 
mostrar na tela "Game Over". Se a vida ficar de 1 a 20, mostrar "Dano crítico, quase sem vida", se a vida ficar
 de 21 a 50, mostrar "Dano moderado, vida estável" e se a vida ficar entre 51 a 100, mostrar "Dano leve, vida 
 boa!".*/

 
 let ValorVida = 100, ValorDano
 

 ValorDano = Number(prompt('Digite o nivel de via que ainda resta : '))  

switch(true){

case ValorDano == 0:
alert('Game Over')
break

case ValorDano >= 1 && ValorDano <= 20 :
alert('Dano crítico,quase sem vida. Sorry! procure um medico! ')
break

case ValorDano >= 21 && ValorDano <= 50:
alert('Dano moderado, vida estável')
break

case ValorDano >= 51 && ValorDano <= 100:
alert('Dano leve, vida boa!')
break

default:
alert('Você precisa de uma Arma? :')

}
