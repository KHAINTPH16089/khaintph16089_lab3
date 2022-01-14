import Banner from "../components/Banner";
import newList from "../components/newlist";
import newlist_2 from "../components/newlist_2";
import header from "../components/header";
import footer from "../components/footer";
const homePage = {
    render() {
        return /* html */`
        <div class="max-w-5xl mx-auto">
            <header>
                ${header.render()}
            </header>
            <main>
                <div class="banner">
                    ${Banner.render()}
                </div>
                <div class="news">
                    ${newList.render()}
                </div>
                <div class="news_2">
                    ${newlist_2.render()}
                </div>
            </main>
            <footer>
                ${footer.render()}
            </footer>
        </div>
        `;
    },
};
export default homePage;