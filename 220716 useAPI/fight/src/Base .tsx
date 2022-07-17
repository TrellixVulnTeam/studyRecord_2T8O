import {getAuth,signOut,onAuthStateChanged} from "firebase/auth"
import app from "./config"

const auth=getAuth(app)
const authCheck=()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            console.log(`signin as ${uid}`)
        // ...
        } else {
            console.log("not signin")
        // User is signed out
        // ...
        }
    });
}

function Base(){
    return (
        <>
            <button onClick={()=>signOut(auth)}>サインアウト</button>
            <button onClick={()=>authCheck()}>サイン状態確認</button>
        </>
    )
}
export default Base