import db from "./config"
import { collection, getDocs, doc, query, onSnapshot, updateDoc } from "firebase/firestore"
import { useState, useEffect } from "react"
function Admin() {
    const changeTime = (before) => {
        const gap = new Date().getTime() - before
        if (gap < 60 * 1000) {
            return Math.trunc(gap / 1000) + "秒前"
        } else if (gap < 60 * 60 * 1000) {
            return Math.trunc(gap / 1000 / 60) + "分前"
        } else {
            return Math.trunc(gap / 1000 / 60 / 60) + "時間前"
        }
    }
    const q = query(collection(db, "waiters"))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        setList([])
        querySnapshot.forEach((doc) => {
            var l = doc.data()
            l.id = doc.id
            setList((list) => ([...list, l]))
        })
    })
    const setEnd = (id) => {
        const cityRef = doc(db, "waiters", id)
        updateDoc(cityRef, { state: "end" })
    }
    const setWait = (id) => {
        const cityRef = doc(db, "waiters", id)
        updateDoc(cityRef, { state: "wait" })
    }
    const [list, setList] = useState([])
    useEffect(() => {
        const postData = collection(db, "waiters")
        getDocs(postData).then((snapshot) => {
            setList([])
            snapshot.forEach((doc) => {
                var l = doc.data()
                l.id = doc.id
                setList((list) => ([...list, l]))
            })
        })
    }, [])
    var count = 0;
    const card = (state, name, time, id) => {
        if (!(state === "end")) {
            if (state === "wait") {
                return (
                    <div className="card mb-1 bg-warning">
                        <div className="card-body p-2">
                            {name},{state},{changeTime(time)}
                            <button className="btn btn-outline-primary btn-sm p-1 ms-2" onClick={() => { setEnd(id) }}>対応</button>
                            <button className="btn btn-outline-secondary btn-sm p-1 ms-2" onClick={() => { setEnd(id) }}>キャンセル</button>
                        </div>
                    </div>
                )
            }
            else {
                count++;
                if (count <= 3) {
                    return (
                        <div className="card mb-1">
                            <div className="card-body p-2">
                                {name},{state},{changeTime(time)}
                                <button className="btn btn-outline-primary btn-sm p-1 ms-2" onClick={() => { setEnd(id) }}>対応</button>
                                <button className="btn btn-outline-warning btn-sm p-1 ms-2" onClick={() => { setWait(id) }}>待機</button>
                                <button className="btn btn-outline-secondary btn-sm p-1 ms-2" onClick={() => { setEnd(id) }}>キャンセル</button>
                            </div>
                        </div>
                    )
                }
                else {
                    return (
                        <div className="card mb-1">
                            <div className="card-body p-2">
                                {name},{state},{changeTime(time)}
                                <button className="btn btn-outline-primary btn-sm p-1 ms-2" onClick={() => { setEnd(id) }}>対応</button>
                                <button className="btn btn-outline-secondary btn-sm p-1 ms-2" onClick={() => { setEnd(id) }}>キャンセル</button>
                            </div>
                        </div>
                    )
                }
            }
        }
    }
    return (
        <div className="Admin container pt-2">
            {list.sort((a, b) => a.time - b.time).map((i) =>
                card(i.state, i.name, i.time, i.id)
            )}
        </div>
    );
}

export default Admin;
