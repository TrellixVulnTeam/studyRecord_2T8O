import {  useParams } from "react-router-dom";

function UserPage(){
    const params=useParams()
    const uid=params.userid
    if(uid==="nothing"){
        alert("ログインされておりません。ログイン画面に遷移します。")
        window.location.href="/login"
    }
    return (
        <div className="User">
            <p>{uid}</p>
        </div>
    )
}
export default UserPage