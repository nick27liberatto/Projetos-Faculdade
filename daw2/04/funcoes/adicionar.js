// Nicolas Liberatto Nune - 20/03 - Gerenciador de Arquivos JSON

const readline = require('readline');
const { carregarDados, salvarDados } = require('./dados');

// Adicionar um novo registro
function adicionarRegistro(callback) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

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
            rl.close();
            callback();
        });
    });
}

module.exports = { adicionarRegistro }; 