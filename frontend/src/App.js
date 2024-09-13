import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Splash from './pages/Splash';
import Login from './components/LoginForm';
import Signup from './components/SignUpForm';
import Profile from './pages/Profile';
import Playlist from './pages/Playlist';
import Header from './components/Header';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Splash /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "home", element: <Home /> },
      { path: "profile/:id", element: <Profile /> },
      { path: "playlist/:id", element: <Playlist /> }
    ]
  }
])

class App extends React.Component {
  render(){
    return (
      <RouterProvider router={router}>
        <div>
          <Header />
          
        </div>
      </RouterProvider>
    );
  };
}

export default App;
