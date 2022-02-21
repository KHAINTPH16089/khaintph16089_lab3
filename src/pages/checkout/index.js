import header from "../../components/header";
import footer from "../../components/footer";
import checkout from "./checkout";

const checkoutpage = {
    render(){
        return/*html*/`
        <div class="container-2xl mx-auto">
            <header>
                ${header.render()}
            </header>
            <main>
                <div class="mt-4">
                    ${checkout.render()}
                </div>
            </main>
            <footer>
                ${footer.render()}
            </footer>
        </div>
        `;
    }
    
};
export default checkoutpage;