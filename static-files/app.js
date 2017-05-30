/**
 * Copyright 2016, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// [START app]
'use strict';

const express = require('express');
const app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'pug');

// Use the built-in express middleware for serving static files from './public'
app.use('/static', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/newform', (req, res) => {
  console.log('Post Success!');
  console.log('Grabbed ----> ' + req.body.url);
  var LS = require('./linkSave.js');
  LS.addLink(req.body.url);
  res.render('newform');
});

app.get('*', (req, res) => {
  console.log('404 Page Not Found');
  res.send("This is not the page you are looking for!");
  // Can also replace with a 404 page not found!;
})


// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END app]
