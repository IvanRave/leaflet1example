(function(L) {
  var handleLoad = function(ev){
	//console.log('loaded', ev.target);
	var tmpMap = ev.target;
	// console.log('this', this);

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(tmpMap);

	L.marker([51.5, -0.09]).addTo(tmpMap)
	  .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
	  .openPopup();  
  };

  var init = function(tmpElem){
	var map = L.map(tmpElem);
	// Fired when the map is initialized (when its center and zoom are set for the first time).
	map.on('load', handleLoad);
	map.setView([51.505, -0.09], 13);
  };

  var elem = document.createElement('div');
  elem.style.height = "100%";
  document.body.appendChild(elem);
  init(elem);
})(window.L);
