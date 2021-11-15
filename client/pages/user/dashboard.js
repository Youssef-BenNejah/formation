import { useContext,useState } from "react";
import { UserContext } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import { useRouter } from "next/router"
import CreatePostForm from "../../components/forms/CreatePostForm";
import axios from "axios";
import { toast } from "react-toastify";


const Dashboard = () => {
    const [state, setState] = useContext(UserContext);

    const [content, setContent] = useState("");
    const router = useRouter();
    const postSubmit = async (e) => {
        e.preventDefault();
        try{
            const {data} = await axios.post("/create-post",{content});
            if(data.error){
                toast.error(data.error)
            }else{
                toast.success("Post created")
                setContent("");
            }
        }catch(err){
            console.log(err)
        }
        
        


        console.log(content)
    }
    return (
        <UserRoute>
            <div className="container-fluid">
                <div className="row py-5 text-light bg-default-image">
                    <div className="col text-center">
                        <h1>News</h1>

                    </div>


                </div>
                <div className="row py-3">
                    <div className="col-md-8">
                        <CreatePostForm content={content} setContent={setContent} postSubmit={postSubmit}/>
                    </div>
                <div className="col-md-4">
                        sidebar

                 </div>
                </div>
            </div>
        </UserRoute>
    )
}
export default Dashboard