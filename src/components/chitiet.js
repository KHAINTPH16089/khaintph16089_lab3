import { get } from "../api/product";
import { addToCart } from '../utils/cart';
import "toastr/build/toastr.min.css";


const chitiet = {
    async render(id) {
        const { data } = await get(id);
        return /*html*/`
            
        `
    },
    afterRender(id) {
        const btnAddToCart = document.querySelector("#addToCart");
        btnAddToCart.addEventListener("click", async () => {
            const { data } = await get(id);
            addToCart({ ...data, quantity: 1 }, () => {
                console.log("được gọi sau khi add to cart nè");
            });
        });
    },
}
export default chitiet;