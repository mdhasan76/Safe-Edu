import React from 'react';
import { Outlet } from 'react-router-dom';

const Courses = () => {
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