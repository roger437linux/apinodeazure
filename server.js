// Importa o módulo Express
const express = require('express');

// Cria uma instância do aplicativo Express
const app = express();

// Define a porta em que o servidor irá escutar
const PORT = process.env.PORT || 3000; // Usa a porta definida no ambiente ou 3000 como padrão

// Define uma rota GET para o caminho '/'
app.get('/', (req, res) => {
  // Cria o objeto JavaScript que será retornado
  const meuObjeto = {
    mensagem: 'Olá! Esta é uma API simples com NodeJS e Express.',
    autor: 'tux',
    data: new Date(),
    dados: [
      { id: 1, valor: 'Dado A' },
      { id: 2, valor: 'Dado B' },
      { id: 3, valor: 'Dado C' }
    ]
  };

  // Envia o objeto JavaScript como resposta JSON
  // O Express automaticamente define o Content-Type para application/json
  res.json(meuObjeto);
});

// Define uma rota GET para um caminho diferente, por exemplo '/outro-objeto'
app.get('/outro-objeto', (req, res) => {
  const outroObjeto = {
    titulo: 'Este é outro objeto',
    descricao: 'Retornado de uma rota diferente.',
    versao: '1.0.0'
  };
  res.json(outroObjeto);
});

// Inicia o servidor e o faz escutar na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Acesse em: http://localhost:${PORT}`);
  console.log(`Para o outro objeto, acesse em: http://localhost:${PORT}/outro-objeto`);
});
