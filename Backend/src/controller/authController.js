import { cookieOptions } from "../config/config.js";
import { loginUserService, registerUserService } from "../services/authService.js";   
import wrapAsync from "../utils/tryCatchWrapper.js";

export const register_user = wrapAsync( async (req, res) => {
    const {name , email, password} = req.body;
    const {token , user} = await registerUserService(name, email, password);
    req.user = user;
    // Attach user info to request object
    // Set the cookie with the token
    res.cookie("accessToken", token , cookieOptions);
    res.status(200).json({message:"Register successfully"});
})

export const login_user = wrapAsync( async (req, res) => {
    const { email, password } = req.body;
    const {token ,user } = await loginUserService(email, password);
    req.user = user// Attach user info to request object
    res.cookie("accessToken", token, cookieOptions);
    res.status(200).json({user , message: "Login successfully" });
})

export const logout_user = wrapAsync( async (req, res) => {
    res.clearCookie("accessToken", cookieOptions);
    res.status(200).json({ message: "Logout successfully" });
})

export const get_current_user = wrapAsync( async (req, res) => {    
    res.status(200).json({ user: req.user });
});