import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function ProtectedAuth({ children, authentication = true }) {

    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        setLoader(true)
        if (authentication && authStatus !== authentication) {
            navigate('/login')
        }else if(!authentication && authStatus !== authentication){
            navigate('/')
        }
        setLoader(false)
    }, [authStatus, authentication,navigate])


    return loader?<div>Loding...</div>:<div>{children}</div>
}

export default ProtectedAuth