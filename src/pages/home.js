import Banner from "../components/Banner";
import newList from "../components/newlist";
import newlist_2 from "../components/newlist_2";

const homePage = {
    render() {
        return /* html */`
            <div class="banner">
                ${Banner.render()}
            </div>
            <div class="news">
                ${newList.render()}
            </div>
            <div class="news_2">
                ${newlist_2.render()}
            </div>
        `;
    },
};
export default homePage;