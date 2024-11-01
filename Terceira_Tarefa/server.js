const express = require('express');
const app = express();
app.use(express.json());

// Lista inicial de receitas
const receitas = [
    { id: 1, titulo: 'Bolo de Chocolate', ingredientes: 'Farinha, Açúcar, Chocolate', instrucoes: 'Misture e asse' },
    { id: 2, titulo: 'Sopa de Legumes', ingredientes: 'Cenoura, Batata, Abobrinha', instrucoes: 'Cozinhe os legumes' }
];

// Rota para listar todas as receitas
app.get('/receitas', (req, res) => {
    res.json(receitas);
});

// Rota para obter uma receita por ID
app.get('/receitas/:id', (req, res) => {
    const receita = receitas.find(r => r.id == req.params.id);
    receita ? res.json(receita) : res.status(404).json({ mensagem: 'Receita não encontrada' });
});

// Rota para adicionar uma nova receita
app.post('/receitas', (req, res) => {
    const { titulo, ingredientes, instrucoes } = req.body;
    if (!titulo || !ingredientes || !instrucoes) {
        return res.status(422).json({ mensagem: 'Parâmetros incompletos' });
    }
    const novaReceita = { id: receitas.length + 1, titulo, ingredientes, instrucoes };
    receitas.push(novaReceita);
    res.status(201).json(novaReceita);
});

// Rota para atualizar uma receita por ID
app.put('/receitas/:id', (req, res) => {
    const { titulo, ingredientes, instrucoes } = req.body;
    const receita = receitas.find(r => r.id == req.params.id);
    if (receita) {
        receita.titulo = titulo || receita.titulo;
        receita.ingredientes = ingredientes || receita.ingredientes;
        receita.instrucoes = instrucoes || receita.instrucoes;
        res.json(receita);
    } else {
        res.status(404).json({ mensagem: 'Receita não encontrada' });
    }
});

// Rota para remover uma receita por ID
app.delete('/receitas/:id', (req, res) => {
    const indiceReceita = receitas.findIndex(r => r.id == req.params.id);
    if (indiceReceita >= 0) {
        receitas.splice(indiceReceita, 1);
        res.status(204).end();
    } else {
        res.status(404).json({ mensagem: 'Receita não encontrada' });
    }
});

app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
});