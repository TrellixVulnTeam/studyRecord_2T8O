import React, { useState } from 'react'
import app from "./config"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {Link} from "react-router-dom"

const SignUp = () => {
    const [email, setEmail] = useState("tes@tes.jp")
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const [password, setPassword] = useState("Testing123")
    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    const auth = getAuth(app);
    const create = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    return (
        <div className='Sign container pt-5'>
            <div className='row'>
                <div className='col-8 offset-2'>
                    <form>
                        <h3>既存のアカウントでサインインする</h3>
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
                <div className='col-8 offset-2'>
                    <p>まだ登録されていない方は<Link to="signup">こちら</Link>から</p>
                </div>
            </div>
        </div>
    )
}

export default SignUp