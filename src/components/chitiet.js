import axios from "axios";
import { get } from "../api/product";


const chitiet = {
    async render(id){
        const{ data } = await get(id);
        //const ketQua = data.find((product) => product.id === id);
        return /*html*/`
        <div class="container-2xl mx-auto mt-12">
    <div class="w-full grid grid-cols-5 gap-4 mx-4">
    <div class="col-span-3 px-12">
        <img class="w-full" src="${data.img}" alt="">
    </div>
    
    <div class="col-span-2">
        <h1 class="font-medium text-xl my-2">${data.ten}</h1>
        <hr>
        <p class="font-medium my-1">${data.gia}<u>đ</u></p>
        <hr>
        <div class="flex my-3">
        <input class="border border-gray-200 w-6 bg-gray-200" type="button" value="-" onclick="minusQuanlity()">
        <input class="border border-gray-200 pl-2" type="text" value="1" id="quantily" name="quantily" min="1">
        <input class="border border-gray-200 w-6 bg-gray-200" type="button" value="+" onclick="plusQuantily()">
        </div>
        <div>
        <button class="border border-gray-300 mt-4 w-40 h-10 bg-black text-white">CÒN HÀNG</button>
        <button class="border border-gray-300 mt-4 w-40 h-10 bg-purple-400 hover:bg-red-600 ml-2">MUA NGAY</button>
        </div>
        <div>
        
        </div>
    </div>
    </div>
    <div class="px-4 mt-12">
    <div class="text-center mt-4">
        <a href="#" class="text-2xl pt-8 hover:text-purple-400 border-b-4 border-purple-300 pb-2 font-medium">SẢN PHẨM LIÊN QUAN</a><br><br>
        <a href="#" class="hover:text-purple-400 mt-4">Xem thêm</a>
    </div>
    <div class="grid grid-cols-3 gap-8 mt-4">
        <div class="">
        <img class="w-full" src="../../img/img1.jpg" alt=""><br>
        <div class="text-center">
            <a href="#" class="hover:text-purple-400">Mô hình figure Takanashi Rikka... </a>
            <p class="text-sm font-medium">600.000<u>đ</u></p>
        </div>
        </div>
        <div class="">
        <img class="" src="../../img/1E435B63-A31E-4A11-BABB-5F969117DC61.jpg" alt=""><br>
        <div class="text-center">
            <a href="#" class="hover:text-purple-400">Mô hình figure Takanashi Rikka... </a>
            <p class="text-sm font-medium">600.000<u>đ</u></p>
        </div>
        </div>
        <div class="">
        <img class="" src="../../img/1E435B63-A31E-4A11-BABB-5F969117DC61.jpg" alt=""><br>
        <div class="text-center">
            <a href="#" class="hover:text-purple-400">Mô hình figure Takanashi Rikka... </a>
            <p class="text-sm font-medium">600.000<u>đ</u></p>
        </div>
        </div>
    </div>
    </div>
</div>
        `
    }
}
export default chitiet;