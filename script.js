document.getElementById('feedbackForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const dados = {
        vai_almocar: document.getElementById('vai_almocar').value,
        segunda_proteina: document.getElementById('segunda_proteina').value,
        qualidade_comida: document.getElementById('qualidade_comida').value
    };

    try {
        const response = await fetch('http://localhost:3000/api/feedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });

        if (response.ok) {
            alert('Muito obrigado! Sua resposta foi registrada.');
            document.getElementById('feedbackForm').reset();
        }
    } catch (error) {
        console.error('Erro ao enviar feedback:', error);
    }
});