function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 18.795278, lng: 98.998611};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'ChiangMai, TH' // Title Location
    });
}

