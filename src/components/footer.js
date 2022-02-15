const Banner = {
    render() {
        return /* html */`
        <div class="grid grid-cols-3 gab-4 px-20 pb-8 mt-8 bg-red-100 border border-t-2 border-purple-300 pt-4">
        <div>
          <h1 class="font-medium">PHÁP LÝ & CÂU HỎI</h1>
          <ul class="pr-20">
            <li class="hover:text-red-400 hover:border-b border-red-400"><a href="#">Tìm kiếm</a></li>
            <li class="hover:text-red-400 hover:border-b border-red-400"><a href="#">Giới thiệu</a></li>
            <li class="hover:text-red-400 hover:border-b border-red-400"><a href="#">Chính sách đổi trả</a></li>
            <li class="hover:text-red-400 hover:border-b border-red-400"><a href="#">Chính sách bảo mật</a></li>
            <li class="hover:text-red-400 hover:border-b border-red-400"><a href="#">Điều khoản dịch vụ</a></li>
          </ul>
        </div>
        <div>
          <h1>THÔNG TIN LIÊN HỆ</h1>
          <ul>
            <li>Địa chỉ ...</li>
            <li>Điện thoại: 0352606412</li>
            <li>Mail: rikkashop@gmail.com</li>
          </ul>
        </div>
        <div>

        </div>
      </div>
      <div class="bg-black">
        <p class="text-center text-white">Copyright © 2022 Rikka shop. Powered by kazuo</p>
      </div>
      `;
    },
};
export default Banner;