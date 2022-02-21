const CartPage = {
    render(){
        return /*html*/`
        <h4 class="mr-6 ml-16 text-xl font-extrabold mb-2">Chi tiết đơn hàng</h4>
        <hr>
        <form action="">
          <div class="grid gap-4 grid-cols-2 ml-16 mt-3 mr-6">
            <div>
              <div>
                <label for="" class="font-semibold">Họ tên*</label><br>
                <input class="border border-gray-400 h-8 rounded-lg pl-1 w-full mt-3 mb-2" type="text" placeholder="nhập họ tên">
              </div>
              <div>
                <label for="" class="font-semibold">Địa chỉ*</label><br>
                <input class="border border-gray-400 h-8 rounded-lg pl-1 w-full mt-3 mb-2" type="text" placeholder="nhập địa chỉ">
              </div>
              <div class="grid grid-cols-2 gap-2">
                <div>
                  <label for="" class="font-semibold">Email*</label><br>
                  <input class="border border-gray-400 h-8 rounded-lg pl-1 w-full mt-3 mb-2" type="text" placeholder="nhập email">
                </div>
                <div>
                  <label for="" class="font-semibold">Số điện thoại*</label><br>
                  <input class="border border-gray-400 h-8 rounded-lg pl-1 w-full mt-3 mb-2" type="text" placeholder="nhập số điện thoại">
                </div>
              </div>
             
            </div>
            <div class="ml-36">
              <div class="w-60 bg-gray-100 p-3">
                <h4 class="font-extrabold mb-3">Sản phẩm của bạn</h4>
                <hr>
                <div class="my-3 mb-3"> <span class="float-left font-extrabold">Sản phẩm</span>  <span class="float-right">Giá</span> </div><br>
                <ul>
                  <li class="mt-1"> <span class="float-left">Cà rối</span>  <span class="float-right">12000 <u>đ</u> </span></li><br>
                </ul>
                <div class="my-2"> <span class="float-left font-extrabold">Tổng thành tiền</span> <span class="float-right">12000 <u>đ</u> </span> </div>
                <button class="bg-purple-400 mt-4 w-full h-10 text-white font-extrabold">ĐẶT HÀNG</button>
              </div>
              
            </div>
          </div>
        </form>
        `
    },
    afterRenden(){
      
    }
}
    
export default CartPage;