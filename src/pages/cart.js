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
            <div class="mx-6 mt-6">
            <h4 class="mt-2 mb-6 font-extrabold">GIỎ HÀNG CỦA BẠN </h4>
  <hr>
    <form action="">
    
      <table class="w-full text-center">
        <thead>
          <tr class="mt-4 font-extrabold">
            <th>Tên sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Chỉnh sửa</th>
          </tr>
        </thead>
        <tbody class="mt-6">
        ${cart.map(item => `
          <tr class="mt-6">
            <td>${item.name}</td>
            <td><img src="${item.img}" alt="" class="w-12"></td>
            <td>${item.price}</td>
            <td>
              <input data-id="${item.id}" class="btn btn-decrease border border-gray-200 w-6 bg-gray-200" type="button" value="-">
              <input class="border border-gray-200 pl-2" type="text" value="${item.quantity}" id="quantity" name="quantily" min="1">
              <input data-id="${item.id}" class="btn btn-increase border border-gray-200 w-6 bg-gray-200" type="button" value="+">
            </td>
            <td><button data-id="${item.id}" data-id="${item.id}" class="btn btn-remove w-16 h-6 border border-red-500 hover:bg-purple-500">xóa</button></td>
          </tr>
          `).join("")}
        </tbody>
      </table>
      <button class="border border-red-500 w-28 h-8 ml-10 mt-6 hover:bg-purple-500"><a href="/#/cart/checkout">Đặt hàng</a></button>
    </form>
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