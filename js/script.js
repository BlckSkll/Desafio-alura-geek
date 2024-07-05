// Selecionar o container de produtos e o formulário
const productsContainer = document.querySelector("[data-product]");
const form = document.querySelector("[data-form]");

// Função para deletar um produto
async function deletarProduto(id) {
    if (confirm('Tem certeza que deseja deletar este produto?')) {
        try {
            // Simulação de exclusão (pode ser substituído por lógica real)
            console.log(`Produto com ID ${id} deletado`);
            const productCard = document.querySelector(`[data-id='${id}']`).closest('.card');
            if (productCard) {
                productCard.remove();
            }
            alert('Produto deletado com sucesso');
        } catch (err) {
            console.error("Erro ao deletar o produto:", err);
            alert('Não foi possível deletar o produto. Tente novamente mais tarde.');
        }
    }
}

// Função para criar o elemento de produto
function createElement(name, price, image, id) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
     <div class="img_container">
        <img src="${image}" alt="${name}" height="54px">
    </div>
    <div class="card_container__info">
        <p>${name}</p>
        <div class="card_container__value">
            <p>$ ${price}</p>
            <button class="delete-button" data-id="${id}">
                <img src="assets/lixeira.png" alt="Ícone lixeira" width="15px">
            </button>
        </div>
    </div>`;

    const deleteButton = card.querySelector(".delete-button");
    deleteButton.addEventListener('click', () => deletarProduto(id));

    productsContainer.appendChild(card);
    return card;
}

// Função para renderizar a lista de produtos a partir do JSON local
const render = async () => {
    try {
        // Simulação de requisição AJAX para obter dados do JSON
        const response = await fetch('database/db.json');
        const data = await response.json();
        const listProduct = data.products;

        listProduct.forEach(product => {
            productsContainer.appendChild(
                createElement(
                    product.name,
                    product.price,
                    product.image,
                    product.id
                )
            );
        });
    } catch (error) {
        console.log(error);
    }
}

// Evento de envio do formulário para criar um novo produto (simulado)
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    try {
        // Simulação de criação de produto (pode ser substituído por lógica real)
        const newProduct = {
            id: Math.floor(Math.random() * 1000) + 1,
            name,
            price,
            image
        };
        console.log(newProduct);
        alert('Produto adicionado com sucesso');
        productsContainer.appendChild(
            createElement(
                newProduct.name,
                newProduct.price,
                newProduct.image,
                newProduct.id
            )
        );
    } catch (err) {
        console.error(err);
        alert('Não foi possível adicionar o produto. Tente novamente mais tarde.');
    }
});

// Iniciar a renderização dos produtos
render();

// Função para atualizar a unidade vh customizada
function updateVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Atualiza a unidade vh quando o script é carregado
updateVH();

// Atualiza a unidade vh quando a janela é redimensionada
window.addEventListener('resize', updateVH);

