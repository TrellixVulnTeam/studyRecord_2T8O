import "./scss/register.scss";
import { Link } from "react-router-dom";
import withuto from "./img/withuto.png";
import screenshot01 from "./img/screenshot01.png";
import screenshot02 from "./img/screenshot02.png";
import screenshot03 from "./img/screenshot03.png";

const texts = [
  {
    price: 800,
    src: "https://static.mercdn.net/item/detail/orig/photos/m20453928134_1.jpg?1508215149",
    name: "大学生のための化学",
    explain:
      "寺崎先生の授業での教科書です。状態は普通で、生協で購入したのでワンオーナーです。",
  },
  {
    price: 800,
    src: "https://images-na.ssl-images-amazon.com/images/I/71tl9tbfSHL.jpg",
    name: "大学生のための化学",
    explain:
      "寺崎先生の授業での教科書です。状態は普通で、生協で購入したのでワンオーナーです。",
  },
  {
    price: 800,
    src: "https://images-na.ssl-images-amazon.com/images/I/81BeJi6dcoL.jpg",
    name: "大学生のための化学",
    explain:
      "寺崎先生の授業での教科書です。状態は普通で、生協で購入したのでワンオーナーです。",
  },
  {
    price: 800,
    src: "https://i-like-it.jp/wp-content/uploads/2019/11/20191116_214527-1024x768.jpg",
    name: "大学生のための化学",
    explain:
      "寺崎先生の授業での教科書です。状態は普通で、生協で購入したのでワンオーナーです。",
  },
  {
    price: 800,
    src: "https://m.media-amazon.com/images/I/51ZEH41XxeL.jpg",
    name: "大学生のための化学",
    explain:
      "寺崎先生の授業での教科書です。状態は普通で、生協で購入したのでワンオーナーです。",
  },
  {
    price: 800,
    src: "https://static.mercdn.net/item/detail/orig/photos/m647352325_1.jpg?1514087641",
    name: "大学生のための化学",
    explain:
      "寺崎先生の授業での教科書です。状態は普通で、生協で購入したのでワンオーナーです。",
  },
  {
    price: 800,
    src: "https://static.mercdn.net/item/detail/orig/photos/m20453928134_1.jpg?1508215149",
    name: "大学生のための化学",
    explain:
      "寺崎先生の授業での教科書です。状態は普通で、生協で購入したのでワンオーナーです。",
  },
  {
    price: 800,
    src: "https://images-na.ssl-images-amazon.com/images/I/71tl9tbfSHL.jpg",
    name: "大学生のための化学",
    explain:
      "寺崎先生の授業での教科書です。状態は普通で、生協で購入したのでワンオーナーです。",
  },
  {
    price: 800,
    src: "https://images-na.ssl-images-amazon.com/images/I/81BeJi6dcoL.jpg",
    name: "大学生のための化学",
    explain:
      "寺崎先生の授業での教科書です。状態は普通で、生協で購入したのでワンオーナーです。",
  },
  {
    price: 800,
    src: "https://i-like-it.jp/wp-content/uploads/2019/11/20191116_214527-1024x768.jpg",
    name: "大学生のための化学",
    explain:
      "寺崎先生の授業での教科書です。状態は普通で、生協で購入したのでワンオーナーです。",
  },
  {
    price: 800,
    src: "https://m.media-amazon.com/images/I/51ZEH41XxeL.jpg",
    name: "大学生のための化学",
    explain:
      "寺崎先生の授業での教科書です。状態は普通で、生協で購入したのでワンオーナーです。",
  },
  {
    price: 800,
    src: "https://static.mercdn.net/item/detail/orig/photos/m647352325_1.jpg?1514087641",
    name: "大学生のための化学",
    explain:
      "寺崎先生の授業での教科書です。状態は普通で、生協で購入したのでワンオーナーです。",
  },
  {
    price: 800,
    src: "https://static.mercdn.net/item/detail/orig/photos/m20453928134_1.jpg?1508215149",
    name: "大学生のための化学",
    explain:
      "寺崎先生の授業での教科書です。状態は普通で、生協で購入したのでワンオーナーです。",
  },
  {
    price: 800,
    src: "https://images-na.ssl-images-amazon.com/images/I/71tl9tbfSHL.jpg",
    name: "大学生のための化学",
    explain:
      "寺崎先生の授業での教科書です。状態は普通で、生協で購入したのでワンオーナーです。",
  },
  {
    price: 800,
    src: "https://images-na.ssl-images-amazon.com/images/I/81BeJi6dcoL.jpg",
    name: "大学生のための化学",
    explain:
      "寺崎先生の授業での教科書です。状態は普通で、生協で購入したのでワンオーナーです。",
  },
  {
    price: 800,
    src: "https://i-like-it.jp/wp-content/uploads/2019/11/20191116_214527-1024x768.jpg",
    name: "大学生のための化学",
    explain:
      "寺崎先生の授業での教科書です。状態は普通で、生協で購入したのでワンオーナーです。",
  },
  {
    price: 800,
    src: "https://m.media-amazon.com/images/I/51ZEH41XxeL.jpg",
    name: "大学生のための化学",
    explain:
      "寺崎先生の授業での教科書です。状態は普通で、生協で購入したのでワンオーナーです。",
  },
  {
    price: 800,
    src: "https://static.mercdn.net/item/detail/orig/photos/m647352325_1.jpg?1514087641",
    name: "大学生のための化学",
    explain:
      "寺崎先生の授業での教科書です。状態は普通で、生協で購入したのでワンオーナーです。",
  },
  {
    price: 800,
    src: "https://static.mercdn.net/item/detail/orig/photos/m20453928134_1.jpg?1508215149",
    name: "大学生のための化学",
    explain:
      "寺崎先生の授業での教科書です。状態は普通で、生協で購入したのでワンオーナーです。",
  },
  {
    price: 800,
    src: "https://images-na.ssl-images-amazon.com/images/I/71tl9tbfSHL.jpg",
    name: "大学生のための化学",
    explain:
      "寺崎先生の授業での教科書です。状態は普通で、生協で購入したのでワンオーナーです。",
  },
  {
    price: 800,
    src: "https://images-na.ssl-images-amazon.com/images/I/81BeJi6dcoL.jpg",
    name: "大学生のための化学",
    explain:
      "寺崎先生の授業での教科書です。状態は普通で、生協で購入したのでワンオーナーです。",
  },
  {
    price: 800,
    src: "https://i-like-it.jp/wp-content/uploads/2019/11/20191116_214527-1024x768.jpg",
    name: "大学生のための化学",
    explain:
      "寺崎先生の授業での教科書です。状態は普通で、生協で購入したのでワンオーナーです。",
  },
  {
    price: 800,
    src: "https://m.media-amazon.com/images/I/51ZEH41XxeL.jpg",
    name: "大学生のための化学",
    explain:
      "寺崎先生の授業での教科書です。状態は普通で、生協で購入したのでワンオーナーです。",
  },
  {
    price: 800,
    src: "https://static.mercdn.net/item/detail/orig/photos/m647352325_1.jpg?1514087641",
    name: "大学生のための化学",
    explain:
      "寺崎先生の授業での教科書です。状態は普通で、生協で購入したのでワンオーナーです。",
  },
];
function Card(props) {
  return (
    <div className="carding">
      <div className="card">
        <img src={props.src} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <h5 className="card-title">{props.price}</h5>
          <p className="card-text">{props.explain}</p>
          <Link to="#" className="btn btn-primary">
            問い合わせる
          </Link>
        </div>
      </div>
    </div>
  );
}
function Register() {
  return (
    <div className="Register container pt-300">
      <div className="row">
        <div className="col-1 pt-2">
          <img
            src={withuto}
            className="withutoLogo float-end"
            alt="withutoLogo"
          />
        </div>
        <div className="col-3 pt-4 pl-4">
          <h1 className="fs-5 align-items-end">
            教科書サブスク<span className="fs-6">for岩手大学生</span>
          </h1>
        </div>
        <div className="col-7 offset-1">
          <nav class="navbar navbar-expand-lg navbar-light pt-0">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item pt-3">
                  <Link class="nav-link active" aria-current="page" to="#">
                    <p>ホーム</p>
                  </Link>
                </li>
                <li class="nav-item pt-3">
                  <Link class="nav-link" aria-current="page" to="#">
                    <p>出品する</p>
                  </Link>
                </li>
                <li class="nav-item pt-3">
                  <Link class="nav-link" to="#">
                    <p>マイページ</p>
                  </Link>
                </li>
                <li class="nav-item pt-3">
                  <Link
                    class="nav-link"
                    to="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    <p>問い合わせ</p>
                  </Link>
                </li>
              </ul>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="キーワードで検索"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  検索
                </button>
              </form>
            </div>
          </nav>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-3">
          <ul class="list-group">
            <li class="list-group-item active" aria-current="true">
              英語
            </li>
            <li class="list-group-item">ドイツ語</li>
            <li class="list-group-item">フランス語</li>
            <li class="list-group-item">ロシア語</li>
            <li class="list-group-item">中国語</li>
            <li class="list-group-item">韓国語</li>
            <li class="list-group-item">文化科目</li>
            <li class="list-group-item">社会科目</li>
            <li class="list-group-item">自然＆科学技術科目</li>
            <li class="list-group-item">環境科目</li>
            <li class="list-group-item">地域科目</li>
          </ul>
        </div>
        <div className="col-9">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner slideshow">
              <div className="carousel-item active">
                <img
                  src={screenshot01}
                  className="d-block w-100 h-50 border shadow"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={screenshot02}
                  className="d-block w-100 h-50 border shadow"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={screenshot03}
                  className="d-block w-100 h-50 border shadow"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        {texts.map((props) => (
          <div className="col-3 pt-3 pb-3">
            <Card
              name={props.name}
              src={props.src}
              price={props.price}
              explain={props.explain}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Register;
