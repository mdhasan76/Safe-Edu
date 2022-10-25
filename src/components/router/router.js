import React from 'react';
import { createBrowserRouter } from 'react-router-dom'
import Blog from '../blog/Blog';
import Faq from '../faq/Faq';
import Courses from '../../layout/Courses'
import Main from '../../layout/Main';
import Home from '../Home/Home';
import NotFound from '../404page/NotFound';
import Login from '../login/Login';
import Register from '../register/Register';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/faq',
                element: <Faq />
            },
            {
                path: '/courses',
                element: <Courses />,
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }

        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;