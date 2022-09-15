import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile , signOut} from "firebase/auth";
import app from "./initial"
import React, { useState } from 'react';
// import "./scss/login.scss"

function Login(){
    const [email,setMail]=useState("")
    const [password,setPass]=useState("")
    const [name,setName]=useState("")
    const hundleEmailChange=(event)=>{
        setMail(event.target.value)
    }
    const hundlePassChange=(event)=>{
        setPass(event.target.value)
    }
    const hundleNameChange=(event)=>{
        setName(event.target.value)
    }
    const auth = getAuth(app);
    const signup=()=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log("success")
            updateProfile(auth.currentUser, {
                displayName: name
            })
        })
        .catch((error) => {
            console.log("fallen")
        });
    }
    const signin=()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log("success")
        })
        .catch(() => {
            console.log("fallen")
        });
    }
    const signout=()=>{
        signOut(auth)
    }
    const checksign=()=>{
        const user = auth.currentUser;
        if (user !== null) {
            const uid=user.uid
            console.log(uid)
            window.location.href = '/user/'+uid;
        }else{
            console.log("not sign")
        }
    }
    return (
        <div className="Login container">
            <div className="signup col">
                <h5>サインアップ</h5>
                <div className="form-group">
                    <label>メールアドレス：</label>
                    <input className="mail form-control" type="email" onChange={hundleEmailChange}/>
                </div>
                <div className="form-group">
                    <label>パスワード：</label>
                    <input className="pass form-control" type="password" onChange={hundlePassChange}/>
                </div>
                <div className="form-group">
                    <label>ユーザーネーム：</label>
                    <input className="name form-control" type="text" onChange={hundleNameChange} />
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-secondary" onClick={signup}>signUp</button>
                </div>
            </div>
            <div className="signin col">
                <h5>サインイン</h5>
                <form className="form-group">
                    <label>メールアドレス：</label>
                    <input className="mail form-control" type="email" onChange={hundleEmailChange}/>
                </form>
                <form className="form-group">
                    <label>パスワード：</label>
                    <input className="pass form-control" type="password" onChange={hundlePassChange}/>
                </form>
                <form className="form-group">
                    <button type="button" className="btn btn-secondary" onClick={signin}>signIn</button>
                </form>
            </div>
            <div className="signout col">
                <h5>サインアウト</h5>
                <div className="form-group">
                    <button type="button" className="btn btn-secondary" onClick={signout}>signOut</button>
                </div>
            </div>
            <div className="checksign col">
                <h5>サイン認証</h5>
                <div className="form-group">
                    <button type="button" className="btn btn-secondary" onClick={checksign}>checkSign</button>
                </div>
            </div>
        </div>
    )
}
export default Login;