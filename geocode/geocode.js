const request = require('request');

var geocodeAddress = (address, callback) =>{
  var encodedAddress = encodeURIComponent(address);

  request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=4BQbVUHGinPAdXUXFDJ7hqQ5jhjZoJc9&location=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
      if(error){
        callback('Unable to connect to MapQuest Servers.');
      }
      else{
        callback(undefined, {
          address:   body.results[0].providedLocation.location,
          latitude:  body.results[0].locations[0].latLng.lat,
          longitude: body.results[0].locations[0].latLng.lng
        });
      }
  });

};

module.exports = {
  geocodeAddress
};

// f8dd94fc25cd09567200813c721325f2
