import React from 'react'
import { Link } from "react-router-dom"
import "./base.scss"

const Base = () => {
    return (
        <div className='Base sticky-top'>
            <div className='row bg-white container-fluid pt-1'>
                <div className='col-1 offset-1'>
                    <Link to="/" className='text-decoration-none text-warning'>
                        <h1 className='fs-2 mt-1'>fitWay</h1>
                    </Link>
                </div>
                <div className='col-8'>
                    <ul className="list-unstyled ps-3">
                        <li className='floatleft px-3 mt-2'><Link to="#" className='text-decoration-none text-dark'><p className='fs-4 mb-0'>あああ</p></Link></li>
                        <li className='floatleft px-3 mt-2'><Link to="#" className='text-decoration-none text-muted'><p className='fs-4 mb-0'>あああ</p></Link></li>
                        <li className='floatleft px-3 mt-2'><Link to="#" className='text-decoration-none text-muted'><p className='fs-4 mb-0'>あああ</p></Link></li>
                        <li className='floatleft px-3 mt-2'><Link to="#" className='text-decoration-none text-muted'><p className='fs-4 mb-0'>あああ</p></Link></li>
                        <li className='floatleft px-3 mt-2'><Link to="#" className='text-decoration-none text-muted'><p className='fs-4 mb-0'>あああ</p></Link></li>
                        <li className='floatleft px-3 mt-2'><Link to="signin" className='text-decoration-none text-muted'><p className='fs-4 mb-0'>signin</p></Link></li>
                        <li className='floatleft px-3 mt-2'><Link to="signup" className='text-decoration-none text-muted'><p className='fs-4 mb-0'>signup</p></Link></li>
                    </ul>
                </div>
                <div className='col-1 pt-2'>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </div>
            </div>
        </div>
    )
}

export default Base