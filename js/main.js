let links = document.querySelectorAll("nav > div > a")
let burger = document.getElementById("hamburger")
let nav = document.getElementById("nav")

// Navigation

burger.addEventListener("click", function () {
    let lis = document.querySelectorAll(".fader > li");
    if (nav.className === "") {
        nav.className += "res";
        document.querySelector("nav").className += "navHeight";
        lis.forEach(function(li){
            li.className += "faderHeight";
            })
    } else {
        nav.className = ""
        document.querySelector("nav").className = "";
        lis.forEach(function(li){
            li.className = ""
            })
  
    }
})

// Locations -- Google Maps API

gMap = () => {
    let mapOptions = {
        center: new google.maps.LatLng(41.2565, -95.9395),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }

    let map = new google.maps.Map(document.getElementById("map"), mapOptions);

    let location1 = new google.maps.Marker({
        position: { lat: 41.2540, lng: -95.9350 },
        map: map,
        title: 'Location 1'
    });

    let location2 = new google.maps.Marker({
        position: { lat: 41.2545, lng: -95.9445 },
        map: map,
        title: 'Location 2'
    });
}

alert("This website uses large images from pexels.com which load slowly. This website also uses Google Maps without an API key. To make sure I am not charged, I did not set up an API and used the developer map. To view images of this website, please see my github at https://github.com/metillwick/restaurant/screenshots")