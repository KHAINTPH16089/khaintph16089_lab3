import { getAll } from "../api/product";
const newList = {
    async render() { 
      const {data} = await getAll();
      console.log(data);
        return /* html */`
        <div class="px-4">
          <div class="text-center mt-4">
            <a href="#" class="text-2xl pt-8 hover:text-purple-400 border-b-4 border-purple-300 pb-2 font-medium">SẢN PHẨM BÁN CHẠY</a><br><br>
            <a href="#" class="hover:text-purple-400 mt-4">Xem thêm</a>
          </div>
          <div class="grid grid-cols-4 gap-2 mt-4">
            ${data.map(function(data){
              return /*html*/`
              <div class="">
                <img class="w-full" src="${data.img}" alt=""><br>
                <div class="text-center">
                  <a href="chitiet/${data.id}" class="hover:text-purple-400">${data.ten}</a>
                  <p class="text-sm font-medium">${data.gia}<u>đ</u></p>
                </div>
              </div>
            `
            }).join("")}
            
          </div>
        </div>

          <div class="grid grid-cols-3 gap-0.5 mt-12">
            <div class=" w-full bg-no-repeat bg-cover relative h-60" style="background-image: url(./img/1E435B63-A31E-4A11-BABB-5F969117DC61.jpg);">
              <div class="text-center mt-28">
                <a href="#" class="text-3xl text-white hover:text-purple-400">GIẢM GIÁ</a>
                <hr class="w-28 mx-auto">
              </div>
            </div>
            <div class=" w-full bg-no-repeat bg-cover relative h-60" style="background-image: url(./img/1E435B63-A31E-4A11-BABB-5F969117DC61.jpg);">
              <div class="text-center mt-28">
                <a href="#" class="text-3xl text-white hover:text-purple-400">FIGURE</a>
                <hr class="w-28 mx-auto">
              </div>
            </div>
            <div class=" w-full bg-no-repeat bg-cover relative h-60" style="background-image: url(./img/1E435B63-A31E-4A11-BABB-5F969117DC61.jpg);">
              <div class="text-center mt-28">
                <a href="#" class="text-3xl text-white hover:text-purple-400">PHỤ KIỆN</a>
                <hr class="w-28 mx-auto">
              </div>
            </div>
          </div>

          <div class="px-4">
            <div class="text-center mt-4">
              <a href="#" class="text-2xl pt-8 hover:text-purple-400 border-b-4 border-purple-300 pb-2 font-medium">SẢN PHẨM MỚI</a><br><br>
              <a href="#" class="hover:text-purple-400 mt-4">Xem thêm</a>
            </div>
            <div class="grid grid-cols-4 gap-2 mt-4">
              <div class="">
                <img class="" src="./img/1E435B63-A31E-4A11-BABB-5F969117DC61.jpg" alt=""><br>
                <div class="text-center">
                  <a href="#" class="hover:text-purple-400">Mô hình figure Takanashi Rikka... </a>
                  <p class="text-sm font-medium">600.000<u>đ</u></p>
                </div>
              </div>
              <div class="">
                <img class="w-full" src="./img/img1.jpg" alt=""><br>
                <div class="text-center">
                  <a href="#" class="hover:text-purple-400">Mô hình figure Takanashi Rikka... </a>
                  <p class="text-sm font-medium">600.000<u>đ</u></p>
                </div>
              </div>
              <div class="">
                <img class="" src="./img/1E435B63-A31E-4A11-BABB-5F969117DC61.jpg" alt=""><br>
                <div class="text-center">
                  <a href="#" class="hover:text-purple-400">Mô hình figure Takanashi Rikka... </a>
                  <p class="text-sm font-medium">600.000<u>đ</u></p>
                </div>
              </div>
              <div class="">
                <img class="" src="./img/1E435B63-A31E-4A11-BABB-5F969117DC61.jpg" alt=""><br>
                <div class="text-center">
                  <a href="#" class="hover:text-purple-400">Mô hình figure Takanashi Rikka... </a>
                  <p class="text-sm font-medium">600.000<u>đ</u></p>
                </div>
              </div>
            </div>
          </div>
          <div class="px-4">
            <div class="text-center mt-4">
              <a href="#" class="text-2xl pt-8 hover:text-purple-400 border-b-4 border-purple-300 pb-2 font-medium">BÀI VIẾT MỚI</a><br><br>
              <a href="#" class="hover:text-purple-400 mt-4">Xem thêm</a>
            </div>
          </div>
        `;
    },
};
export default newList;