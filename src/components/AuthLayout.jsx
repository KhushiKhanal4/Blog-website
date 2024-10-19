//protection management

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Protected({ children, authentication = true }) {
    const [loader, setLoader] = useState(true);
    const navigate = useNavigate()
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        }
        else if (!authentication && authStatus !== authentication) {
            navigate = ( "/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

    return (
        <div>AuthLayout</div>
    )
}

