import React,{useState,useEffect} from 'react';
import './Articles.css';
import { useCollection } from "react-firebase-hooks/firestore";
import axios ,{ AxiosRequestConfig, AxiosResponse, AxiosError }from "axios";
import {collection,getDocs,getFirestore} from "firebase/firestore"
import app from "./config"

const url = "https://testfastapiw.herokuapp.com";
interface Data{
    time:number;
    comment:string;
}
function Articles() {
    const [comment, setComment] = useState("");
    // const [state,setState]=useState([]);
    async function put(comment:string){
        const response=await fetch(`${url}`,{
        method:"POST",
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({"comment":comment})
        })
        setComment("")
        return response.json()
    }
    const [posts, setPosts] = useState([]);
    const db=getFirestore(app)
    return (
        <div className="App">
        <header className="App-header">
            <form>
            <input type="text" value={comment} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setComment(e.target.value)} id="comment"/>
            <input type="button" onClick={()=>put(comment).catch((e)=>{console.log(e.message)}).then((data)=>{console.log(data)})} value="push"/>
            </form>
            <div>
                {
                    posts.map((post:Data)=>(
                        <p>{post.time}:{post.comment}</p>
                    ))
                }
            </div>
        </header>
        </div>
    );
}

export default Articles;
