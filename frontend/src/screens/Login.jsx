import React from 'react';

const Login = () => {
    return (
        <main className="flex items-center justify-center h-screen bg-gray-300">
            <div className="border-2 border-gray-300 bg-white p-4 w-96 shadow-md shadow-slate-600">
                <h1 className=' font-bold pb-5 text-2xl'>LOGIN</h1>
                <form action="">
                    <div className=' my-6'>
                        <input
                            type="text"
                            placeholder='Enter your Email'
                            className=' mb-5 border border-gray-400 p-2 w-full focus:outline-none'
                            required

                        />
                        <input
                            type="text"
                            placeholder='Enter your Password'
                            className=' mb-1 border border-gray-400 p-2 w-full'
                            required

                        />
                    </div>
                    <div className="flex justify-center mt-4">
                        <button className="border border-gray-400 bg-blue-700 text-white px-20 p-2 text-xl rounded-full">
                            LOGIN
                        </button>
                    </div>

                    <p className=''>Forget Passowrd?</p>
                </form>



            </div>
        </main>
    );
};

export default Login;
