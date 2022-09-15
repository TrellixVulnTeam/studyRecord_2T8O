import React from 'react'
import { Link } from "react-router-dom"

const Bottoms = () => {
    return (
        <div className='Bottoms container fixed-bottom'>
            <div className='row'>
                <div className='col'>
                    <Link to="/">
                        <button className='pull-right'>User画面</button>
                    </Link>
                    <Link to="/admin">
                        <button className='pull-right'>Admin画面</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Bottoms