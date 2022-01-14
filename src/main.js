import Navigo from 'navigo';
import AboutPage from "./pages/daotao";
import ContactPage from "./pages/contact";
import homePage from "./pages/home";
import NotFoundPage from "./pages/notFound";
import ProductPage from "./pages/product";
const router = new Navigo("/", {linksSelector: "a"});

const print = (content) => {
    document.querySelector("#app").innerHTML = content;
};

router.on({
    "/": () => {
        print(homePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/product": () => {
        print(ProductPage.render());
    },
    "/contact": () => {
        print(ContactPage.render());
    },
});
router.notFound(() => print(NotFoundPage.render()));
router.resolve();
