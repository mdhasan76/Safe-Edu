import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../authContext/AuthProvider';

const Register = () => {
    const { createNewUser, updateUser } = useContext(AuthContext);

    const handleNewUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)

        createNewUser(email, password)
            .then(res => {
                console.log(res.user);
                form.reset()
                updateUser(name, photo)
                    .then(() => {
                        //
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (<div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register Now</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleNewUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photourl' placeholder="photo url" className="input input-bordered" />
                        </div>
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
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p className="label-text-alt">Have account ? please <Link to="/login" className='link link-hover text-blue-500'>login</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-teal-500 border-none">Register</button>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline btn-primary">Continew with Google</button>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline">Continew With Github</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;