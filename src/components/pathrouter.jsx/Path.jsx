import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Login from "../Login/Login";
import Home from "../Home.jsx/Home";
import Profile from "../Home.jsx/Profile";
import Service from "../Home.jsx/Service";
import Register from "../Login/Register";
import PrivetRoute from "../privet/PrivetRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:([
            { 
            path:'/login',
            element:<Login></Login>
            },
            { 
            path:'/register',
            element:<Register></Register>
            },
           { 
            path:'/',
            element:<PrivetRoute><Home></Home></PrivetRoute>
            },
           { 
            path:'/profile',
            element:<PrivetRoute><Profile></Profile></PrivetRoute>
            },
           { 
            path:'/service',
            element:<PrivetRoute><Service></Service></PrivetRoute>
            },
            
          
        ])
    }
])

export default router;