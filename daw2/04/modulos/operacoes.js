// Nicolas Liberatto Nune - 20/03 - Gerenciador de Arquivos JSON
const readline = require('readline');
const { carregarDados, salvarDados } = require('./arquivo');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Adicionar um novo registro
function adicionarRegistro(callback) {
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
            callback();
        });
    });
}


// Listar todos os registros
function listarRegistros(callback) {
    const dados = carregarDados();
    if (dados.length === 0) {
        console.log("Nenhum registro encontrado.");
    } else {
        console.log("\n=== Registros ===");
        dados.forEach(registro => {
            console.log(`ID: ${registro.id} | Nome: ${registro.nome} | Idade: ${registro.idade}`);
        });
    }
    callback();
}

// Atualizar um registro pelo ID
function atualizarRegistro(callback) {
    rl.question("Digite o ID do registro a ser atualizado: ", (id) => {
        let dados = carregarDados();
        const indice = dados.findIndex(registro => registro.id === parseInt(id));

        if (indice !== -1) {
            rl.question("Digite a nova idade: ", (novaIdade) => {
                dados[indice].idade = parseInt(novaIdade);
                salvarDados(dados);
                console.log("Registro atualizado com sucesso!");
                callback();
            });
        } else {
            console.log("ID não encontrado.");
            callback();
        }
    });
}

// Remover um registro pelo ID
function removerRegistro(callback) {
    rl.question("Digite o ID do registro a ser removido: ", (id) => {
        let dados = carregarDados();
        const novosDados = dados.filter(registro => registro.id !== parseInt(id));

        if (dados.length === novosDados.length) {
            console.log("ID não encontrado.");
        } else {
            salvarDados(novosDados);
            console.log("Registro removido com sucesso!");
        }
        callback();
    });
}

module.exports = { adicionarRegistro, listarRegistros, atualizarRegistro, removerRegistro, rl }; 