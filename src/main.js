import Navigo from 'navigo';
import AboutPage from "./pages/daotao";
import ContactPage from "./pages/contact";
import homePage from "./pages/home";
import NotFoundPage from "./pages/notFound";
import ProductPage from "./pages/product";
import DashboardPage from './pages/dashboard';
import AdminNews from './pages/admin/news';
import add from './pages/admin/news/add';
import AdminNewsAdd from './pages/admin/news/addnew';
import signup from './pages/sign/signup';
import edit from './pages/admin/news/edit';
import signIn from './pages/sign/signin';
import chiTietSanPham from './pages/chiTietSanPham';

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if(content.afterRender) content.afterRender(id);
};

router.on({
    "/": () => {
        print(homePage);
    },
    "/about": () => {
        print(AboutPage);
    },
    "/product": () => {
        print(ProductPage);
    },
    "/chitiet/:id": ({data}) => {
        print(chiTietSanPham, data.id);
    },
    "/contact": () => {
        print(ContactPage);
    },
    "/admin/dashboard": () => print(DashboardPage),
    "/admin/products": () => console.log("admin product"),
    "/admin/news": () => print(AdminNews),
    "/admin/news/addnew": () => print(AdminNewsAdd),
    "/admin/news/add": () => print(add),
    "/admin/news/:id/edit": () => print(edit),
    "/sign/signup": () => print(signup),
    "/sign/signin": () => print(signIn),


});
router.notFound(() => print(NotFoundPage));
router.resolve();
