import React, { useState } from 'react'
import "./App.css"
import hiyokoP from "./image/hiyoko.png"
import kirinP from "./image/kirin.png"
import zouP from "./image/zou.png"
import raionP from "./image/raion.png"
import niwatoriP from "./image/niwatori.png"
import { useLocation } from 'react-router-dom'
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore"
import db from "./config"

const App = () => {
    // hiyoko,kirin,zou,raion,niwatori
    const sosu = [2, 3, 5, 7, 11, 13, 17]
    const [eneHiyoko, setEneHiyoko] = useState([33])
    const [eneKirin, setEneKirin] = useState([14])
    const [eneZou, setEneZou] = useState([35])
    const [eneRaion, setEneRaion] = useState([21])
    const [eneNiwatori, setEneNiwatori] = useState([])
    const [hiyoko, setHiyoko] = useState([39])
    const [kirin, setKirin] = useState([85])
    const [zou, setZou] = useState([34])
    const [raion, setRaion] = useState([51])
    const [niwatori, setNiwatori] = useState([])
    const [got, setGot] = useState([])
    const [selected, setSelected] = useState(10)
    const [selectedPlace, setSelectedPlace] = useState(0)
    const [order, setOrder] = useState(false)
    const [start, setStart] = useState(false)
    const [count, setCount] = useState(0)
    const server = useLocation().search.split("&")[0].split("=")[1]
    const ranNo = useLocation().search.split("&")[1].split("=")[1]
    const player = useLocation().search.split("&")[2].split("=")[1]
    const docRef = doc(db, "aniSyogi", server)
    const docSnap = getDoc(docRef)
    console.log(start)
    if (!start) {
        const unsub = onSnapshot(docRef, (doc) => {
            if (player === "A") {
                if (doc.data().playerB) {
                    if (doc.data().playerB > ranNo) {
                        alert("playerAさん、あなたは後攻です。ゲームを始めます。")
                        setStart(true)
                        updateDoc(docRef,
                            {
                                order: "B"
                            })
                    } else {
                        alert("playerAさん、あなたは先行です。ゲームを始めます。")
                        setStart(true)
                        setOrder(true)
                        updateDoc(docRef,
                            {
                                order: "A"
                            })
                    }
                }
            } else {
                docSnap.then((doc) => {
                    if (doc.data().playerA > ranNo) {
                        alert("playerBさん、あなたは後攻です。ゲームを始めます。")
                        setStart(true)
                    } else {
                        alert("playerBさん、あなたは先行です。ゲームを始めます。")
                        setStart(true)
                        setOrder(true)
                    }
                })
            }
        })
    } else {
        const unsub = onSnapshot(docRef, (doc) => {
            if (player === "A") {
                if (count > 0) {
                    setHiyoko(doc.data()["hiyokoA"])
                    setKirin(doc.data()["kirinA"])
                    setZou(doc.data()["zouA"])
                    setRaion(doc.data(["raionA"]))
                    setNiwatori(doc.data(["NiwatoriA"]))
                    setEneHiyoko(doc.data(["hiyokoB"]))
                    setEneKirin(doc.data(["kirinB"]))
                    setEneZou(doc.data(["zouB"]))
                    setEneRaion(doc.data(["raionB"]))
                    setEneNiwatori(doc.data(["niwatoriB"]))
                }
                if (doc.data().order === "A") {
                    if (!order) {
                        setCount(count + 1)
                    }
                    setOrder(true)
                }
            } else {
                if (count > 0) {
                    setHiyoko(doc.data()["hiyokoB"])
                    setKirin(doc.data()["kirinB"])
                    setZou(doc.data()["zouB"])
                    setRaion(doc.data(["raionB"]))
                    setNiwatori(doc.data(["NiwatoriB"]))
                    setEneHiyoko(doc.data(["hiyokoA"]))
                    setEneKirin(doc.data(["kirinA"]))
                    setEneZou(doc.data(["zouA"]))
                    setEneRaion(doc.data(["raionA"]))
                    setEneNiwatori(doc.data(["niwatoriA"]))
                }
                if (doc.data().order === "B") {
                    if (!order) {
                        setCount(count + 1)
                    }
                    setOrder(true)
                }
            }
        })
    }
    const turnEnd = () => {
        setOrder(false)
        if (player === "A") {
            updateDoc(docRef,
                {
                    order: "B",
                    hiyokoA: hiyoko,
                    kirinA: kirin,
                    zouA: zou,
                    raionA: raion,
                    niwatoriA: niwatori,
                    gotA: got,
                    hiyokoB: eneHiyoko,
                    kirinB: eneKirin,
                    zouB: eneZou,
                    raionB: eneRaion,
                    niwatoriB: eneNiwatori
                });
        } else {
            updateDoc(docRef,
                {
                    order: "A",
                    hiyokoA: eneHiyoko,
                    kirinA: eneKirin,
                    zouA: eneZou,
                    raionA: eneRaion,
                    niwatoriA: eneNiwatori,
                    hiyokoB: hiyoko,
                    kirinB: kirin,
                    zouB: zou,
                    raionB: raion,
                    niwatoriB: niwatori,
                    gotB: got
                });
        }
    }
    const toggleClick = (place) => {
        if (order) {
            var t = []
            sosu.forEach((s) => {
                if (place % s === 0) {
                    t.push(place / s)
                }
            })
            if (selected === 10) {
                if (!(hiyoko.indexOf(place) === -1)) {
                    hiyoko.splice(hiyoko.indexOf(place), 1)
                    setSelected(0)
                } else if (!(kirin.indexOf(place) === -1)) {
                    kirin.splice(kirin.indexOf(place), 1)
                    setSelected(1)
                } else if (!(zou.indexOf(place) === -1)) {
                    zou.splice(zou.indexOf(place), 1)
                    setSelected(2)
                } else if (!(raion.indexOf(place) === -1)) {
                    raion.splice(raion.indexOf(place), 1)
                    setSelected(3)
                } else if (!(niwatori.indexOf(place) === -1)) {
                    niwatori.splice(niwatori.indexOf(place), 1)
                    setSelected(4)
                }
                setSelectedPlace(place)
            } else {
                if (!(selectedPlace === 0)) {
                    var ts = []
                    sosu.forEach((s) => {
                        if (selectedPlace % s === 0) {
                            ts.push(selectedPlace / s)
                        }
                    })
                    if (selected === 0
                        && (place === sosu[sosu.indexOf(ts[0]) - 1] * ts[1])
                    ) {
                        if (place % 7 === 0) {
                            setNiwatori((niwatori) => ([...niwatori, place])).then(() => {
                                turnEnd()
                            })
                            setSelected(10)
                            getEne(place)
                            setSelectedPlace(0)
                        } else {
                            setHiyoko((hiyoko) => ([...hiyoko, place]))
                            turnEnd()
                            setSelected(10)
                            getEne(place)
                            setSelectedPlace(0)
                        }
                    } else if (selected === 1
                        && (place === sosu[sosu.indexOf(ts[0]) - 1] * ts[1] || place === sosu[sosu.indexOf(ts[0]) + 1] * ts[1] || place === sosu[sosu.indexOf(ts[1]) - 1] * ts[0] || place === sosu[sosu.indexOf(ts[1]) + 1] * ts[0])) {
                        setKirin((kirin) => ([...kirin, place])).then(() => {
                            turnEnd()
                        })
                        setSelected(10)
                        getEne(place)
                        setSelectedPlace(0)
                    } else if (selected === 2
                        && (place === sosu[sosu.indexOf(ts[0]) - 1] * sosu[sosu.indexOf(ts[1]) - 1] || place === sosu[sosu.indexOf(ts[0]) + 1] * sosu[sosu.indexOf(ts[1]) - 1] || place === sosu[sosu.indexOf(ts[0]) - 1] * sosu[sosu.indexOf(ts[1]) + 1] || place === sosu[sosu.indexOf(ts[0]) + 1] * sosu[sosu.indexOf(ts[1]) + 1])) {
                        setZou((zou) => ([...zou, place])).then(() => {
                            turnEnd()
                        })
                        setSelected(10)
                        getEne(place)
                        setSelectedPlace(0)
                    } else if (selected === 3
                        && (place === sosu[sosu.indexOf(ts[0]) - 1] * ts[1] || place === sosu[sosu.indexOf(ts[0]) + 1] * ts[1] || place === sosu[sosu.indexOf(ts[1]) - 1] * ts[0] || place === sosu[sosu.indexOf(ts[1]) + 1] * ts[0] || place === sosu[sosu.indexOf(ts[0]) - 1] * sosu[sosu.indexOf(ts[1]) - 1] || place === sosu[sosu.indexOf(ts[0]) + 1] * sosu[sosu.indexOf(ts[1]) - 1] || place === sosu[sosu.indexOf(ts[0]) - 1] * sosu[sosu.indexOf(ts[1]) + 1] || place === sosu[sosu.indexOf(ts[0]) + 1] * sosu[sosu.indexOf(ts[1]) + 1])) {
                        setRaion((raion) => ([...raion, place])).then(() => {
                            turnEnd()
                        })
                        setSelected(10)
                        getEne(place)
                        setSelectedPlace(0)
                    } else if (selected === 4
                        && (place === sosu[sosu.indexOf(ts[0]) - 1] * ts[1] || place === sosu[sosu.indexOf(ts[0]) + 1] * ts[1] || place === sosu[sosu.indexOf(ts[1]) - 1] * ts[0] || place === sosu[sosu.indexOf(ts[1]) + 1] * ts[0] || place === sosu[sosu.indexOf(ts[0]) - 1] * sosu[sosu.indexOf(ts[1]) - 1] || place === sosu[sosu.indexOf(ts[0]) - 1] * sosu[sosu.indexOf(ts[1]) + 1])) {
                        setNiwatori((niwatori) => ([...niwatori, place])).then(() => {
                            turnEnd()
                        })
                        setSelected(10)
                        getEne(place)
                        setSelectedPlace(0)
                    }
                } else {
                    switch (selected) {
                        case 0:
                            setHiyoko((hiyoko) => ([...hiyoko, place])).then(() => {
                                turnEnd()
                            })
                            setSelected(10)
                            setSelectedPlace(0)
                            break;
                        case 1:
                            setKirin((kirin) => ([...kirin, place])).then(() => {
                                turnEnd()
                            })
                            setSelected(10)
                            setSelectedPlace(0)
                            break;
                        case 2:
                            setZou((zou) => ([...zou, place])).then(() => {
                                turnEnd()
                            })
                            setSelected(10)
                            setSelectedPlace(0)
                            break;
                        default:
                            break;
                    }
                }
            }
        }
    }
    const MoveCheck = () => {
        var res = window.confirm("You win!\nCould you replay the game?");
        if (res === true) {
            window.location.reload()
        }
    }
    const getEne = (place) => {
        const l = [eneHiyoko, eneKirin, eneZou, eneRaion, eneNiwatori]
        for (let i = 0; i < 5; i++) {
            if (!(l[i].indexOf(place) === -1)) {
                switch (i) {
                    case 0:
                        setEneHiyoko((eneHiyoko) => ([eneHiyoko.splice(eneHiyoko.indexOf(place), 1)]))
                        setGot((got) => ([...got, 0]))
                        break
                    case 1:
                        setEneKirin((eneKirin) => ([eneKirin.splice(eneKirin.indexOf(place), 1)]))
                        setGot((got) => ([...got, 1]))
                        break
                    case 2:
                        setEneZou((eneZou) => ([eneZou.splice(eneZou.indexOf(place), 1)]))
                        setGot((got) => ([...got, 2]))
                        break
                    case 3:
                        MoveCheck()
                        break
                    case 4:
                        setEneNiwatori((eneNiwatori) => ([eneNiwatori.splice(eneNiwatori.indexOf(place), 1)]))
                        setGot((got) => ([...got, 0]))
                        break
                    default:
                        break
                }
            }
        }
    }
    const pickPiece = (piece) => {
        setSelected(piece)
        setGot((got) => ([got.splice(got.indexOf(piece), 1)]))
    }
    const getter = (a) => {
        switch (a) {
            case 0:
                return (
                    <div className='row'>
                        <div className='col p-2 border' onClick={() => { pickPiece(0) }}>
                            <img className="h-100 d-block mx-auto" alt="" src={hiyokoP} />
                        </div>
                    </div>
                )
            case 1:
                return (
                    <div className='row'>
                        <div className='col p-2 border' onClick={() => { pickPiece(1) }}>
                            <img className="h-100 d-block mx-auto" alt="" src={kirinP} />
                        </div>
                    </div>
                )
            case 2:
                return (
                    <div className='row'>
                        <div className='col p-2 border' onClick={() => { pickPiece(2) }}>
                            <img className="h-100 d-block mx-auto" alt="" src={zouP} />
                        </div>
                    </div>
                )
            default:
                break
        }
    }
    const turnChecker = () => {
        if (order) {
            return "yes"
        } else {
            return "no"
        }
    }
    const cel = (place) => {
        if (!(hiyoko.indexOf(place) === -1)) {
            return (
                <img className="h-100 d-block mx-auto" alt="" src={hiyokoP} />
            )
        } else if (!(kirin.indexOf(place) === -1)) {
            return (
                <img className="h-100 d-block mx-auto" alt="" src={kirinP} />
            )
        } else if (!(zou.indexOf(place) === -1)) {
            return (
                <img className="h-100 d-block mx-auto" alt="" src={zouP} />
            )
        } else if (!(raion.indexOf(place) === -1)) {
            return (
                <img className="h-100 d-block mx-auto" alt="" src={raionP} />
            )
        } else if (!(niwatori.indexOf(place) === -1)) {
            return (
                <img className="h-100 d-block mx-auto" alt="" src={niwatoriP} />
            )
        } else if (!(eneHiyoko.indexOf(place) === -1)) {
            return (
                <img className="rot h-100 d-block mx-auto" alt="" src={hiyokoP} />
            )
        } else if (!(eneKirin.indexOf(place) === -1)) {
            return (
                <img className="rot h-100 d-block mx-auto" alt="" src={kirinP} />
            )
        } else if (!(eneZou.indexOf(place) === -1)) {
            return (
                <img className="rot h-100 d-block mx-auto" alt="" src={zouP} />
            )
        } else if (!(eneRaion.indexOf(place) === -1)) {
            return (
                <img className="rot h-100 d-block mx-auto" alt="" src={raionP} />
            )
        } else if (!(eneNiwatori.indexOf(place) === -1)) {
            return (
                <img className="rot h-100 d-block mx-auto" alt="" src={niwatoriP} />
            )
        } else {
            return (
                <></>
            )
        }
    }
    return (
        <div className='App container'>
            <div className="row">
                <div className='col-2'>
                    <p>hiyoko:{hiyoko}</p>
                    <p>kirin:{kirin}</p>
                    <p>zou:{zou}</p>
                    <p>raion:{raion}</p>
                    <p>niwatori:{niwatori}</p>
                    <p>eneHiyoko:{eneHiyoko}</p>
                    <p>eneKirin:{eneKirin}</p>
                    <p>eneZou:{eneZou}</p>
                    <p>eneRaion:{eneRaion}</p>
                    <p>eneNiwatori:{eneNiwatori}</p>
                    <p>selected:{selected}</p>
                    <p>selectedPlace:{selectedPlace}</p>
                    <p>got:{got}</p>
                    <p>order:{turnChecker}</p>
                    <p>count:{count}</p>
                </div>
                <div className='col-6'>
                    <div className='row notrow'>サーバー名：{server},乱数：{ranNo},player:{player}</div>
                    <div className='row'>
                        <div className='col p-2 border' onClick={() => { toggleClick(14) }}>{cel(14)}</div>
                        <div className='col p-2 border' onClick={() => { toggleClick(21) }}>{cel(21)}</div>
                        <div className='col p-2 border' onClick={() => { toggleClick(35) }}>{cel(35)}</div>
                    </div>
                    <div className='row'>
                        <div className='col p-2 border' onClick={() => { toggleClick(22) }}>{cel(22)}</div>
                        <div className='col p-2 border' onClick={() => { toggleClick(33) }}>{cel(33)}</div>
                        <div className='col p-2 border' onClick={() => { toggleClick(55) }}>{cel(55)}</div>
                    </div>
                    <div className='row'>
                        <div className='col p-2 border' onClick={() => { toggleClick(26) }}>{cel(26)}</div>
                        <div className='col p-2 border' onClick={() => { toggleClick(39) }}>{cel(39)}</div>
                        <div className='col p-2 border' onClick={() => { toggleClick(65) }}>{cel(65)}</div>
                    </div>
                    <div className='row'>
                        <div className='col p-2 border' onClick={() => { toggleClick(34) }}>{cel(34)}</div>
                        <div className='col p-2 border' onClick={() => { toggleClick(51) }}>{cel(51)}</div>
                        <div className='col p-2 border' onClick={() => { toggleClick(85) }}>{cel(85)}</div>
                    </div>
                </div>
                <div className='col-2 ms-5'>
                    <div className='row notrow'>
                        手持ち
                    </div>
                    {got.map((a) =>
                        getter(a)
                    )}
                </div>
            </div>
        </div>
    )
}

export default App