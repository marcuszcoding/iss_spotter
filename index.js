const { fetchMyIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

// const ipURL = "https://api.ipify.org/?format=json";

// fetchMyIP(ipURL, (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data)
//   }
// })