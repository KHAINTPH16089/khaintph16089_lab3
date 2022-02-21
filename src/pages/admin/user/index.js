import toastr from "toastr";
import navAdmin from "../../../components/navAdmin";
import { getAll, remove } from "../../../api/user";
import { reRender } from "../../../utils";

const adminProduct = {
    async render() {
        const { data } = await getAll();
        return /* html */ `
        ${navAdmin.render()}
        <div class="min-h-full">
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex-1 min-w-0">
                    <h2
                    class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                    >
                    Quản lý người dùng
                    </h2>
                </div>
                <div class="mt-5 flex lg:mt-0 lg:ml-4">
                    <a href="/#/admin/user/add" class="sm:ml-3">
                        <button
                            type="button"
                            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Thêm mới
                        </button>
                    </a>
                </div>
                </div>
            </div>
            </header>
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <!-- Replace with your content -->
                <div class="px-4 py-6 sm:px-0">
                <div
                    class="border-4 border-dashed border-gray-200 rounded-lg h-96"
                > 
                <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      tên sản phẩm
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      mô tả sản phẩm
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ảnh
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      giá
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">chỉnh sửa</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                ${data.map((post, index) => /*html*/`
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="">
                          <div class="text-sm font-medium text-gray-900">
                            ${post.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">${post.email}</div>
                      
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    <img src=" ${post.img}" width="100px">
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="/#/admin/product/${post.id}/edit" class="btn-edit inline-block px-4 py-2 text-white rounded bg-indigo-500 hover:bg-indigo-800">Edit</a>
                        <button data-id=${post.id} class="btn btn-remove inline-block px-4 py-2 text-white rounded bg-indigo-500 hover:bg-indigo-800">DELETE</button>
                    </td>
                  </tr>
                `).join("")}
                  
      
                  <!-- More people... -->
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
                </div>
                </div>
                <!-- /End replace -->
            </div>
            </main>
        </div>
        
                    
        `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
                if (confirm) {
                    remove(id).then(() => {
                        toastr.success("Bạn đã xóa thành công");
                        reRender(adminProduct, "#app");
                    });
                }
            });
        });
    },
};
export default adminUser;