import React ,{useState}from 'react'
import {Link,useNavigate} from "react-router-dom"
import {getAuth,signInWithEmailAndPassword} from "firebase/auth"
import app from "./config"

const Already = () => {
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
    const signin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
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
                    <h3>既存のアカウントでサインインする</h3>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp"onChange={changeEmail}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control form-control-sm" id="exampleInputPassword1"onChange={changePassword}/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary"onClick={signin}>Submit</button>
                </form>
            </div>
        </div>
        <div className='row mt-3'>
            <div className='col-6 offset-3'>
                <p>まだ登録されていない方は<Link to="/login">こちら</Link>から</p>
            </div>
        </div>
        </>
    )
}

export default Already