import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = ({ course }) => {
    // console.log(course)
    return (
        <li className='items-center hover-bordered rounded-lg font-semibold'><Link to={`/courses/${course.id}`}>{course.course}</Link></li>
    );
};

export default SideNav;