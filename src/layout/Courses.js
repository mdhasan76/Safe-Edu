import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import SideNav from '../sidenav/SideNav';

const Courses = () => {
    const courseData = useLoaderData();
    // console.log(courseData)

    return (
        <div className='sm:grid grid-cols-4'>
            <div className='col-span-1'>
                <ul className='menu bg-base-100 '>
                    {
                        courseData.map(course => <SideNav key={course.id} course={course} />)
                    }
                </ul>
            </div>
            <div className='col-span-3 p-6'>
                <Outlet />
            </div>
        </div>
    );
};

export default Courses;