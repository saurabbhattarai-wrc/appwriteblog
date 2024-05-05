import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AddPost, AllPosts, EditPost, Home, Post, Signup, Login } from './pages/index.js'

import { ProtectedAuth } from './components/index.js'
import ProfileCard from './components/profile/ProfileCard.jsx'


const route = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: (
                    <ProtectedAuth authentication={false}>
                        <Login />
                    </ProtectedAuth>
                ),
            },
            {
                path: "/signup",
                element: (
                    <ProtectedAuth authentication={false}>
                        <Signup />
                    </ProtectedAuth>
                ),
            },
            {
                path: "/all-posts",
                element: (
                    <ProtectedAuth authentication>
                        {" "}
                        <AllPosts />
                    </ProtectedAuth>
                ),
            },
            {
                path: "/add-post",
                element: (
                    <ProtectedAuth authentication>
                        {" "}
                        <AddPost />
                    </ProtectedAuth>
                ),
            },
            {
                path: "/edit-post/:slug",
                element: (
                    <ProtectedAuth authentication>
                        {" "}
                        <EditPost />
                    </ProtectedAuth>
                ),
            },
            {
                path: "/post/:slug",
                element: <Post />,
            },
            {
                path:'/profile-card',
                element:<ProfileCard/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={route} />
        </Provider>
    </React.StrictMode>,
)
