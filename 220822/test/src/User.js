import React from 'react'
import { useNavigate } from "react-router-dom"

const User = () => {
    const auth = true
    const navigate = useNavigate()
    if (!auth) {
        navigate("/login")
    }
    return (
        <div>User</div>
    )
}

export default User