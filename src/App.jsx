import './App.css'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { login, logout } from './store/storeSlice'
import authService from './appwrite/auth'
import { Header, Footer } from './components/index'
import { Outlet } from 'react-router-dom'

function App() {

  const [loding, setLoding] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {

    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {

          dispatch(login(userData))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => { setLoding(false) })

  }, [])


  return !loding? <>
  <Header/>
  <main>
    <Outlet/>
  </main>
  <Footer/>

  </> : <div>Loading...</div>
}

export default App
