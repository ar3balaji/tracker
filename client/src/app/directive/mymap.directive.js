(function () {
   "use strict";
    angular.module('plunker').
    directive('myMap', function() {
        // directive link function
        var link = function(scope, element, attrs) {
            var map, infoWindow;
            var markers = [];
            // map config
            var mapOptions = {
                center: new google.maps.LatLng(41.850033, -87.6500523),
                zoom: 4,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false
            };

            // init the map
            function initMap() {
                if (map === void 0) {
                    map = new google.maps.Map(element[0], mapOptions);
                }
            }

            // place a marker
            function setMarker(map, position, title, content) {
                var marker;
                var markerOptions = {
                    position: position,
                    map: map,
                    title: title,
                    icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
                };

                marker = new google.maps.Marker(markerOptions);
                markers.push(marker); // add marker to array

                google.maps.event.addListener(marker, 'click', function () {
                    // close window if not undefined
                    if (infoWindow !== void 0) {
                        infoWindow.close();
                    }
                    // create new window
                    var infoWindowOptions = {
                        content: content
                    };
                    infoWindow = new google.maps.InfoWindow(infoWindowOptions);
                    infoWindow.open(map, marker);
                });
            }


            // show the map and place some markers
            initMap();
            scope.$watch(function (scope) {
                return scope.mapVm.xData;
            }, function (newss) {
                angular.forEach(newss, function (news) {
                    setMarker(map, new google.maps.LatLng(news.latitude,news.longitude), news.name, 'Vehicle location');
                });
            });

        };

        return {
            restrict: 'A',
            template: '<div id="gmaps"></div>',
            replace: true,
            link: link
        };
    });
})();


