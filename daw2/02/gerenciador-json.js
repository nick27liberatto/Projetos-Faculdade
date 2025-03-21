// Nicolas Liberatto Nune - 20/03 - Gerenciador de Arquivos JSON

const fs = require('fs');
const readline = require('readline');

// Criar interface para entrada do usuário no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const arquivo = 'dados.json';

// Função para carregar os dados do arquivo JSON
function carregarDados() {
    if (fs.existsSync(arquivo)) {
        const conteudo = fs.readFileSync(arquivo, 'utf8');
        return JSON.parse(conteudo || '[]');
    }
    return [];
}

// Função para salvar os dados no arquivo JSON
function salvarDados(dados) {
    fs.writeFileSync(arquivo, JSON.stringify(dados, null, 2));
}

// Exibir menu
function mostrarMenu() {
    console.log("\n=== Gerenciador de Dados JSON ===");
    console.log("1 - Adicionar novo registro");
    console.log("2 - Listar registros");
    console.log("3 - Atualizar idade de um registro");
    console.log("4 - Remover um registro");
    console.log("5 - Sair");
    
    rl.question("Escolha uma opção: ", (opcao) => {
        switch (opcao) {
            case '1':
                adicionarRegistro();
                break;
            case '2':
                listarRegistros();
                break;
            case '3':
                atualizarRegistro();
                break;
            case '4':
                removerRegistro();
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

// Adicionar um novo registro
function adicionarRegistro() {
    rl.question("Digite o nome: ", (nome) => {
        rl.question("Digite a idade: ", (idade) => {
            let dados = carregarDados();
            const novoRegistro = {
                id: dados.length + 1,
                nome: nome,
                idade: parseInt(idade)
            };
            dados.push(novoRegistro);
            salvarDados(dados);
            console.log("Registro adicionado com sucesso!");
            mostrarMenu();
        });
    });
}

// Listar todos os registros
function listarRegistros() {
    const dados = carregarDados();
    if (dados.length === 0) {
        console.log("Nenhum registro encontrado.");
    } else {
        console.log("\n=== Registros ===");
        dados.forEach(registro => {
            console.log(`ID: ${registro.id} | Nome: ${registro.nome} | Idade: ${registro.idade}`);
        });
    }
    mostrarMenu();
}

// Atualizar um registro pelo ID
function atualizarRegistro() {
    rl.question("Digite o ID do registro a ser atualizado: ", (id) => {
        let dados = carregarDados();
        const indice = dados.findIndex(registro => registro.id === parseInt(id));
        
        if (indice !== -1) {
            rl.question("Digite a nova idade: ", (novaIdade) => {
                dados[indice].idade = parseInt(novaIdade);
                salvarDados(dados);
                console.log("Registro atualizado com sucesso!");
                mostrarMenu();
            });
        } else {
            console.log("ID não encontrado.");
            mostrarMenu();
        }
    });
}

// Remover um registro pelo ID
function removerRegistro() {
    rl.question("Digite o ID do registro a ser removido: ", (id) => {
        let dados = carregarDados();
        const novosDados = dados.filter(registro => registro.id !== parseInt(id));
        
        if (dados.length === novosDados.length) {
            console.log("ID não encontrado.");
        } else {
            salvarDados(novosDados);
            console.log("Registro removido com sucesso!");
        }
        mostrarMenu();
    });
}

// Iniciar o programa
mostrarMenu();