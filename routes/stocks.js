var express = require('express');
var router = express.Router();

let stockData = [
  { name : "AT&T Inc.", tickerSymbol : "T", currentPrice : 15.26 }
]

/* GET users listing. */
router.get('/', async (req, res, next) => {  
  res.status(200).json({
    status :  'Success',
    data : stockData
  })
});


router.post('/add-stock', (req,res,next) => {

  let stocks = req.body.stocks;

  stocks.forEach(element => {
      stockData.push(element)
  });

  res.status(200).json({
    status :  'Success',
    data : stockData
  })

})


module.exports = router;
