import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const { img, teacher, description, title, price, ratings, time, course } = useLoaderData();
    // console.log(courseDtails);
    return (
        <div className='mb-10'>
            <div className='bg-orange-300 p-5 my-2 text-center text-3xl font-semibold relative'>
                {course}
                <FaDownload className='absolute right-5 top-1/4 ' />
            </div>
            <div>
                <img src={img} className="w-full h-[350px]" alt="" />
            </div>
            <div className=''>
                <h3 className='text-3xl font-semibold mt-4'>{title}</h3>
                <p className='text-slate-500 text-lg my-2'>{description}</p>
                <p className='text-2xl font-semibold my-2'>Course Overview:</p>
                <div className='bg-slate-100 p-4 rounded-lg flex justify-between'>
                    <div>
                        <h3 className='font-semibold '>Created By: {teacher}</h3>
                        <h2 className='font-semibold py-2'>Duration: {time}</h2>
                        <h2 className='font-semibold'>Price: {price}</h2>
                    </div>
                    <div>
                        <div className="rating">
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                            <span className='text-lg ml-2 font-semibold'>{ratings}</span>
                        </div>

                    </div>
                </div>
                <div className='text-center mt-4'>
                    <Link to={'/checkout'} className="btn btn-success text-white">Get Premium Access</Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;