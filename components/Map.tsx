import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const icon = L.icon({
  iconUrl: "/images/location.png",
  iconSize: [40, 40]
});

const expoLine: [number, number][] = [
    
    [49.2856, -123.1115], //waterfront
    [49.285616, -123.120157], //burrard
    [49.28275, -123.116639], //granville
    [49.2796, -123.1098], //chinatown
    [49.2732, -123.1003], //scienceworld
    [49.2626, -123.0692], //commerical-broadway
    [49.2483, -123.0559], //nanaimo
    [49.2443, -123.0461], //29 ave
    [49.2384, -123.0318], //joyce collingwood
    [49.2298, -123.0127], //patterson
    [49.2258, -123.0039], //metrotown
    [49.2201, -122.9885], //royal oak
    [49.2123, -122.9592], //edmonds
    [49.2000, -122.9490], //22nd Street
    [49.2015, -122.9126], //New west
    [49.2048, -122.9061], //columbia
    [49.2044, -122.8743], //scott road
    [49.1990, -122.8507], //gateway
    [49.1896, -122.8480], //surrey central
    [49.1828, -122.8448], //King george
]
const milleniumLine: [number, number][] =
[
    [49.2659, -123.0790], //vcc clark
    [49.2626, -123.0692], //commerical-broadway
    [49.2595, -123.0455], //renfrew
    [49.26102591640345, -123.03290193144558], //rupert
    [49.26513500182863, -123.01356017192559], //gilmore
    [49.26659770176414, -123.00155375843204], //brentwood
    [49.26490630643117, -122.98222234678731], //holdom
    [49.25935394242553, -122.96408574683483], //sperling lake 
    [49.25477503857337, -122.9391370872682], //lake city
    [49.25356614902233, -122.9180920008104],// production way
    [49.24813773439662, -122.89609034924204], //lougheed
    [49.261503544440025, -122.88981877197241],// burquitlam
    [49.27820595347064, -122.84595500083638],// moody
    [49.27739895718516, -122.8281256296717],// inlet
    [49.274064070151205, -122.80008450268369],// coquitlam central
    [49.280582871311324, -122.79398643742945],// lincoln
    [49.285873116170535, -122.79155682967124]// lafarge
]



const locations = [
  { coordinates: [49.2856, -123.1115], name: 'Waterfront' },
  { coordinates: [49.285616, -123.120157], name: 'Burrard' },
  { coordinates: [49.28275, -123.116639], name: 'Granville' },
  { coordinates: [49.2796, -123.1098], name: 'Chinatown' },
  { coordinates: [49.2732, -123.1003], name: 'Science World' },
  { coordinates: [49.2626, -123.0692], name: 'Commercial-Broadway' },
  { coordinates: [49.2483, -123.0559], name: 'Nanaimo' },
  { coordinates: [49.2443, -123.0461], name: '29th Avenue' },
  { coordinates: [49.2384, -123.0318], name: 'Joyce-Collingwood' },
  { coordinates: [49.2298, -123.0127], name: 'Patterson' },
  { coordinates: [49.2258, -123.0039], name: 'Metrotown' },
  { coordinates: [49.2201, -122.9885], name: 'Royal Oak' },
  { coordinates: [49.2123, -122.9592], name: 'Edmonds' },
  { coordinates: [49.2000, -122.9490], name: '22nd Street' },
  { coordinates: [49.2015, -122.9126], name: 'New Westminister' },
  { coordinates: [49.2048, -122.9061], name: 'Columbia' },
  {coordinates: [49.2044, -122.8743], name: 'Scott Road' },
  { coordinates: [49.1990, -122.8507], name: 'Gateway' },
  { coordinates: [49.1896, -122.8480], name: 'Surrey Central' },
  { coordinates: [49.1828, -122.8448], name: 'King George' },
  { coordinates: [49.2485, -122.8970], name: 'Lougheed' },
  { coordinates: [49.25356614902233, -122.9180920008104], name: 'Production Way - University' },
  { coordinates: [49.2659, -123.0790], name: 'VCC-Clark' },
  { coordinates: [49.26102591640345, -123.03290193144558], name: 'Rupert' },
  { coordinates: [49.26513500182863, -123.01356017192559], name: 'Gilmore' },
  { coordinates: [49.26659770176414, -123.00155375843204], name: 'Brentwood Town Centre' },
  { coordinates: [49.26490630643117, -122.98222234678731], name: 'Holdom' },
  { coordinates: [49.25935394242553, -122.96408574683483], name: 'Sperling - Burnaby Lake' },
  { coordinates: [49.25477503857337, -122.9391370872682], name: 'Lake City Way' },
  { coordinates: [49.261503544440025, -122.88981877197241], name: 'Burquitlam' },
  { coordinates: [49.27820595347064, -122.84595500083638], name: 'Moody Centre' },
  { coordinates: [49.27739895718516, -122.8281256296717], name: 'Inlet Centre' },
  { coordinates: [49.280582871311324, -122.79398643742945], name: 'Lincoln' },
  { coordinates: [49.274064070151205, -122.80008450268369], name: 'Coquitlam Central' },
  { coordinates: [49.285873116170535, -122.79155682967124], name: 'Lafarge Lake - Douglas' }
  
];

const blueOptions = { color: 'blue' };
const yellowOptions = {color: 'yellow'}
const center = [49.2258, -123.0039];

const LocationMarker = ({coordinates,name}) => (
    <Marker position={coordinates} icon={icon}>
      <Popup>{name}</Popup>
    </Marker>
  );
  
  const markedLocation = locations.map((a, index) => (
    <LocationMarker key={index} coordinates={a.coordinates} name={a.name} />
  ));


const Map = () => (

  <MapContainer
    style={{ height: "100vh" }}
    center={center}
    zoom={14}
    scrollWheelZoom={true}
  >
    <TileLayer
      attribution='&copy; <a href="https://github.com/jjennbui/leafletMap.git">By Jenny Bui</a> contributors'
      url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
 {markedLocation}
    <Polyline pathOptions={blueOptions} positions={expoLine}></Polyline>
    <Polyline pathOptions={yellowOptions} positions={milleniumLine}></Polyline>
  </MapContainer>
);

export default Map;