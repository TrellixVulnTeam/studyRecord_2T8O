import { Link ,NavLink} from "react-router-dom"
import "./scss/base.scss"

function Base() {
  return (
    <div className="Base">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand ms-2" to="/">fitWay</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink activeclassname="active" className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeclassname="active" className="nav-link" to="features">Features</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeclassname="active" className="nav-link" to="pricing">Pricing</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeclassname="active" className="nav-link" to="about">About</NavLink>
              </li>
            </ul>
          </div>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-secondary" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
          </form>
          <Link to="user">
            <button className="btn btn-outline-secondary" type="submit"><i className="fa-solid fa-user"></i></button>
          </Link>
        </div>
      </nav>
    </div>
  )
}
export default Base;