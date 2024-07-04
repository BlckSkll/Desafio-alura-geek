import { renderProducts } from "./services/renderProducts.js";
import { handleFormSubmit } from "./services/createProduct.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", handleFormSubmit);

renderProducts();
