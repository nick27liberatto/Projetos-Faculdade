// Nicolas Liberatto Nune - 20/03 - Gerenciador de Arquivos JSON

const readline = require('readline');
const { carregarDados, salvarDados } = require('./dados');

// Remover um registro pelo ID
function removerRegistro(callback) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("Digite o ID do registro a ser removido: ", (id) => {
        let dados = carregarDados();
        const novosDados = dados.filter(registro => registro.id !== parseInt(id));

        if (dados.length === novosDados.length) {
            console.log("ID não encontrado.");
        } else {
            salvarDados(novosDados);
            console.log("Registro removido com sucesso!");
        }
        rl.close();
        callback();
    });
}

module.exports = { removerRegistro }; 