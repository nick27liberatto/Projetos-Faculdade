// Nicolas Liberatto Nune - 20/03 - Gerenciador de Arquivos JSON

const fs = require('fs');
const arquivo = '../dados/dados.json';

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

module.exports = { carregarDados, salvarDados }; 