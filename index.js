const readline = require('readline-sync')

let tasks = []
let opcao = 0

function menu() {
    console.log(`
-------------------------------------
|   Bem vindo ao Todo List!         |
|                                   |
|   Informe o que você deseja fazer:|
|   1 - Adicionar novo afazer       |
|   2 - Alterar um afazer           |
|   3 - Apagar um afazer            |
|   4 - Sair                        |
-------------------------------------    
    `);

    console.log(`
-------------------------
|   Lista de Afazeres:  |
-------------------------
    `)

    for (const key in tasks) {
        console.log(`Index: ${Number(key) + 1} | Tarefa: ${tasks[key]}`)
    }
    opcao = Number(readline.question("\nEscolha uma opcao: "))
    return opcao
}

function newAfazer() {
    tasks.push(readline.question("Informe uma nova tarefa: "))
    console.clear()
}

function verAfazer() {
    console.clear()
    for (const key in tasks) {
        console.log(`Index: ${Number(key) + 1} | Tarefa: ${tasks[key]}`)
    }
}

function apagarAfazer() {
    let qualApagar = Number(readline.question("Informe o index da tarefa que quer apagar: "))
    tasks.splice((qualApagar - 1), 1)
    console.clear()
}

function alterarAfazer() {
    let qualAlterar = Number(readline.question("Informe o index da tarefa que quer alterar: "))
    let alteracao = readline.question("Informe a nova tarefa: ")
    tasks[qualAlterar - 1] = alteracao
    console.clear()
}
do {
    menu()
    switch (opcao) {
        case 1:
            newAfazer()
            break;

        case 2:
            alterarAfazer()
            break;

        case 3:
            apagarAfazer()
            break;

        case 4:
            break;

        default:
            console.log("Informe uma opção valida!")
            break;
    }

} while (opcao != 4)

console.clear()
console.log("Obrigado e até mais!")