// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

const fakeCoords = {latitude: '68.14497', longitude: '13.53922'}

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


fetchISSFlyOverTimes(fakeCoords, (error, passes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned Passes:' , passes);
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