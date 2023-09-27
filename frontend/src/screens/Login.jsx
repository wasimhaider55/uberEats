import React from 'react';
import { AiFillFacebook, AiFillLinkedin, AiFillGoogleCircle } from "react-icons/ai"
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <main className="flex items-center justify-center h-screen bg-zinc-200 ">
            <div className="border-2 border-gray-300 bg-white p-4 w-96 shadow-md shadow-slate-600 rounded-xl">
                {/* from */}
                <form action="">
                    <h1 className=' font-semibold pb-5 text-2xl tracking-wide'>LOGIN</h1>
                    <div className='my-2'>
                        <p className=' text-zinc-700 font-semibold'>Email :</p>
                        <input
                            type="text"
                            placeholder='Enter your Email'
                            className='border border-gray-400 p-2 w-full focus:outline-none'
                            required

                        />
                    </div>
                    <div>
                        <p className=' text-zinc-700 font-semibold'>Password :</p>
                        <input
                            type="text"
                            placeholder='Enter your Password'
                            className=' border border-gray-400 p-2 w-full focus:outline-none'
                            required

                        />
                    </div>
                    <div className='flex pt-5 gap-5'>
                        <input type="checkbox" />
                        <p className=' '>Remember me ?</p>
                    </div>

                    <div className="mt-4">
                        <button className="border border-gray-400 bg-blue-700 text-white px-20 p-2 text-xl rounded-full w-full ">
                            LOGIN
                        </button>
                        <p className=' text-end'>Forgot Passowrd?</p>
                    </div>
                    <p className=' flex justify-center font-bold pb-3'>OR</p>

                    <div className='flex justify-evenly items-center text-3xl pb-3'>
                        <AiFillFacebook   className=' rounded-full text-blue-700 cursor-pointer'/>
                        <AiFillGoogleCircle className=' rounded-full text-orange-700 cursor-pointer'  />
                        <AiFillLinkedin  className=' rounded-full text-blue-700 cursor-pointer' />
                    </div>
                    <p className=' text-center text-zinc-500'>Need an Account? <Link to="/Signup"> <span className=' text-black font-semibold  underline'>Signup</span> </Link></p>

                </form>



            </div>
        </main>
    );
};

export default Login;
