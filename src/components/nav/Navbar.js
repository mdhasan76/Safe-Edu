import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asssets/logo.jpg'
import { AuthContext } from '../authContext/AuthProvider';
import { FaUserCircle } from 'react-icons/fa'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user.photoURL)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('logOut successfull')
                toast.success('log out')
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <section className='bg-slate-100  sticky top-0 z-10'>
            <div className="navbar px-2 lg:px-5 mx-auto max-w-6xl ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/courses'}>Courses</Link></li>
                            <li><Link to={'/faq'}>FAQ </Link></li>
                            <li><Link to={'/blog'}>Blog</Link></li>
                            <li><Link to={'/login'}>Login</Link></li>
                            <li><Link to={'/register'}>Register</Link></li>
                        </ul>
                    </div>
                    <img className='h-12 rounded-full' src={logo} alt="" />
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl">Safe edu</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/courses'}>Courses</Link></li>
                        <li><Link to={'/faq'}>FAQ </Link></li>
                        <li><Link to={'/blog'}>Blog</Link></li>
                        <li><Link to={'/register'}>Register</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='tooltip tooltip-bottom' data-tip={user?.displayName}>
                        {
                            user?.photoURL != null
                                ?
                                <img src={user.photoURL
                                } alt="" className='h-8 rounded-full' /> :
                                <FaUserCircle className='text-2xl' />
                        }
                    </div>

                    <div className='ml-2'>
                        {
                            user?.uid ?
                                <button onClick={handleLogOut} className='btn btn-sm border-none'> Sign out</button> :
                                <button className=' btn btn-sm bg-teal-500 border-none'><Link to={'/login'}>Log In</Link></button>
                        }
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default Navbar;