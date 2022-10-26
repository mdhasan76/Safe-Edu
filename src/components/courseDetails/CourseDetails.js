import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDtails = useLoaderData();
    // console.log(courseDtails);
    return (
        <div>
            <p>Course Details page{courseDtails.id}</p>
        </div>
    );
};

export default CourseDetails;