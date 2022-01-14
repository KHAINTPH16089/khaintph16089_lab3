const Banner = {
    render() {
        return `
        <div class="bg-blue-900 h-28">
      <img class="w-44 mx-96 pt-8" src="img/logo (1).png">
    </div>
    <div class="bg-orange-500 w-90 h-12 flex">
      <ul class="flex w-90 text-white">
        <li class="w-24 mt-3 px-3"><a href="">trang chủ</a></li>
        <li class="w-24 mt-3 px-3"><a href="about">Đào tạo</a></li>
        <li class="w-44 mt-3 px-3"><a href="contact">Hoạt động sinh viên</a></li>
        <li class="w-28 mt-3 px-3"><a href="#">tuyển sinh</a></li>
        <li class="w-24 mt-3 px-3"><a href="#">liên hệ</a></li>
      </ul>
      <div class="tim mx-8 mt-3">
        <form class="flex">
          <input class="" type="text" required>
          <button class="bg-blue-700 ml-1 text-white border-solid border-black border w-20" type="submit">tìm kiếm</button>
        </form>
      </div>
    </div>
        `;
    },
};
export default Banner;
