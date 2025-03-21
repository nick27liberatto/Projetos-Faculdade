// Nicolas Liberatto Nune - 20/03 - Gerenciador de Arquivos JSON

const readline = require('readline');
const { carregarDados } = require('./dados');

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

module.exports = { listarRegistros }; 