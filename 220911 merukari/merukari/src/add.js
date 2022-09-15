import app from "./config"
import { getFirestore, collection, addDoc } from "firebase/firestore";

async function add(name) {
    const date = new Date()
    const db = getFirestore(app)
    try {
        const docRef = await addDoc(collection(db, "waiters"), {
            name: name,
            date: date.getDate(),
            state: "waiting"
        })
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
function first() {
    const names = ["yuta", "jiro", "sanji", "genji", "baroo"]
    add(names[0])
    setTimeout(() => {
        add(names[1])
    }, 10000);
    setTimeout(() => {
        add(names[2])
    }, 20000);
    setTimeout(() => {
        add(names[3])
    }, 30000);
    setTimeout(() => {
        add(names[4])
    }, 40000);
}
export default first