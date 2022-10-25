import React from 'react';

const NotFound = () => {
    return (
        <div className='h-screen flex items-center justify-center text-center bx bg-gradient-to-r from-cyan-300 to-blue-300 '>
            <div >
                <h5 className='text-4xl font-semibold mb-4'>Opps! </h5>
                <h3 className='text-2xl'>This page is not found</h3>
            </div>
        </div>
    );
};

export default NotFound;