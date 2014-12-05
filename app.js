var express = require('express'),
    expressHbs = require('express-handlebars'),
    fs = require('fs'),
    http = require('http'),
    https = require('https'),
    path = require('path'),
    twitter = require('twitter'),
    port = 3000,
    app = express();

app.use(express.static(__dirname + '/public'));

app.engine('hbs', expressHbs({extname:'hbs', defaultLayout:'main.hbs'}));
app.set('view engine', 'hbs');


var twit = new twitter({
    consumer_key: '9JmRz76rOVOFISiYe1G3gs3lq',
    consumer_secret: 'I8PySCu69V0g1CatonWWaC2zlcUiceu2sBVNeqWq4N78gwWgKc',
    access_token_key: '281177056-ihp7gSMCEuY8Yv10qBuUGAgnnpPXhFfTplfQ6sHx',
    access_token_secret: 'yvYokK90f3Zu8Q3FeokFPxB6uzuP3yjwC6pKKJx56vHiw'
})

/**
 * routes
 */
app.get('/', function(req, res){
    res.render('index');
});

var cached = false;
var d = null;
app.get('/hash/:hashtag', function(req, res){
    //TODO: cache results

    if(cached){
        res.send(d);
    }else{
        twit.search(req.params.hashtag, function(data) {
            d = data;
            cached = true;
            res.send(data);
        });
    }
});


app.listen(port);