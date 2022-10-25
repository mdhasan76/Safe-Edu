import React from 'react';

const About = () => {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center my-8 max-w-3xl mx-auto'>
            <div className='mb-3'>
                <h2 className='text-4xl text-bold mb-2'>133+</h2>
                <p className='text-lg text-semibold'>Courses & Subject</p>
            </div>
            <div className='mb-3'>
                <h2 className='text-4xl text-bold mb-2'>20+</h2>
                <p className='text-lg text-semibold'>Instructors</p>
            </div>
            <div className='mb-3'>
                <h2 className='text-4xl text-bold mb-2'>3k+</h2>
                <p className='text-lg text-semibold'>Students</p>
            </div>
            <div className='mb-3'>
                <h2 className='text-4xl text-bold mb-2'>200K+</h2>
                <p className='text-lg text-semibold'>Lectures views</p>
            </div>
        </div>
    );
};

export default About;