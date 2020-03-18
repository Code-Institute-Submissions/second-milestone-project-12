function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 3,
          center: {lat: 54.5260, lng: 15.2551}
        });

        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });
        
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }
      var locations = [
        //paris locations
        {lat: 48.8584, lng: 2.2945},
        {lat: 48.8606, lng: 2.3376},
        {lat: 48.8738, lng: 2.2950},
        {lat: 48.8867, lng: 2.3431},
        {lat: 48.8635, lng: 2.3275},
        //london locations
        {lat: 51.5007, lng: 0.1246},
        {lat: 51.5014, lng: 0.1419},
        {lat: 51.5194, lng: 0.1270},
        {lat: 51.5081, lng: 0.0759},
        //madrid locations
        {lat: 40.4169, lng: 3.7035},
        {lat: 40.4153, lng: 3.6845},
        {lat: 40.4240, lng: 3.7178},
        {lat: 40.4138, lng: 3.6921},
        //berlin locations
        {lat: 52.5163, lng: 13.3777},
        {lat: 52.5050, lng: 13.4397},
        {lat: 52.5139, lng: 13.3787},
        {lat: 52.5208, lng: 13.4094},
        {lat: 52.5074, lng: 13.3904},
        //prague locations
        {lat: 50.0911, lng: 14.4016},
        {lat: 50.0865, lng: 14.4114},
        {lat: 50.0865, lng: 14.4114},
        {lat: 50.0754, lng: 14.4142},
        {lat: 50.0810, lng: 14.4280}
      ]