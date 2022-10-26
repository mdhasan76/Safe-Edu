import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courseData = useLoaderData();
    console.log(courseData)

    return (
        <div className='grid grid-cols-4'>
            <div className='col-span-1'>
                <ul className='menu bg-base-100 max-w-xs mx-auto'>
                    {
                        courseData.map(course => <li className='text-center hover-bordered rounded-lg' key={course.id}><Link to={'/courses/:id'}>{course.course}</Link></li>)
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