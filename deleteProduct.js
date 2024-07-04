import { servicesProducts } from "./products-services.js";

const deletarProduto = async (id) => {
    if (confirm('Tem certeza que deseja deletar este produto?')) {
        try {
            await servicesProducts.deleteProduct(id);
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
};

export { deletarProduto };
