// const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });


fetchCoordsByIP('124.151.221.154', (error, coordinates) => {
  if (error) {
    console.log("Sorry, didnt work!", error)
    return;
  } 

  console.log('It worked! Returned coordinates:', coordinates)
})


// const ipURL = "https://api.ipify.org/?format=json";

// fetchMyIP(ipURL, (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data)
//   }
// })