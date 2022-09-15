import db from "./config"
import { getDocs, addDoc, collection, query, onSnapshot } from "firebase/firestore"
import { useState, useEffect } from "react"
function User() {
  const [list, setList] = useState([])
  const [name, setName] = useState("")
  async function add(name) {
    try {
      const docRef = await addDoc(collection(db, "waiters"), {
        time: new Date().getTime(),
        name: name,
        state: "waiting"
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    document.getElementById("name").value = ""
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
  useEffect(() => {
    const postData = collection(db, "waiters")
    getDocs(postData).then((snapshot) => {
      setList(snapshot.docs.map((doc) => ({ ...doc.data() })))
    })
  }, [])
  var count = 0;
  const changeCount = (i) => {
    if (i < 10) {
      return "0" + String(i)
    } else {
      return String(i)
    }
  }
  const card = (state, name) => {
    if (!(state === "end")) {
      if (state === "wait") {
        return (
          <div className="card mb-1 bg-secondary">
            <div className="card-body text-light">
              {changeCount(count)} : {name} , すでに呼ばれています
            </div>
          </div>
        )
      }
      else if (count < 3) {
        count++;
        return (
          <div className="card mb-1 bg-warning">
            <div className="card-body">
              {changeCount(count)} : {name} , お戻りください
            </div>
          </div>
        )
      }
      else {
        count++;
        return (
          <div className="card mb-1">
            <div className="card-body">
              {changeCount(count)} : {name} , 待ち時間目安：{(count) * 5}分
            </div>
          </div>
        )
      }
    }
  }
  return (
    <div className="User container pt-2">
      <div className="card mb-2">
        <div className="card-body d-flex pt-2 pb-2">
          <input className="form-control me-3" id="name" type="text" onChange={(e) => setName(e.target.value)} placeholder="お名前をご記入ください" aria-label="default input example" />
          <button type="button"
            onClick={() => { add(name) }}
            className="btn btn-primary p-1 px-3"><i className="fa-solid fa-plus" /></button>
        </div>
      </div>
      {list.sort((a, b) => a.time - b.time).map((i) =>
        card(i.state, i.name)
      )}
    </div>
  );
}

export default User;