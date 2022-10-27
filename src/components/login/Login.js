import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../authContext/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const Login = () => {
    const [errMsg, setErrMsg] = useState('');
    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    const handleLogIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setErrMsg('')
        signIn(email, password)
            .then(res => {
                console.log(res.user);
                toast.success("Log In Successful");
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err.message)
                setErrMsg(err.message);
            })


    }


    //Google Sign in 
    const handleGoogle = () => {
        googleSignIn()
            .then(res => {
                setErrMsg('')
                // console.log(res.user)
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err)
                setErrMsg(err.message)
            })
    }

    //github sign in
    const handleGithub = () => {
        githubSignIn()
            .then(res => {
                setErrMsg('')
                // console.log(res.user)
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err);
                setErrMsg(err.message)
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <p className="label-text-alt">No account yet? <Link to="/register" className='link link-hover text-blue-500'>Register</Link> now</p>
                                </label>
                            </div>
                            <p className='text-rose-600'>{errMsg}</p>
                            <div className="form-control mt-6">
                                <button className="btn bg-teal-500 border-none">Login</button>
                            </div>
                            <div className='mt-3'>
                                <div className="divider divider-vertical">OR</div>
                                <div className="form-control mb-2">
                                    <button onClick={handleGoogle} className="btn btn-outline btn-primary">Continew with Google</button>
                                </div>
                                <div className="form-control ">
                                    <button onClick={handleGithub} className="btn btn-outline">Continew With Github</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;