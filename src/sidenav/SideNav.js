import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = ({ course }) => {
    // console.log(course)
    return (
        <li className='hover-bordered rounded-lg' key={course.id}><Link to={'/courses/:id'}>{course}</Link></li>
    );
};

export default SideNav;