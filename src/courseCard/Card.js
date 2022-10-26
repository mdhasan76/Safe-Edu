import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ courseData }) => {
    // console.log(courseData.rating)
    const { id, teacher, course, price, ratings, title, img } = courseData;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} className="h-full w-full" alt="Shoes" /></figure>
            <div className="card-body">
                <div className='flex justify-between mt-3 mb-2'>
                    <span className='bg-slate-200 text-lg font-semibold px-3 '>{teacher}</span>
                    <span className='bg-slate-200 text-lg font-semibold px-3 '> price {price}</span>
                </div>
                <h1 className='card-title bg-slate-100 font-mono'>Language: {course}</h1>
                <h2 className="card-title">{title}</h2>
                <div className="rating">
                    <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                    <span className='text-lg ml-2'>{ratings}</span>
                </div>
                <div className="card-actions justify-end">
                    <Link className="btn btn-primary" to={`/courses/${id}`}> See Dtails</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;