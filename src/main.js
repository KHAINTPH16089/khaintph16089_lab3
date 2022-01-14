import Navigo from 'navigo';
import AboutPage from "./pages/daotao";
import ContactPage from "./pages/contact";
import homePage from "./pages/home";
import NotFoundPage from "./pages/notFound";
import ProductPage from "./pages/product";
import DashboardPage from './pages/dashboard';
import AdminNews from './pages/admin/news';
import AdminNewsAdd from './pages/admin/news/add';
import signup from './pages/sign/signup';
import edit from './pages/admin/news/id/edit';
import signin from './pages/sign/signin';

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
    "/admin/dashboard": () => print(DashboardPage.render()),
    "/admin/products": () => console.log("admin product"),
    "/admin/news": () => print(AdminNews.render()),
    "/admin/news/add": () => print(AdminNewsAdd.render()),
    "/admin/news/:id/edit": () => print(edit.render()),
    "/sign/signup": () => print(signup.render()),
    "/sign/signin": () => print(signin.render()),


});
router.notFound(() => print(NotFoundPage.render()));
router.resolve();
