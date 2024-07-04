import { servicesProducts } from "./products-services.js";
import { deletarProduto } from "./deleteProduct.js";

const productsContainer = document.querySelector(".products-container");

// Função para criar o elemento de produto
function createElement(name, price, image, id) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <div class="img-container">
        <img src="${image}" alt="${name}" height="54px">
    </div>
    <div class="card-container--info">
        <p>${name}</p>
        <div class="card-container--value">
            <p>$ ${price}</p>
            <button class="delete-button" data-id="${id}">
                <img src="img/lixo.png" alt="Ícone" width="15px">
            </button>
        </div>
    </div>`;

    const deleteButton = card.querySelector(".delete-button");
    deleteButton.addEventListener('click', () => deletarProduto(id));

    productsContainer.appendChild(card);
    return card;
}

// Função para renderizar a lista de produtos
const renderProducts = async () => {
    try {
        const listProduct = await servicesProducts.productList();
        productsContainer.innerHTML = ''; // Limpar a lista existente

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
};

export { renderProducts };
