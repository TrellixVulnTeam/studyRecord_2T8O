// import React from 'react';
import { useState } from 'react';
import { setConstantValue } from 'typescript';
import './App.scss';

function App() {
  const [color,setColor]=useState([
    {place:0,state:0},{place:1,state:0},{place:2,state:0},{place:3,state:0},
    {place:4,state:0},{place:5,state:1},{place:6,state:-1},{place:7,state:0},
    {place:8,state:0},{place:9,state:-1},{place:10,state:1},{place:11,state:0},
    {place:12,state:0},{place:13,state:0},{place:14,state:0},{place:15,state:0},
  ])
  const doit=(place:number)=>{
    console.log(place)
    setColor()
  }
  const items=color.map((i)=>{
    var classname="osero "
    switch (i.state) {
      case 0:
        classname+="none";
        break;
      case 1:
        classname+="white"
        break;
      case -1:
        classname+="black"
        break;
      default:
        break;
    }
    return (<li><div onClick={()=>{doit(i.place)}} className={classname}></div></li>)
  })
  return (
    <div className="App">
      <ul className="frame">
        {items}
      </ul>
    </div>
  );
}

export default App;
