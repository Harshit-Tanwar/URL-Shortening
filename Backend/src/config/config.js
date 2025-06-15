export const cookieOptions = {
    httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    sameSite: 'lax', // Helps prevent CSRF attacks
    maxAge:  1000 * 60 * 60  // Cookie expiration time set to 5 minutes
};