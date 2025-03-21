// Nicolas Liberatto Nune - 20/03 - Gerenciador de Arquivos JSON

const { carregarDados, salvarDados } = require('./dados');
const { rl } = require('../index')

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

module.exports = { removerRegistro, rl }; 