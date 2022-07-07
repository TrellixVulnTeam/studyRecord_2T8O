import * as fs from "fs";

interface Data{
    name:string,
    count:number,
}

function total(data:Data[]){
    data.forEach((i)=>{
        console.log(i.name+":"+i.count)
    })
}

const content=fs.readFileSync("data.json")
const data:Data[]=JSON.parse(content.toString());
total(data)