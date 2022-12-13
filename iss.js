/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

 const request = require('request');

 const fetchMyIP = function(ipURL, callback) { 
  request(ipURL, (error, response, body) => {
    if (error) {
      console.log("There was an error getting the IP")
      return callback(error, null)
    }
    const data = JSON.parse(body);
    return callback(null, data)
  });
}

module.exports = { fetchMyIP };