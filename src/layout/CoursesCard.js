import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../courseCard/Card';

const CoursesCard = () => {
    const coursesData = useLoaderData();

    return (
        <div className='grid grid-cols-2 gap-4'>
            {
                coursesData.map(course => <Card courseData={course} key={course.id} />)
            }
        </div>
    );
};

export default CoursesCard;