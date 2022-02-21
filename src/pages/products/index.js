import { getAll } from '../../api/product';

const ProductPage = {
    async render() {
        const { data } = await getAll();
        return /* html */`
                <h2 class="font-semibold text-2xl my-4 text-blue-900 uppercase">Danh sách sản phẩm</h2>
                <div class="grid grid-cols-3 gap-8">
                    ${data.map((product) => /* html */`
                            <div class="border p-4">
                            <a href="/#/products/${product.id}">
                                <img src="${product.img}" alt="" />                    
                            </a>
                            <h3 class="my-3">
                                <a  href="/#/products/${product.id}" 
                                    class="font-semibold text-orange-500 text-lg">
                                    ${product.name}
                                </a>
                            </h3>
                            <p class="text-sm text-gray-500">${product.desc} </p>
                        </div>
                    `).join("")}
                </div>
            `
    },
};
export default ProductPage;