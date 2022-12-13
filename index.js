const { fetchMyIP } = require("./iss");
const ipURL = "https://api.ipify.org/?format=json";

fetchMyIP(ipURL, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data)
  }
})