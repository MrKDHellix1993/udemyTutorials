const cheerio = require('cheerio');
const request = require('request');
debugger;
request({
    method: 'GET',
    url: 'https://www.marketwatch.com/investing/stock/tsla'
}, (err, res, body) => {
    if (err) return console.error(err);
    debugger;
    let $ = cheerio.load(body);
    var infoList = $('div.max-markets > div.desktop > ul > li ');
    if(infoList){
        infoList.each((i,el)=>{
            
        })
    }
    console.log(infoList);
});