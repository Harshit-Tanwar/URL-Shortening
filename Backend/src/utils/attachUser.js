import { verifyToken } from '../utils/helper.js'; // Assuming you have a helper file for token operations
import { findUserById } from '../dao/userDao.js'; // Assuming you have a user DAO to find user by ID


export const attachUser = async (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) {
        return next();
    }
    try {
        const decoded = verifyToken(token);
        const user = await findUserById(decoded); // Assuming User is a model imported from your models
        if (!user) return next();

        req.user = user// Attach user info to request object
        next();
    } catch (error) {
        next();
    }
}