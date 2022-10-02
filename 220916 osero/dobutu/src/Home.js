import React, { useEffect, useState } from 'react'
import db from './config'
import { collection, setDoc, doc, query, getDocs, onSnapshot, updateDoc, getDoc } from "firebase/firestore"
import "./Home.css"

const Home = () => {
    const [name, setName] = useState("")
    const [servers, setServers] = useState([])
    useEffect(() => {
        const postData = collection(db, "aniSyogi")
        getDocs(postData).then((snapshot) => {
            snapshot.docs.map((doc) => (doc.id))
            setServers(() => (snapshot.docs.map((doc) => (doc.id))))
        })
    })
    const q = query(collection(db, "aniSyogi"))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        setServers(() => querySnapshot.docs.map((doc) => (doc.id)))
    })
    const gotoApp = (locate, ranNo, player) => {
        window.location.href = "/app?serverName=" + locate + "&ran=" + ranNo + "&player=" + player
    }
    const makeServer = (locate) => {
        const ranNo = Math.floor(Math.random() * 1000000)
        if (!(name === "")) {
            setDoc(doc(db, "aniSyogi", name), {
                playerA: ranNo,
            }).then(() => {
                gotoApp(locate, ranNo, "A")
            })
        }
    }
    const gotoServer = (server) => {
        const ranNo = Math.floor(Math.random() * 1000000)
        const washingtonRef = doc(db, "aniSyogi", server)
        updateDoc(washingtonRef, {
            playerB: ranNo
        }).then(() => {
            gotoApp(server, ranNo, "B")
        })
    }
    const card = (server) => {
        // if("playerB" in getDoc(doc(db,"aniSyogi",server)).data()){
        return (
            <li className="list-group-item" onClick={(() => { gotoServer(server) })}>{server}</li>
        )
        // }
    }
    return (
        <div className='Home container'>
            <div className='row justify-content-center pt-3'>
                <div className='col-5'>
                    <div className="form-inline bg-light p-4 pt-3">
                        <label htmlFor="InputName">サーバー名：</label>
                        <div className="form-group d-flex flex-row height">
                            <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                            <button type="submit" onClick={() => makeServer(name)} className="btn btn-primary width">送信</button>
                        </div>
                    </div>
                </div>
                <div className='col-2 ms-5 card'>
                    <ul className="list-group list-group-flush">
                        {servers.map((server) =>
                            card(server)
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home