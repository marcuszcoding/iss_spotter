const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request(`http://ipwho.is/${ip}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const parsedBody = JSON.parse(body);
    // check if "success" is true or not
    if (!parsedBody.success) {
      const message = `Success status was ${parsedBody.success}. Server message says: ${parsedBody.message} when fetching for IP ${parsedBody.ip}`;
      callback(Error(message), null);
      return;
    }
    const { latitude, longitude } = parsedBody;

    callback(null, {latitude, longitude});
  });
};

//Going to use my original format of using a URL vairable to make it easier except have it inside of the function and not in the index file
const fetchISSFlyOverTimes = function(coords, callback) {
  const URL = `https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`;
  
  request(URL, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching ISS pass times: ${body}`), null);
      return; //copy paste from first find IP function with edited string
    }

    const passes = JSON.parse(body).response; // parses all passes of the ISS and stores in variable "passes"

    callback(null, passes);
  });
};

const nextISSTimesForMyLocation = function(callback) {
  fetchMyIP((error, ip) => {
    if (error) {
      return callback(error, null);
    }

    fetchCoordsByIP(ip, (error, loc) => {

      if (error) {
        return callback(error, null);
      }
      fetchISSFlyOverTimes(loc, (error, passes) => {
        if (error) {
          return callback(error, null);
        }
        
        callback(null, passes);
      });
    });
  });
};

module.exports = { nextISSTimesForMyLocation };


//  const request = require('request');

//  const fetchMyIP = function(ipURL, callback) {
//   request(ipURL, (error, response, body) => {
//     if (error) {
//       console.log("There was an error getting the IP")
//       return callback(error, null)
//     }
//     const data = JSON.parse(body);
//     return callback(null, data)
//   });
// }
