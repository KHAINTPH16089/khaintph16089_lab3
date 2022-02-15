import header from "../components/header";
import footer from "../components/footer";
import chitiet from "../components/chitiet";

const chiTietSanPham = {
    async render(id){
        return/*html*/`
        <div class="container-2xl mx-auto">
            <header>
                ${header.render()}
            </header>
            <main>
                <div>
                    ${await chitiet.render(id)}
                </div>
            </main>
            <footer>
                ${footer.render()}
            </footer>
        </div>
        `;
    }
};
export default chiTietSanPham;