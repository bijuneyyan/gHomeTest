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
    
            //biju I moved this section here so that it gets executed before it returns the JSON
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
var post_req = http.request(options, function(post_res) {
  console.log('Status: ' + post_res.statusCode);
  console.log('Headers: ' + JSON.stringify(post_res.headers));
  post_res.setEncoding('utf8');
  post_res.on('data', function (post_body) {
    console.log('Body: ' + post_body );
  });
});
post_req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body
post_req.write('{"value1":"');
post_req.write(speech);
post_req.write('"}');
post_req.end();
    
    //biju added end
    
    
    return res.json({
        speech: "Okay, I will try and remind biju to " + speech + ". Anything else?",
        displayText: "Okay, I will remind biju to " + speech + ". Anything else?", //Biju added +speech part
        contextOut: "[name:cBye, lifespan:2]", //Biju added
        source: 'webhook-echo-sample'
    });   
    

    
});


restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
