import { generateNanoId } from '../utils/helper.js';
import { saveShortUrlDao } from '../dao/shortUrlDao.js';
import { getCustomShortUrl } from '../dao/shortUrlDao.js';

export const createShortUrlWithoutUser = async (url) => {
    const short_Url = generateNanoId(7);
    // Check if the generated short URL already exists
    if (!short_Url) {
        throw new Error('Failed to generate a unique short URL');
    }
    saveShortUrlDao(short_Url, url);
    return short_Url;
}

export const createShortUrlWithUser = async (url, userId, slug) => {
    const short_Url = slug || generateNanoId(7);
    const exists = await getCustomShortUrl(slug);
    if (exists) {
        throw new Error('Short URL already exists');
    }
    saveShortUrlDao(short_Url, url, userId);
    return short_Url;
}
