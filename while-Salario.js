//let I = 0
//while(I<3){
//    console.log("Ja estamos?" = I)
//    I++
//}
//console.log("Terminou")

//let Idade
//do{
 //    Idade = Number(prompt("Idade: "))
//}
/*Ler n salários e:
(a) encontrar o maior
(b) aplicar 10% de aumento a quem ganha menos de R$2500,00
(c) mostrar o total da folha de pagamento antiga
(d) mostrar o total da folha corrigida
Você pode escolher entre `perguntar ao usuário quantos salários serão digitados` ou `ler salários até que 
seja digitado um salário de zero reais`*/

let qtd_salarios = Number(prompt("Quantos salarios?"))
let contador = 0
let salario, salarioNovo, folhaAntiga=0 ,folhaNova=0
let percentualAumento = 10
let maiorSalario = 0

while(contador < qtd_salarios ){
    salario = Number(prompt("Salario:"))
    folhaAntiga += salario
if(salario < 2500){
    //let aumento = (10*salario) / 100
    let aumento = salario * percentualAumento/100
    salarioNovo = salario + aumento
}else{
    salarioNovo = salario
}
folhaNova += salarioNovo
if(salario > maiorSalario){
    maiorSalario = salario
}

    contador++
}
console.log("folha antiga: " + folhaAntiga);
console.log("folha nova: " + folhaNova);
console.log("Maior salário: " + maiorSalario);