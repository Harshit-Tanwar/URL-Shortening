
import { createShortUrlWithoutUser, createShortUrlWithUser } from '../services/shortUrlService.js';
import { findUrlFromShortUrl } from '../dao/shortUrlDao.js';

export const createShortUrl = async (req, res) => {
    const data = req.body;
    let shortUrl;
    if (req.user) {
        shortUrl = await createShortUrlWithUser(data.url, req.user._id , data.slug);
    } else {
        shortUrl = await createShortUrlWithoutUser(data.url);
    }
    res.send({shortUrl :process.env.APP_URL +  shortUrl});
};

export const redirectFromShortUrl = async (req, res) => {
    const { id } = req.params;
    const url = await findUrlFromShortUrl(id);
    res.redirect(url.originalUrl);
};

// export const getCustomShortUrl = async (req, res) => {
//    const {url , slug } = req.body;
//    const shortUrl = await createShortUrlWithUser(url, req.user._id, slug);
//    res.send({shortUrl :process.env.APP_URL +  shortUrl});
// }