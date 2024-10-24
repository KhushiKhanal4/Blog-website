import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout, Login } from './components/index.js'
import AddPost from "./pages/AddPost";
import Signup from './pages/Signup'
import EditPost from "./pages/EditPost";
import Post from "./pages/Post";
import AllPosts from "./pages/AllPosts";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//         children: [
//             {
//                 path: "/",
//                 element: <Home />,
//             },
//             {
//                 path: "/login",
//                 element: (
//                     <AuthLayout authentication={false}>
//                         <Login />
//                     </AuthLayout>
//                 ),
//             },
//             {
//                 path: "/signup",
//                 element: (
//                     <AuthLayout authentication={false}>
//                         <Signup />
//                     </AuthLayout>
//                 ),
//             },
//             {
//                 path: "/all-posts",
//                 element: (
//                     <AuthLayout authentication>
//                         {" "}
//                         <AllPosts />
//                     </AuthLayout>
//                 ),
//             },
//             {
//                 path: "/add-post",
//                 element: (
//                     <AuthLayout authentication>
//                         {" "}
//                         <AddPost />
//                     </AuthLayout>
//                 ),
//             },
//             {
//                 path: "/edit-post/:slug",
//                 element: (
//                     <AuthLayout authentication>
//                         {" "}
//                         <EditPost />
//                     </AuthLayout>
//                 ),
//             },
//             {
//                 path: "/post/:slug",
//                 element: <Post />,
//             },
//         ],
//     },
// ])


const router = createBrowserRouter(
    createRoutesFromElements(
        <Router path="/" element={<App />}>
            <Router path="/" element={<Home />} />

            <Router
                path="/login"
                element={
                    <AuthLayout authentication={false}>
                        <Login />
                    </AuthLayout>
                }
            />

            <Router
                path="/signup"
                element={
                    <AuthLayout authentication={false}>
                        <Signup />
                    </AuthLayout>
                }
            />

            <Router
                path="/all-posts"
                element={
                    <AuthLayout authentication>
                        {" "}
                        <AllPosts />
                    </AuthLayout>
                }
            />

            <Router
                path="/add-post"
                element={
                    <AuthLayout authentication>
                        {" "}
                        <AddPost />
                    </AuthLayout>
                } />

            <Router
                path="/edit-post/:slug"
                element={
                    <AuthLayout authentication>
                        {" "}
                        <EditPost />
                    </AuthLayout>
                }
            />

            <Router
                path="/post/:slug"
                element={<Post />}
            />
        </Router>

    )
)
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
)