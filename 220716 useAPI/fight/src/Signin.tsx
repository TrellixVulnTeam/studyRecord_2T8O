import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import app from "./config"
import { Link } from 'react-router-dom'

function Signin(){
    const [userInfo,setUserInfo]=useState(
        {
            email:"",
            password:""
        }
    )
    const signinUser=()=>{
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
        .then((userCredential) => {
            console.log("success")
            // Signed in
            const user = userCredential.user;
            // ...
            setUserInfo({email:"",password:""})
        })
        .catch((e) => {
            console.log("faild")
            // console.log(e.message)
        });
    }
    return (
        <>
            <h1>authentication:signin</h1>
            <form>
                <input value={userInfo.email} type="email" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setUserInfo({...userInfo,email:e.target.value})} />
                <input value={userInfo.password} type="password" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setUserInfo({...userInfo,password:e.target.value})}/>
                <input type="button" value="NewUser" onClick={()=>signinUser()}></input>
            </form>
            <Link to="/signup"><p>新規登録</p></Link>
        </>
    )
}
export default Signin;