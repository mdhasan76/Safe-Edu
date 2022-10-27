import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../authContext/AuthProvider';
import { FaUserCircle } from 'react-icons/fa'
import Card from '../../courseCard/Card';

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const { title, price, teacher, time, course, img } = useLoaderData();
    const { displayName, email, photoURL, uid
    } = user;
    // console.log( user)
    return (
        <div>
            <div className="rounded-2xl shadow-xl max-w-xs my-3 bg-slate-200 mx-auto">
                <div className="flex justify-center">

                    {
                        photoURL != null ?
                            <img src={photoURL} className="rounded-full border-solid border-white border-2" alt="" /> :

                            <FaUserCircle className='text-8xl mt-3' />
                    }
                </div>
                <div className="text-center px-3 pb-6 pt-2">
                    <h3 className=" text-lg font-bold font-sans ">{displayName}</h3>
                    <p className="mt-2 font-sans font-light ">{email}</p>
                </div>
                <div className="pb-3">
                    <div className="text-center">
                    </div>
                    <div className="text-center">
                        <h2 className='text-[13px]'>ID: {uid}</h2>
                    </div>
                </div>
            </div>

            <div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={img} className="" alt="img" /></figure>
                    <div className="card-body">
                        <div className='flex justify-between mt-3 mb-2'>
                            <span className='bg-slate-200 text-lg font-semibold px-3 '>{teacher}</span>
                            <span className='bg-slate-200 text-lg font-semibold px-3 '> price {price}</span>
                        </div>
                        <h1 className='card-title bg-slate-100 font-mono'>Language: {course}</h1>
                        <h2 className="card-title">{title}</h2>
                        <div className="card-actions justify-end">
                            <Link className="btn btn-primary" to={`/courses/`}> see Other Course</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;