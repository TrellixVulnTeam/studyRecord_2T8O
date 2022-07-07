import React from 'react';
import './scss/Top.scss';

interface Class{
  classname:string,
  subject:string,
  classroom:string
}
const Monday:Class[]=[
{classname:"none",subject:"-----",classroom:"-----"},
{classname:"none",subject:"-----",classroom:"-----"},
{classname:"",subject:"電磁気学",classroom:"G1大"},
{classname:"",subject:"フーリエ解析",classroom:"GC2大"}
]
const Tuesday:Class[]=[
{classname:"",subject:"憲法",classroom:"G22"},
{classname:"",subject:"欧米の文学",classroom:"G22"},
{classname:"",subject:"物理学実験",classroom:"物理学実験室"},
{classname:"none",subject:"-----",classroom:"-----"}
]
const Wednesday:Class[]=[
{classname:"",subject:"電気回路学",classroom:"G301大"},
{classname:"",subject:"確率統計学",classroom:"テクノホール"},
{classname:"",subject:"幾何学",classroom:"資料配布"},
{classname:"none",subject:"-----",classroom:"-----"}
]
const Thursday:Class[]=[
{classname:"none",subject:"-----",classroom:"-----"},
{classname:"none",subject:"-----",classroom:"-----"},
{classname:"",subject:"応用微分方程式",classroom:"G36"},
{classname:"none",subject:"-----",classroom:"-----"}
]
const Friday:Class[]=[
{classname:"none",subject:"-----",classroom:"-----"},
{classname:"",subject:"ベクトル解析学",classroom:"資料配布"},
{classname:"",subject:"材料組織学Ⅰ",classroom:"テクノホール"},
{classname:"",subject:"化学実験",classroom:"化学実験室"}
]

function Top() {
  return (
    <div className="Top">
      <div className="timeschedule">
        <div className="day">{Monday.map((i)=>{return (<div className={i.classname}><p>{i.subject}</p><p>{i.classroom}</p></div>)})}</div>
        <div className="day">{Tuesday.map((i)=>{return (<div className={i.classname}><p>{i.subject}</p><p>{i.classroom}</p></div>)})}</div>
        <div className="day">{Wednesday.map((i)=>{return (<div className={i.classname}><p>{i.subject}</p><p>{i.classroom}</p></div>)})}</div>
        <div className="day">{Thursday.map((i)=>{return (<div className={i.classname}><p>{i.subject}</p><p>{i.classroom}</p></div>)})}</div>
        <div className="day">{Friday.map((i)=>{return (<div className={i.classname}><p>{i.subject}</p><p>{i.classroom}</p></div>)})}</div>
      </div>
      <div className='time'>
        <tr>
          <th className='num'><p>1限</p></th>
          <th className='term'><p>8:35-10:15</p></th>
        </tr>
        <tr>
          <th className='num'><p>2限</p></th>
          <th className='term'><p>10:30-12:10</p></th>
        </tr>
        <tr>
          <th className='num'><p>3限</p></th>
          <th className='term'><p>13:00-14:40</p></th>
        </tr>
        <tr>
          <th className='num'><p>4限</p></th>
          <th className='term'><p>14:55-16:35</p></th>
        </tr>
      </div>
      <div className="calendars">
        <img src="./images/calendar1.png" alt="calendar1" />
        <img src="./images/calendar2.png" alt="calendar2" />
      </div>
    </div>
  );
}



export default Top;
