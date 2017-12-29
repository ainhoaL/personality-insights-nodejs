/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const path = require('path');
// load default variables for testing
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const request = require('supertest');

const app = require('../app');

if (!process.env.PERSONALITY_INSIGHTS_USERNAME || process.env.PERSONALITY_INSIGHTS_USERNAME == '<username>') {
  return;
}

describe('integration-express', function() {
  this.timeout(10000);

  xit('Generate profile from static tweets', () =>
    request(app).post('/api/profile/twitter')
      .type('form')
      .send({
        source_type: 'twitter',
        accept_language: 'en',
        include_raw: false,
        userId: 'Oprah',
      }).expect(200)
  );

});
