// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
// const { fetchISSFlyOverTimes } = require('./iss');

// const fakeCoords = {latitude: '68.14497', longitude: '13.53922'}

// // fetchMyIP((error, ip) => {
// //   if (error) {
// //     console.log("It didn't work!" , error);
// //     return;
// //   }

// //   console.log('It worked! Returned IP:' , ip);
// // });


// fetchCoordsByIP('124.151.221.154', (error, coordinates) => {
//   if (error) {
//     console.log("Sorry, didnt work!", error)
//     return;
//   }

//   console.log('It worked! Returned coordinates:', coordinates)
// })


// fetchISSFlyOverTimes(fakeCoords, (error, passes) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned Passes:' , passes);
// });

const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});


// Old code
// const ipURL = "https://api.ipify.org/?format=json";

// fetchMyIP(ipURL, (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data)
//   }
// })