import "./base.scss"

function Base(){
    return (
        <div className="base">
            <header>
                <div>
                    <h1>教科書シェア<i className="fa-solid fa-books"></i><span>for岩大生</span></h1>
                </div>
                <div>
                    <button>出品</button>
                    <button>サインイン</button>
                </div>
            </header>
        </div>
    )
}
export default Base