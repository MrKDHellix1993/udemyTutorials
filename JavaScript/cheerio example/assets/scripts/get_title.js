const cheerio = require('cheerio');
const request = require('request');
debugger;
request({
    method: 'GET',
    url: 'http://localhost:8000'
}, (err, res, body) => {
    if (err) return console.error(err);
    debugger;
    let $ = cheerio.load(body);
    let title = $('title');
    console.log(title.text());
});