import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/nav/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;