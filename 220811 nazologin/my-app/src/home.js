import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import app from "./initial"
import { useState } from "react";

function Home(){
    const [uid,setUid]=useState("nothing")
    const auth=getAuth(app)
    const user = auth.currentUser;
    if(user){
        setUid(user.uid)
    }
    return (
        <div className="Home">
            <Link to="/login">
                <button type="button" className="btn  btn-warning">Login</button>
            </Link>
            <Link to={"/user/"+uid}>
                <button type="button" className="btn btn-danger">MyPage</button>
            </Link>
        </div>
    )
}
export default Home;