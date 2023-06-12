const axios = require('axios');
const app = require('../index.js');
const { expect } = require('chai');

describe('GET /will', function() {
  it('respond with hello world', async function() {
    try {
      const response = await axios.get('http://localhost:4001/will');
      const expectedResponse = { response: 'Hello World' };

      // Assert the response data matches the expected response
      expect(response.data).to.deep.equal(expectedResponse);
    } catch (error) {
      // Handle any errors that occur during the request
      throw error;
    }
  });
});
