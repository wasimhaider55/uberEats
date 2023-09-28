import React from 'react';
import { Link } from "react-router-dom";
const Signup = () => {
    return (
        <main className="flex items-center justify-center h-screen bg-zinc-200 ">
            <div className="border-2 border-gray-300 bg-white p-4 w-96 shadow-md shadow-slate-600 rounded-xl">
                {/* from */}
                <form action="">
                    <h1 className=' font-bold pb-2 text-2xl tracking-wide text-center'>Signup</h1>
                    <div className='my-2'>
                        <p className=' text-zinc-700 font-semibold'>Name :</p>
                        <input
                            type="text"
                            name='name'
                            placeholder='Enter Full Name'
                            required
                            className='border border-gray-400 p-2 w-full focus:outline-none'
                        />
                        <p className=' text-zinc-700 font-semibold'>Email :</p>
                        <input
                            type="email"
                            name="email"
                            autoComplete="email"
                            required
                            placeholder='Enter your Email'
                            className='border border-gray-400 p-2 w-full focus:outline-none'

                        />
                    </div>
                    <div>
                        <p className=' text-zinc-700 font-semibold'> Create Password :</p>
                        <input
                            type="password"
                            name='password'
                            placeholder='Enter Password'
                            required
                            className=' border border-gray-400 p-2 w-full focus:outline-none'
                        />
                        <p className=' text-zinc-700 font-semibold'> Confirm Password :</p>
                        <input
                            type="password"
                            name='confirmPassword'
                            placeholder='Enter Confirm Password'
                            required
                            className=' border border-gray-400 p-2 w-full focus:outline-none'
                        />
                    </div>
                    <div className='flex pt-5 gap-5'>
                        <input
                            type="checkbox"
                            name="rememberMe"
                        />
                        <p className=' '>Remember me ?</p>
                    </div>

                    <div className="mt-4">
                        <button className="border border-gray-400 bg-blue-700 text-white px-20 p-2 text-xl rounded-full w-full ">
                            signup
                        </button>
                        <p className=' text-end'>Forgot Passowrd?</p>
                    </div>
                   
                    <p className=' text-center text-zinc-500'>Already have an account?<Link to="/Login"> <span className=' text-blue-800 font-semibold'>Login now</span> </Link></p>

                </form>



            </div>
        </main>
    );
};

export default Signup;
