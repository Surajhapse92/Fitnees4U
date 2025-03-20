import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from './views/Home/Home';
import Signup from './views/Signup/Signup';
import Login from './views/Login/Login';
import About from './views/About/About';
import DietPlan from './views/DietPlan/DietPlan';
import MakeDiet from './views/MakeDiet/MakeDiet';
import Member from './views/Member/Member';
import Suplements from './views/Suplements/Suplements';
import BuyNow from './views/BuyNow/BuyNow';
import AdminLogin from './views/AdminLogin/AdminLogin';
import Admin from './views/Admin/Admin';
import ForgetPassword from './componets/ForgetPassword/ForgetPassword';
import Welcome from './views/Welcome/Welcome';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home />
  },
  {
    path : "/welcome",
    element : <Welcome />
  },
  {
    path : "/signup",
    element : <Signup />
  },
  {
    path : "/login",
    element : <Login />
  },
  {
    path : "/adminlogin",
    element : <AdminLogin />
  },
  {
    path : "/admin",
    element : <Admin />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/dietplan",
    element: <DietPlan />
  },
  {
    path: "/makediet",
    element: <MakeDiet />
  },
  {
    path: "/member",
    element: <Member />
  },
  {
    path: "/supplememts",
    element: <Suplements />
  },
  {
    path: "/buynow",
    element: <BuyNow />
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />
  },

  {
    path : "*",
    element : <h1>Not Found</h1>
  }
])

root.render(<RouterProvider router={router} />)
