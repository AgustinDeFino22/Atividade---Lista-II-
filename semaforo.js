/*1) Faça um programa no qual o usuário digite a cor que está no semáforo
 (verde, amarelo, vermelho). Caso seja digitado verde, mostre na tela "Pode seguir!", 
 se for digitado amarelo, mostre "Alerta, pare!" e se for digitado vermelho, mostre "Pare imediatamente!"*/

 let DigiteAcor

DigiteAcor = prompt('Digite uma opção:\n1)Verde\n2)Amarelo\n3)Vermelho\n')

switch(DigiteAcor){

    case '1':
        alert('Pode seguir!... ')
        break

    case '2':
        alert('Alerta, pare! ')
        break

    case '3':
        alert('Pare imediatamente!... ')
        break
    
    default:
        alert('Digite uma opção válida! :D')
    
}