import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from 'react-router-dom'
import app from "./config"

function Signup(){
    const [userInfo,setUserInfo]=useState(
        {
            email:"",
            password:""
        }
    )
    const createNewUser=()=>{
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            setUserInfo({email:"",password:""})
            // ...
        })
        .catch((e) => {
            console.log(e.message)
        });
    }
    return (
        <>
        <h1>authentication:signup</h1>
            <form>
                <input value={userInfo.email} type="email" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setUserInfo({...userInfo,email:e.target.value})} />
                <input value={userInfo.password} type="password" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setUserInfo({...userInfo,password:e.target.value})}/>
                <input type="button" value="NewUser" onClick={()=>createNewUser()}></input>
            </form>
            <Link to="/signin"><p>既存ユーザーでログイン</p></Link>

        </>
    )
}
export default Signup;