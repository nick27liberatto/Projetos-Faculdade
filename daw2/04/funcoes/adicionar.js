// Nicolas Liberatto Nune - 20/03 - Gerenciador de Arquivos JSON

const { carregarDados, salvarDados } = require('./dados');
const { rl } = require('../index')

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

module.exports = { adicionarRegistro, rl }; 