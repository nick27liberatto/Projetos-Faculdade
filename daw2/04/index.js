// Nicolas Liberatto Nune - 20/03 - Gerenciador de Arquivos JSON

const funcoes = require('./modulos/modulos');
const readline = require('readline');

function mostrarMenu() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("\n=== Gerenciador de Dados JSON ===");
    console.log("1 - Adicionar novo registro");
    console.log("2 - Listar registros");
    console.log("3 - Atualizar idade de um registro");
    console.log("4 - Remover um registro");
    console.log("5 - Sair");

    rl.question("Escolha uma opção: ", (opcao) => {
        rl.close();
        switch (opcao) {
            case '1':
                funcoes.adicionar.adicionarRegistro(mostrarMenu);
                break;
            case '2':
                funcoes.listar.listarRegistros(mostrarMenu);
                break;
            case '3':
                funcoes.atualizar.atualizarRegistro(mostrarMenu);
                break;
            case '4':
                funcoes.remover.removerRegistro(mostrarMenu);
                break;
            case '5':
                console.log("Saindo...");
                rl.close();
                break;
            default:
                console.log("Opção inválida! Escolha uma opção entre 1 e 5.");
                mostrarMenu();
        }
    });
}

// Iniciar o programa
mostrarMenu(); 

