document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('item-form');
    const itemList = document.getElementById('item-list');
    const viewItemsBtn = document.getElementById('view-items-btn');

    // Carrega os itens do armazenamento local ao carregar a página
    loadItems();

    // Adiciona evento de envio do formulário
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const itemName = document.getElementById('item-name').value;
        const itemCode = document.getElementById('item-code').value;
        const itemExpiry = document.getElementById('item-expiry').value;

        const newItem = {
            name: itemName,
            code: itemCode,
            expiry: itemExpiry
        };

        addItemToList(newItem);
        saveItemToLocalStorage(newItem);
        form.reset();
    });

    // Redireciona para a página de consulta ao clicar no botão
    viewItemsBtn.addEventListener('click', function() {
        window.location.href = 'consulta.html';
    });

    // Adiciona evento de exclusão de itens
    itemList.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('delete')) {
            const listItem = event.target.parentElement;
            const itemName = listItem.querySelector('strong').textContent;
            if (confirm(`Tem certeza que deseja excluir o item "${itemName}"?`)) {
                deleteItemFromLocalStorage(itemName);
                listItem.remove();
            }
        }
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
            <button class="delete">Excluir</button>
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

    // Função para salvar um item no armazenamento local
    function saveItemToLocalStorage(item) {
        const items = getItemsFromLocalStorage();
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
    }

    // Função para excluir um item do armazenamento local
    function deleteItemFromLocalStorage(itemName) {
        const items = getItemsFromLocalStorage().filter(item => item.name !== itemName);
        localStorage.setItem('items', JSON.stringify(items));
    }

    // Função para obter os itens do armazenamento local
    function getItemsFromLocalStorage() {
        return JSON.parse(localStorage.getItem('items')) || [];
    }
});


