import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = ({ course }) => {
    // console.log(course)
    return (
        <li className='hover-bordered rounded-lg'><Link to={`/courses/${course.id}`}>{course.course}</Link></li>
    );
};

export default SideNav;