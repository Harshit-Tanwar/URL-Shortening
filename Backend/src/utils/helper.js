import { nanoid } from 'nanoid';
import JsonWebToken from 'jsonwebtoken';


export const generateNanoId = (length) => {
    return nanoid(length);
}

export const signToken = (payload) => {
    return JsonWebToken.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
}

export const verifyToken = (token) => {
    const decoded = JsonWebToken.verify(token, process.env.JWT_SECRET);
    return decoded.id;
}