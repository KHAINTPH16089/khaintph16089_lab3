import Banner from "../components/Banner";
import newList from "../components/newlist";
import newlist_2 from "../components/newlist_2";
import header from "../components/header";
import footer from "../components/footer";
const homePage = {
    async render() {
        return /* html */`
        <div class="container-2xl mx-auto">
            <header id="header">
                ${header.render()}
            </header>
            <div>
                ${Banner.render()}
            </div>
            <main>
                <div class="news">
                    ${await newList.render()}
                </div>
            </main>
            <footer>
                ${footer.render()}
            </footer>
        </div>
        `;
    },
    afterRender(){
        header.afterRender();
    }
};
export default homePage;