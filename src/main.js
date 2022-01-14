import Navigo from 'navigo';
import AboutPage from "./pages/daotao";
import ContactPage from "./pages/contact";
import homePage from "./pages/home";
import NotFoundPage from "./pages/notFound";
import ProductPage from "./pages/product";
import trangchu from './pages/admin/trang_chu';
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
    "/admin/trang_chu": () =>{
        print(trangchu.render());
    },
});
router.notFound(() => print(NotFoundPage.render()));
router.resolve();
