import toastr from "toastr";
import { reRender } from "../utils";
import "toastr/build/toastr.min.css";

const Banner = {
    render() {
        return /* html */`
        
      <div class="bg-blue-900 px-4 text-white flex">
        Rikka shop 
        <div class="flex">
          <a href="sign/signin">đăng nhập</a>
          <a href="sign/signup">đăng kí</a>
          </ul>
            ${localStorage.getItem("user") ? `<ul class="flex">
            <li><a  id="account-email" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white"></a></li>
            <li><a  id="logout" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white cursor-pointer">Logout</a></li>
        </ul>` : ""}
        </div>
      </div>
      <div class="bg-white-100 px-4 h-12 flex">
        
        <img class="p-1 " src="../../img/logo (1).png" alt="">
        
        <div>
          <ul class="flex mt-2 ml-40">
            <li class="ml-4 mr-4 pb-3 hover:text-purple-400 hover:border-b-4 border-purple-400 font-medium"><a href="">Trang chủ</a></li>
            <li class="ml-4 mr-4 pb-3 hover:text-purple-400 hover:border-b-4 border-purple-400 font-medium"><a href="product">Sản phẩm</a></li>
            <li class="ml-4 mr-4 pb-3 hover:text-purple-400 hover:border-b-4 border-purple-400 font-medium"><a href="about">Blog</a></li>
            <li class="ml-4 mr-4 pb-3 hover:text-purple-400 hover:border-b-4 border-purple-400 font-medium"><a href="contact">Giới thiệu</a></li>
            <li class="ml-4 mr-4 pb-3 hover:text-purple-400 hover:border-b-4 border-purple-400 font-medium"><a href="">Liên hệ</a></li>
          </ul>
        </div>
        <div class="flex ml-20">
          <i class="fa-thin fa-user"></i>
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-cart-plus"></i>
          <i class="fas fa-phone-alt header__call-icon mt-4 ml-12"></i>
        </div>
      </div>
      <div style="background-image: url('../../img/banner.jpg')" class="w-full bg-no-repeat bg-cover relative h-96">
        <div class="text-center pt-20 text-white font-medium">
          <p>RIKKA SHOP</p>
          <h1 class="text-3xl my-2">FIGURE ĐẸP, PHỤ KIỆN XỊN<br>GHÉ QUA RIKKA SHOP VÀ XÁCH ĐỒ VỀ.</h1>
          <p>Hàng chất lượng cao, chăm sóc khách hàng tận tình chu đáo</p>
          <button class="mx-4 border border-black rounded-2xl bg- bg-red-500 h-10 px-4  mt-3 roundef-full hover:bg-transparent hover:border-white transition-all">Xem sản phẩm</button>
        </div>
      </div>
        `;
    },
    afterRender() {
      const user = JSON.parse(localStorage.getItem("user"));
      const logout = document.querySelector("#logout");

      document.querySelector("#account-email").innerHTML = user.email;
      // logout
      logout.addEventListener("click", () => {
          toastr.success("Logout thành công");
          localStorage.removeItem("user");
          reRender(Header, "#header");
      });
    }
};
export default Banner;
