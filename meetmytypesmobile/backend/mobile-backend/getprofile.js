'use strict';
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
const express = require('express');
const http = require('serverless-http');
AWS.Config.apiVersions = {
  dynamodb: '2012-08-10',
};

var dynamodb = new AWS.DynamoDB();
const app = express();
app.use(bodyParser.json({strict: false}));

app.get('/users/:UID', function(req, res) {
  const params = {
    TableName: 'Users',
    Key: {
      UID: req.params.UID,
    },
  };
  dynamodb.get(params, (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).json({error: 'Could not get user'});
    }
    if (result.Items) {
      const {
        UID,
        Age,
        Description,
        LoveType,
        Nickname,
        Top4LoveTypes,
      } = result.Items;
      res.json({UID, Age, Description, LoveType, Nickname, Top4LoveTypes});
    } else {
      res.status(404).json({error: 'User not found'});
    }
  });
});

module.exports.handler = http(app);
