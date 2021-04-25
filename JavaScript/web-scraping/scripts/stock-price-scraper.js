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
    const stockName = $('h1.company__name').text();
    const stockParent = $('h3.intraday__price');
    const stockCurrency = stockParent.find('sup').text();
    const stockPrice = stockParent.find('bg-quote').text();
    console.log(stockName, stockCurrency,stockPrice);
    // const stockCurrency = $('h3.intraday__price > sup.character');
    // const stockPrice = $('h3.intraday__price > sup.character > ul > li ');
    var infoList= $('tbody.markets__group > tr');
    // console.log(infoList.text());
    if(infoList){
        infoList.each((i,el)=>{
            const iteamData = $(el).text().replace(/\s+/g, '');
            console.log(`Element ${i} :  ${iteamData}  `);
        })
    }
});