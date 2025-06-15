import React, { useState } from 'react';
import { loginUser } from '../api/user.api';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/slice/authSlice'; // Adjust the import path as necessary
import {useNavigate} from '@tanstack/react-router'


const LoginForm = ({ state }) => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        setLoading(true);
        setError('');

        try {
            const data = await loginUser(email, password);
            dispatch(login(data.user));
            navigate({ to: '/dashboard' }); // Adjust the path as necessary
            console.log("Sign in success");
            setLoading(false);
        }
        catch (err) {
            setError('Login failed. Please check your credentials.');
            setLoading(false);
        }
    }
    return (
        <div className="flex items-center justify-center w-1/3 bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                {error && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                        {error}
                    </div>
                )}
                <div className='mb-4 space-y-4'>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="email"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>
                        <a href="#" className="text-sm text-blue-600 hover:underline">
                            Forgot password?
                        </a>
                    </div>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className={`w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </div>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Don’t have an account?{' '} 
                    <span onClick={() => state(false)} className="text-blue-600 hover:underline cursor-pointer">
                        Create Account
                    </span>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
