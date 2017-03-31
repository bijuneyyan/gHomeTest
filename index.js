'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const restService = express();

//biju
var request = require('request');

//biju
request.post(
    'https://www.googleapis.com/calendar/v3/calendars/primary/events/quickAdd',
    {
 "kind": "calendar#event",
 "etag": "\"2981851865534000\"",
 "id": "d8v82gjhfor9u1mc5vtb6pldns",
 "status": "confirmed",
 "htmlLink": "https://www.google.com/calendar/event?eid=ZDh2ODJnamhmb3I5dTFtYzV2dGI2cGxkbnMgZ2tjNnBsYjloZnN1aGwxb3JnczRiOGpvb3NAZw",
 "created": "2017-03-31T02:05:32.000Z",
 "updated": "2017-03-31T02:05:32.767Z",
 "summary": "call john",
 "creator": {
  "email": "bijuneyyan@gmail.com",
  "displayName": "Biju Neyyan"
 },
 "organizer": {
  "email": "gkc6plb9hfsuhl1orgs4b8joos@group.calendar.google.com",
  "displayName": "botcalendar",
  "self": true
 },
 "start": {
  "dateTime": "2017-03-27T15:00:00+05:30"
 },
 "end": {
  "dateTime": "2017-03-27T16:00:00+05:30"
 },
 "iCalUID": "d8v82gjhfor9u1mc5vtb6pldns@google.com",
 "sequence": 0,
 "reminders": {
  "useDefault": true
 }
},
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);


//originalbelow
restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.post('/echo', function(req, res) {
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."
    return res.json({
        speech: "ga ga speech",
        displayText: "goo goo speech",
        source: 'webhook-echo-sample'
    });
});

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
