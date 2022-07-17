import React,{useState} from 'react';
import './Articles.css';
import axios from "axios";

const url = "https://testfastapiw.herokuapp.com";
interface Data{
    time:number;
    comment:string;
}
function Articles() {
    const [comment, setComment] = useState("");
    const [state,setState]=useState([]);
    axios.get(url).then((res)=>{setState(res.data)})
    const listItems=state.map((data:Data)=>
        <p>{data.time}:{data.comment}</p>
    )
  // async function post(comment:string){
  //   const response=await fetch(`${url}`,{
  //     method:"POST",
  //     headers: {'Content-Type': 'application/json'},
  //     body:JSON.stringify({"comment":comment})
  //   })
  //   setComment("")
  //   return response.json()
  // }
    const push=(comment:string)=>{
        console.log(comment)
        setComment("")
    }
    return (
        <div className="App">
        <header className="App-header">
            <form>
            <input type="text" value={comment} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setComment(e.target.value)} id="comment"/>
            {/* <input type="button" onClick={()=>post(comment).catch((e)=>{console.log(e.message)}).then((data)=>{console.log(data)})} value="push"/> */}
            <input type="button" onClick={()=>{push(comment)}} value="push"/>
            </form>
            <div>{listItems}</div>
        </header>
        </div>
    );
}

export default Articles;
