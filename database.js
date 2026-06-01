const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Define o caminho onde o arquivo do banco de dados será salvo
const dbPath = path.resolve(__dirname, 'banco.db');

// Conecta ao banco de dados (se o arquivo não existir, ele será criado automaticamente)
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
        console.log('Conectado com sucesso ao banco de dados SQLite.');
        
        // Cria a tabela de feedbacks se ela não existir
        db.run(`
            CREATE TABLE IF NOT EXISTS feedbacks (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                vai_almocar TEXT,
                segunda_proteina TEXT,
                qualidade_comida TEXT,
                data_registro DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `, (err) => {
            if (err) {
                console.error('Erro ao criar a tabela feedbacks:', err.message);
            } else {
                console.log('Tabela feedbacks verificada/criada com sucesso.');
            }
        });
    }
});

module.exports = db;