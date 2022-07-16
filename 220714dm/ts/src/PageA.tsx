import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./config"

class PageA extends React.Component {
    initialValues:{
        email:string;
        password:string;
    }={
        email:"",
        password:"",
    };

    setEmail(e:React.ChangeEvent<HTMLInputElement>){
        this.initialValues.email=e.target.value;
    }
    setPassword(e:React.ChangeEvent<HTMLInputElement>){
        this.initialValues.password=e.target.value;
    }
    submit(e:React.FormEvent<HTMLInputElement>){
        const auth=getAuth(app)
        const {email,password}=this.initialValues
        console.log("hello")
        createUserWithEmailAndPassword(auth,email,password)
        .then(()=>{
            window.location.href = "/pageB";
        })
        .catch(()=>{
            window.location.href = "/pageC";
        })
        e.preventDefault();  
    }
    onSubmit(e:React.MouseEvent<HTMLButtonElement>){
        window.location.href = "/pageB";
    }

    render(): React.ReactNode {
        return (
            <>
                <h1>PageA</h1>
                <form>
                    <div>
                        <input type="email" name="email" onChange={(e) => this.setEmail(e)}/>
                    </div>
                    <div>
                        <input type="password" name="password" onChange={(e) => this.setPassword(e)}/>
                    </div>
                    <div>
                        <input type="submit" value="送信" onSubmit={(e)=>this.submit(e)}/>
                    </div>
                </form>
                <button onClick={(e)=>{this.onSubmit(e)}}>PageB</button>
            </>
        )
    }
}

export default PageA;