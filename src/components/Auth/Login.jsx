import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        try {
            const loginSuccess = handleLogin ? handleLogin(email, password) : true
            
            if (loginSuccess) {
                const isAdmin = email === "admin@example.com"
                // showSuccessToast(isAdmin ? 'Welcome back, Admin! 👋' : 'Successfully logged in!')
                console.log(isAdmin ? 'Welcome back, Admin! 👋' : 'Successfully logged in!')
                setEmail("")
                setPassword("")
            } else {
                // showErrorToast('Invalid credentials. Please try again.')
                console.log('Invalid credentials. Please try again.')
            }
        } catch (error) {
            // showErrorToast('Login failed. Please check your credentials.')
            console.log('Login failed. Please check your credentials.')
        }
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center bg-[#05151a] p-4'>
            <div className='bg-[#1c1c1c] shadow-2xl rounded-3xl overflow-hidden w-full max-w-5xl flex min-h-[600px]'>
                
                {/* Left Side - Image Panel */}
                <div className='hidden lg:flex lg:w-1/2 relative  items-center justify-center p-12'>
                    <div className='absolute inset-0 '>
                        <div className='absolute inset-0 bg-[url("https://i.pinimg.com/1200x/87/99/06/879906d5d9fc255ebe8252a7671264e0.jpg")] bg-cover bg-center opacity-30'></div>
                            <div className='relative text-center text-white z-10 flex flex-col justify-center items-center h-full mt-40'>
                       
                             <h1 className='text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-50 bg-clip-text text-transparent'>
                              Task Flow
                             </h1>
                             <p className='text-lg text-white/80 leading-relaxed max-w-sm font-semibold'>
                                Create tasks, manage projects, and assign tasks and roles.
                             </p>
                
                    </div>
                    </div>
                
                    
                </div>

                {/* Right Side - Login Card Form */}
                <div className='w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12 bg-[#1a1a1a]'>
                    <div className='w-full max-w-md'>
                        <div className='text-center mb-8'>
                            <h2 className='text-3xl font-bold text-gray-100 mb-2'>Welcome Back</h2>
                        </div>
                        
                        <div className='space-y-6'>
                            <div className='relative'>
                                <input
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='w-full px-4 py-4 bg-[#2a2a2a] text-gray-100 rounded-xl border border-gray-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:bg-[#333333] transition-all duration-200 placeholder-gray-500'
                                    type="email"
                                    placeholder='Enter your email'
                                />
                                <div className='absolute inset-y-0 right-0 flex items-center pr-4'>
                                    <svg className='w-5 h-5 text-gray-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207' />
                                    </svg>
                                </div>
                            </div>
                            
                            <div className='relative'>
                                <input
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='w-full px-4 py-4 bg-[#2a2a2a] text-gray-100 rounded-xl border border-gray-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:bg-[#333333] transition-all duration-200 placeholder-gray-500'
                                    type="password"
                                    placeholder='Enter your password'
                                />
                                <div className='absolute inset-y-0 right-0 flex items-center pr-4'>
                                    <svg className='w-5 h-5 text-gray-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                                    </svg>
                                </div>
                            </div>
                        
                            <button onClick={submitHandler} className='w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/20 focus:ring-2 focus:ring-emerald-500/20'>
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login