import urlSchema from '../models/shortUrl.model.js';

export const saveShortUrlDao = (short_Url, longurl, userId) => {
    const newUrl = new urlSchema({
        originalUrl: longurl,
        shortUrl: short_Url,
    })
    if (userId) {
        newUrl.user = userId;
    }
    newUrl.save()
        .then(() => {
            console.log('URL saved successfully');
        })
        .catch((error) => {
            console.error('Error saving URL:', error);
        });
}

export const findUrlFromShortUrl = async (id) => {
    try {
        const url = await urlSchema.findOneAndUpdate({ shortUrl: id }, { $inc: { clicks: 1 } }, { new: true });
        return url;
    }
    catch (error) {
        console.error('Error finding URL:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getCustomShortUrl = async (slug) => {  
   return await urlSchema.findOne({ shortUrl: slug });
}   