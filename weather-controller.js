function WeatherController(){
  var weatherService = new WeatherService()


  this.getZip = function getZip(e){
      e.preventDefault();
      var zip = e.target.zip.value
      weatherService.getCity(zip).then(draw)
  }

  function draw(resolve){

  var elem = document.getElementById('city')
  template = ""
  template +=`
    <div>
      <h1>City: ${resolve.places[0]['place name']}</h1>
      <h1>State: ${resolve.places[0].state}</h1>
    </div>
  `
  elem.innerHTML = template
  weatherService.getWeather(resolve).then(drawWeather)
}

  function drawWeather(resolve){
    debugger
    var elem = document.getElementById('weather')
    template = ""
    template += `
      <div>
        <h1>Temp: ${resolve.main.temp}</h1>
        <h1>Sky: ${resolve.weather[0].description}</h1>
      </div
    `
    elem.innerHTML = template
  }

}
  var map;
      function initMap() {
        debugger
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }