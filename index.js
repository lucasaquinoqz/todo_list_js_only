const readline = require('readline-sync')

let opcao = 0
do {
    console.log("Bem vindo ao Todo List!")
    console.log(`
        Informe o que você deseja fazer:
        1- Adicionar novo afazer
        2- Ver os afazeres
        3- Alterar um afazer
        4- Marcar um afazer como concluido
        5- Apagar um afazer
        6- Sair
    `);

    opcao = Number(readline.question("Escolha uma opcao: "))

} while (opcao != 6)


console.log("Obrigado e até mais!")