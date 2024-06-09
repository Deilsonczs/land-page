document.addEventListener('DOMContentLoaded', function() {
    const itemList = document.getElementById('item-list');
    const goBackBtn = document.getElementById('go-back-btn');

    // Carrega os itens do armazenamento local ao carregar a página
    loadItems();

    // Adiciona evento de clique no botão "Voltar"
    goBackBtn.addEventListener('click', function() {
        window.history.back(); // Volta para a página anterior
    });

    // Função para carregar os itens do armazenamento local
    function loadItems() {
        const items = getItemsFromLocalStorage();
        items.forEach(addItemToList);
    }

    // Função para adicionar um item à lista
    function addItemToList(item) {
        const listItem = document.createElement('li');
        const expiryDate = new Date(item.expiry);
        const currentDate = new Date();

        listItem.innerHTML = `
            <strong>${item.name}</strong> (${item.code}) - ${item.expiry}
        `;

        const daysUntilExpiry = Math.floor((expiryDate - currentDate) / (1000 * 60 * 60 * 24));

        if (daysUntilExpiry > 60) {
            listItem.classList.add('item-green');
        } else if (daysUntilExpiry > 30) {
            listItem.classList.add('item-yellow');
        } else if (daysUntilExpiry > 15) {
            listItem.classList.add('item-orange');
        } else {
            listItem.classList.add('item-red');
        }

        itemList.appendChild(listItem);
    }

    // Função para obter os itens do armazenamento local
    function getItemsFromLocalStorage() {
        return JSON.parse(localStorage.getItem('items')) || [];
    }
});

