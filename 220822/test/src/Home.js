import React from 'react'
import study from "./img/undraw_predictive_analytics_re_wxt8.svg"
import "./scss/home.scss"
import { Link } from "react-router-dom"

const Home = () => {
  const tags = ["受験英語", "受験数学", "受験物理", "プログラミング"]
  const Tags = (props) => {
    const listItems = tags.map((tagName) =>
      <li>
        <Link className="badge bg-primary m-1 fs-6 text-decoration-none" to={"/" + tagName}>
          #{tagName}
        </Link>
      </li>
    );
    return (
      <ul className='mt-3 list-unstyled d-flex flex-wrap'>{listItems}</ul>
    );
  }
  return (
    <>
      <div className='row'>
        <div className='col-4 pting offset-1'>
          <p className='fs-3 text-center'>成功者<span className='fs-4 mb-2'>から</span>学ぶ</p>
          <p className='fs-3 text-center'>あなたにあった<span className='fs-2'>勉強法</span><span className='fs-4 mb-2'>で</span></p>
          <p className='fs-3 text-center'>あなたの<span className='fs-2 text-primary'>夢</span><span className='fs-4 mb-2'>を叶えよう</span></p>
          <form className="mt-4 d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-secondary" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
          </form>
          <Tags />
        </div>
        <div className='col-6 offset-1'>
          <img className="mt-5 h-100" alt="studyimg" src={study} />
        </div>
      </div>
    </>
  )
}

export default Home