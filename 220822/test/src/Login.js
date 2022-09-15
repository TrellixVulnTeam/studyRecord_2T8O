import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import  app  from "./config"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const auth = getAuth(app);
    const navigate = useNavigate()
    const [email, setEmail] = useState("test@test.jp")
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const [password, setPassword] = useState("testTest")
    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    const create = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // console.log("success")
                navigate("/")
            })
            .catch((error) => {
                console.log("fallen")
            });
    }
    return (
        <>
            <div className='row'>
                <div className='col-6 offset-3'>
                    <form>
                        <h3>新しくアカウントを作成する</h3>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={changeEmail} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control form-control-sm" id="exampleInputPassword1" onChange={changePassword} />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={create}>Submit</button>
                    </form>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-6 offset-3'>
                    <p>すでに登録済みの方は<Link to="./already">こちら</Link>から</p>
                </div>
            </div>
        </>
    )
}

export default Login