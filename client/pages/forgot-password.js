import axios from 'axios';
import { toast } from 'react-toastify';
import { Modal } from 'antd';
import Link from 'next/dist/client/link';
// import AuthForm from '../components/forms/authForm';
import ForgotPasswordForm from '../components/forms/ForgotPasswordForm';

import {useContext,useState } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../context';


const ForgotPassword = () => {
    
    const [loading,setLoading]=useState(false);
    const [email, setEmail] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const [secret, setSecret] = useState('');
    const [ok, setOk] = useState(false);
    const [state, setstate] = useContext(UserContext)
    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { data } = await axios.post(`/forgot-password`,
                {
                
                    email,
                    newpassword,
                    secret
                }
            );
            console.log(data)
            if(data.error){
                toast.error(data.error);
                setLoading(false);
            }
            if(data.success){
                setEmail("");
                setNewPassword("");
                setSecret("");
                setOk(true) ;
                setLoading(false)
            }
        
        }

        catch (err) {
            toast.error(err.response.data);
            setLoading(false);
        }

    }
    if(state && state.token) router.push("/")


    return (
        
        <div className="container-fluid">
            <div className="row py-5 img-default  -light"  >
                <div className="col-4 text-center">
                </div>
            </div>
            <div className="row py-5">
                <div className="col-md-6 offset-md-3">
                   <ForgotPasswordForm
                    handleSubmit={handleSubmit}
                    email={email}
                    setEmail={setEmail}
                    newpassword={newpassword}
                    setNewPassword={setNewPassword}
                    secret={secret}
                    setSecret={setSecret}
                   
                   
                   />

                </div>
                 {loading ? <h1>Loading..</h1> : 
                   <div className="row">
                   <div className="col">
                       <Modal
                           title="congrat !"
                           visible={ok}
                           onCancel={() => setOk(false)}
                           footer={null}>
                           <p> Congrat ! You can now login</p>
                           <Link href="/login">
                               <a className="btn btn-primary btn-sm">Login</a>
                           </Link>

                       </Modal>
                   </div>

               </div>
               }
              
     
            </div>

        </div>
    )
}
export default ForgotPassword;