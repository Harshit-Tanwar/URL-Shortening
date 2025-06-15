import React, { useState } from 'react';
import { registerUser } from '../api/user.api';
import { login, register } from '../store/slice/authSlice';
import { useDispatch , useSelector } from 'react-redux';
import { useNavigate } from '@tanstack/react-router'; // Adjust the import path as necessary

const RegisterForm = ({state}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const auth = useSelector((state) => state.auth); // Uncomment if you need to access auth state
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        setLoading(true);
        setError('');

        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }
    
        try {
            await registerUser(name, email, password);
            dispatch(login({ name, email })); // Dispatch register action with user data
            navigate({ to: '/dashboard' }); // Redirect to dashboard after successful registration
            console.log("Registration successful");
            setLoading(false);
            state(true); // Switch to login form after successful registration
        }
        catch (err) {
            setError('Registration failed. Please try again.');
            setLoading(false);
        }

    }
    return (
        <div className="flex items-center justify-center w-1/3 bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

                <div className="space-y-5">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Name"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Email"
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
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {error && (
                        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
                            {error}
                        </div>
                    )}

                    <button 
                        type="submit"
                        onClick={handleSubmit}
                        disabled={loading}
                        className={`w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {loading ? 'Creating Account...' : 'Create Account'}
                    </button>
                </div>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{' '}
                       <span  onClick={() => state(true)}  className="text-blue-600 hover:underline cursor-pointer">
                            Log in
                        </span>
                </p>
            </div>
        </div>
    );
};

export default RegisterForm;
