const fs = require('fs');
const readline = require('readline');

// Criar interface para entrada do usuário no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const arquivo = 'dados.txt';

// Função para exibir o menu de opções
function mostrarMenu() {
    console.log("\n=== Gerenciador de Arquivo ===");
    console.log("1 - Criar/Adicionar conteúdo ao arquivo");
    console.log("2 - Ler o conteúdo do arquivo");
    console.log("3 - Sobrescrever o arquivo");1
    console.log("4 - Deletar o arquivo");
    console.log("5 - Sair");
    rl.question("Escolha uma opção: ", (opcao) => {
        switch (opcao) {
            case '1':
                adicionarConteudo();
                break;
            case '2':
                lerArquivo();
                break;
            case '3':
                sobrescreverArquivo();
                break;
            case '4':
                deletarArquivo();
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

// Criar ou adicionar conteúdo ao arquivo
function adicionarConteudo() {
    rl.question("Digite o conteúdo a ser adicionado: ", (conteudo) => {
        fs.appendFileSync(arquivo, conteudo + '\n');
        console.log("Conteúdo adicionado com sucesso!");
        mostrarMenu();
    });
}

// Ler o conteúdo do arquivo
function lerArquivo() {
    if (fs.existsSync(arquivo)) {
        const conteudo = fs.readFileSync(arquivo, 'utf8');
        console.log("\n=== Conteúdo do Arquivo ===");
        console.log(conteudo || "O arquivo está vazio.");
    } else {
        console.log("O arquivo ainda não foi criado.");
    }
    mostrarMenu();
}

// Sobrescrever o arquivo
function sobrescreverArquivo() {
    rl.question("Digite o novo conteúdo (isso apagará o conteúdo antigo): ", (conteudo) => {
        fs.writeFileSync(arquivo, conteudo + '\n');
        console.log("Arquivo sobrescrito com sucesso!");
        mostrarMenu();
    });
}

// Deletar o arquivo
function deletarArquivo() {
    if (fs.existsSync(arquivo)) {
        fs.unlinkSync(arquivo);
        console.log("Arquivo deletado com sucesso!");
    } else {
        console.log("O arquivo não existe.");
    }
    mostrarMenu();
}

// Iniciar o programa
mostrarMenu(); 