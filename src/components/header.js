import toastr from "toastr";
import { reRender } from "../utils/index";
import "toastr/build/toastr.min.css";

const Banner = {
    render() {
        return /* html */`
        
      <div class="bg-blue-600 pl-10 text-white flex">
      RIKKA SHOP - cung cấp đồ phụ kiện anime, cosplay chất lượng
        <div class="flex ml-96">
          ${localStorage.getItem("user") ? `<ul class="flex">
          
          <li><a  id="logout" class="px-4 py-5 hover:text-white cursor-pointer">Logout</a></li>
      </ul>` : `<ul class="flex">
      <li><a href="sign/signin" class="px-4 hover:text-white">Đăng Nhập</a></li>
      <li><a href="sign/signup" class="hover:text-white">Đăng ký</a></li>
      </ul>`}
        </div>
      </div>
      <div class="bg-white-100 px-4 h-12 flex">
        
        <img class="p-1 " src="../../img/logo (1).png" alt="">
        
        <div>
          <ul class="flex mt-2 ml-40">
            <li class="ml-4 mr-4 pb-3 hover:text-purple-400 hover:border-b-4 border-purple-400 font-medium"><a href="/">Trang chủ</a></li>
            <li class="ml-4 mr-4 pb-3 hover:text-purple-400 hover:border-b-4 border-purple-400 font-medium"><a href="product">Sản phẩm</a></li>
            <li class="ml-4 mr-4 pb-3 hover:text-purple-400 hover:border-b-4 border-purple-400 font-medium"><a href="about">Blog</a></li>
            <li class="ml-4 mr-4 pb-3 hover:text-purple-400 hover:border-b-4 border-purple-400 font-medium"><a href="contact">Giới thiệu</a></li>
            <li class="ml-4 mr-4 pb-3 hover:text-purple-400 hover:border-b-4 border-purple-400 font-medium"><a href="">Liên hệ</a></li>
          </ul>
        </div>
        <div class="flex ml-20 mt">
          <i class="fa-solid fa-magnifying-glass mt-4 ml-8"></i>
          <i class="fas fa-phone-alt header__call-icon mt-4 ml-4">  -0352606412</i>
          <a href="/cart"><i class="fa-solid fa-cart-plus mt-4 ml-8"></i></a> 
        </div>
      </div>
        `;
    },
    
    afterRender() {
      const user = JSON.parse(localStorage.getItem("user"));

      document.querySelector("#account-email").innerHTML = user.email;
      // logout
      var logout = document.querySelector("#logout");
      logout.onclick = function(){
        toastr.success("Bạn đã đăng xuất thành công");
        localStorage.removeItem("user");
        reRender(header, "#app");
      }
    }
};
export default Banner;
