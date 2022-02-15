import NavAdmin from "../../../components/NavAdmin";
import axios from "axios";
import { add } from "../../../api/product";

const AdminNewsAdd = {
    render(){
        return /* html */`
        
           `
    },
    afterRender() {
        const from = document.querySelector(".form-addProduct");
        const img = document.querySelector("#img");

        img.addEventListener("change", async (e) =>{
            const file = e.target.files[0];
            const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dbbbqe0vr/image/upload";

            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "pmvd0gxw");

            const { data } = await axios.post(CLOUDINARY_API,formData, {
                headers: {
                  "Content-Type": "application/x-www-formendcoded",
                },
              }
            );
            from.addEventListener("submit",(e) =>{
                e.preventDefault();
                add({
                    ten: document.querySelector("#ten").value,
                    img: data.url,
                    gia: document.querySelector("#gia").value
                });
                
            });
        });

        
    }
};
export default AdminNewsAdd;