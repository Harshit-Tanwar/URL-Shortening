import { findUserById } from "../dao/userDao.js";
import { verifyToken } from "../utils/helper.js";

export const authMiddleware = async (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token)
        return res.status(401).json({ message: "Unauthorized" });

    try {
        const decoded = verifyToken(token);
        const user = await findUserById(decoded); // Assuming you have a function to find user by ID
        req.user = user; // Attach user info to request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(403).json({ message: "Forbidden" });
    }
}