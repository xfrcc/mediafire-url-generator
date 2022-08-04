const cheerio = require('cheerio');
const axios = require('axios').default;

const validMediafireIdentifierDL = /^[a-zA-Z0-9]+$/m;
const validMediafireShortDL = /^(https?:\/\/)?(www\.)?mediafire\.com\/\?[a-zA-Z0-9]+$/m;
const validMediafireLongDL = /^(https?:\/\/)?(www\.)?mediafire\.com\/(file|view|download)\/[a-zA-Z0-9]+(\/[a-zA-Z0-9_\-\.~%]+)?(\/file)?$/m;

const get = urlOrId => new Promise((resolve, reject) => {
    const isMediafireUrl = (validMediafireIdentifierDL.test(urlOrId) || validMediafireShortDL.test(urlOrId) || validMediafireLongDL.test(urlOrId));
    if (!isMediafireUrl) reject(new Error('Not a mediafire file url'));
    if (validMediafireIdentifierDL.test(urlOrId)) urlOrId = 'https://mediafire.com/?' + urlOrId;
    axios.get(urlOrId).then(res => {
        const html = res.data;
        const $ = cheerio.load(html);
        const elem = $('#downloadButton').first();
        const url = elem.attr('href'); 
        if (!url) {
            resolve(null);
        }
        else {
            resolve(url);
        }
    }).catch(e => reject(new Error(e.message)));
});


module.exports = {
    get
}
