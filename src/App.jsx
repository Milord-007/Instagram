import React from 'react';
import { useTranslation } from 'react-i18next';
import Switcher from './components/Switcher';
import { BrowserRouter as Router, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Layout from './layout/Layout'
import Home from './pages/Home/Home'
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile';
import EditProfile from './pages/EditProfile/EditProfile';
import EditPassword from './pages/EditPassword/EditPassword';


const router = createBrowserRouter([
   {
    path: "signUp",
    element:  <SignUp/> 
  },
  {
    path: "login",
    element:<Login/> 
  },
   {
    path: "/",
    element: <Layout/> ,
    children: [
      {
        index:true,
        element:  <Home/> 
      },

      {
        path: "message",
        // element: <Message/>
      },

      {
        path: "add",
        // element:  <Add/> 
      },

      {
        path: "top",
        // element:  <Top/>
      },

      {
        path: "like",
        // element: <Like/> 
      },
      {
        path: "Profile",
        element: <Profile/> 
      },
      {
        path: "editProfile",
        element:  <EditProfile/> 
      },
      {
        path: "editPassword",
        element: <EditPassword/> 
      },
      {
        path: "direct",
        // element: <Direct/>
      }
    ]
  }
   
  
])



const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <RouterProvider router={router}/>
      {/* <Blog/> */}
      {/* <div className="w-full flex justify-center">
        <select onChange={(e) => changeLanguage(e.target.value)}>
          <option value="en">En</option>
          <option value="ru">Ru</option>
        </select>
      </div> */}
      {/* <div className="dark:bg-black"> */}
        {/* <Switcher /> 939401739*/}
      {/* </div> */}
    </div>
  );
};

export default App;