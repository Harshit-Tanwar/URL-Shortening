import { createUser, findUserByEmail, findUserByEmailAndPassword } from '../dao/userDao.js';
import { signToken } from '../utils/helper.js';

export const registerUserService = async (name, email, password) => {
    const user = await findUserByEmail(email);
    if (user) throw new Error('User already exists');
    const newUser = await createUser(name, email, password);
    if (!newUser) throw new Error('Error creating user'); // Check if user was created successfully    
    const token = signToken({ id: newUser._id });
    return { token, user };
};

export const loginUserService = async (email, password) => {
    const user = await findUserByEmailAndPassword(email, password);
    if (!user) throw new Error('User not found');
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) throw new Error('Invalid password');
    const token = signToken({ id: user._id });
    return { token, user };
}