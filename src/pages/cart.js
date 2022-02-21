import { reRender } from "../utils/index";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../utils/cart";
import toastr from 'toastr';
import "toastr/build/toastr.min.css";
import header from "../components/header";
import footer from "../components/footer";

const CartPage = {
    render(){
        let cart = [];
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'))
        }
        return /*html*/`
        <div class="container-2xl mx-auto">
            <header>
                ${header.render()}
            </header>
            <main>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Tên sản phẩm</th>
                                <th>Giá sản phẩm</th>
                                <th>Số lượng</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            ${cart.map(item => `
                                <tr>
                                    <td>${item.name}</td>
                                    <td>${item.price}</td>
                                    <td>
                                        <input type="number" value="${item.quantity}" class="border border-gray-500 p-2"/>
                                        <button data-id="${item.id}" class="btn btn-increase bg-green-500 p-2">Tăng</button>
                                        <button data-id="${item.id}" class="btn btn-decrease bg-orange-500 p-2">Giảm</button>
                                    </td>
                                    <td>
                                    <button data-id="${item.id}" data-id="${item.id}"n class="btn btn-remove bg-red-500 p-2">Xóa</button>
                                    </td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>
                    <a href="/cart/checkout"><button class="border border-red-500">Đặt hàng</button></a>
                </div>
            </main>
            <footer>
                ${footer.render()}
            </footer>
            
        </div>
        `
    },

    afterRender(){
        const btns = document.querySelectorAll('.btn');
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', () => {
                if(btn.classList.contains('btn-increase')){
                    increaseQuantity(id, () => reRender(CartPage, "#app"));
                } else if(btn.classList.contains('btn-decrease')){
                    decreaseQuantity(id, () => reRender(CartPage, "#app"));
                } else {
                    removeItemInCart(id, () => {
                        toastr.success("Xóa sản phẩm thành công");
                        reRender(CartPage, "#app")
                    })
                }
            })
        })
    }
}
export default CartPage;