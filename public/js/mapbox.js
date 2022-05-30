console.log('hello from the mapbox site~');

const locations =JSON.parse(document.getElementById('map').data.locations);
//console.log(locations);

mapboxgl.accessToken = 'pk.eyJ1IjoiYmlua2lkIiwiYSI6ImNrNzBpcTQ2dzBqZnQzbG1sc2VsY3FiY2EifQ.HtBLAnqTMoNurlfyLvnKkw';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
});