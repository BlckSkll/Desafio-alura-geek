import { servicesProducts } from "./products-services.js";
import { renderProducts } from "./renderProducts.js";

const handleFormSubmit = async (event) => {
    event.preventDefault();
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    try {
        const res = await servicesProducts.createProduct(name, price, image);
        console.log(res);
        alert('Produto adicionado com sucesso');
        renderProducts(); // Re-renderizar a lista
    } catch (err) {
        console.error(err);
        alert('Não foi possível adicionar o produto. Tente novamente mais tarde.');
    }
};

export { handleFormSubmit };
