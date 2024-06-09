function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Limpar a mensagem de erro inicialmente
    errorMessage.textContent = '';

    // Verificar se os campos estão vazios
    if (username === '' || password === '') {
        return; // Não fazer nada se os campos estiverem vazios
    }

    fetch('credentials.json')
        .then(response => response.json())
        .then(credentials => {
            const user = credentials.find(user => user.username === username && user.password === password);
            if (user) {
                window.location.href = 'controle.html'; // Substitua pelo URL da próxima página
            } else {
                errorMessage.textContent = 'usuario ou senha incorretos';
            }
        })
        .catch(error => {
            console.error('Erro ao ler o arquivo de credenciais:', error);
            errorMessage.textContent = 'Erro ao processar o login';
        });
}
