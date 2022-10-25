import React from 'react';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../components/authContext/AuthProvider';

const Courses = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <div className='grid grid-cols-4'>
            <div className='col-span-1'>
                <h2>Left side menu</h2>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Courses;