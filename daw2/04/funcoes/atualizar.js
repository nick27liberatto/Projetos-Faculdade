// Nicolas Liberatto Nune - 20/03 - Gerenciador de Arquivos JSON
// Atualizar um registro pelo ID

const readline = require('readline');
const { carregarDados, salvarDados } = require('./dados');

function atualizarRegistro(callback) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("Digite o ID do registro a ser atualizado: ", (id) => {
        let dados = carregarDados();
        const indice = dados.findIndex(registro => registro.id === parseInt(id));

        if (indice !== -1) {
            rl.question("Digite a nova idade: ", (novaIdade) => {
                dados[indice].idade = parseInt(novaIdade);
                salvarDados(dados);
                console.log("Registro atualizado com sucesso!");
                rl.close();
                callback();
            });
        } else {
            console.log("ID não encontrado.");
            rl.close();
            callback();
        }
    });
}

module.exports = { atualizarRegistro }; 