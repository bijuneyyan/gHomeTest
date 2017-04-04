'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.post('/echo', function(req, res) {
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."
    return res.json({
        speech: "Okay, I will try and remind biju to " + speech + ", Noted",
        displayText: "Okay, I will remind biju to " + speech + ", Noted", //Biju added +speech part
        source: 'webhook-echo-sample'
    });   
    
    
        //biju
var http = require("http");
var options = {
  hostname: 'maker.ifttt.com',
  port: 80,
  path: '/trigger/dothis/with/key/bXsYfDIonvvqd2ltTsBgiH',
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
  }
};
var post_req = http.request(options, function(res) {
  console.log('Status: ' + res.statusCode);
  console.log('Headers: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (body) {
    console.log('Body: ' + body );
  });
});
post_req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body
post_req.write('{"value1":"');
post_req.write('speech');
post_req.write('"}');
post_req.end();
    
    //biju added end
    
});




//originalbelow

/*restService.post('/slack-test', function(req, res) {

    var slack_message = {
        "text": "Details of JIRA board for Browse and Commerce",
        "attachments": [{
            "title": "JIRA Board",
            "title_link": "http://www.google.com",
            "color": "#36a64f",

            "fields": [{
                "title": "Epic Count",
                "value": "50",
                "short": "false"
            }, {
                "title": "Story Count",
                "value": "40",
                "short": "false"
            }],

            "thumb_url": "https://stiltsoft.com/blog/wp-content/uploads/2016/01/5.jira_.png"
        }, {
            "title": "Story status count",
            "title_link": "http://www.google.com",
            "color": "#f49e42",

            "fields": [{
                "title": "Not started",
                "value": "50",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }]
        }]
    }
    return res.json({
        speech: "speech",
        displayText: "speech",
        source: 'webhook-echo-sample',
        data: {
            "slack": slack_message
        }
    });
});
*/



restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
