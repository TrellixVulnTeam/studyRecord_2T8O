import "./buy.scss"

function Buy(){
    const books=[
        {name:"力学の基礎",pictURL:"https://static.mercdn.net/item/detail/orig/photos/m40413060242_1.jpg?1586060060",price:1230},
        {name:"大学生のための化学の教科書",pictURL:"https://images-na.ssl-images-amazon.com/images/I/81BeJi6dcoL.jpg",price:1230},
        {name:"大学数学入門の教科書",pictURL:"https://images-na.ssl-images-amazon.com/images/I/719ypsgzClL.jpg",price:1230}
    ]
    return (
        <div className="Buy">
            <div className="texts">
                {books.map((c)=>{
            <div className="text">
                <img src={c.pictURL} alt="教科書の画像ファイル" >
                    <p className="price">{c.price}<span>円</span></p>
                </img>
                <div className="name">{c.name}</div>
            </div>
        })}
            </div>
        </div>
    )
}