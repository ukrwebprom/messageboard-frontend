import GoogleMapReact from 'google-map-react';
import './map.scss';
import mapstyle from './mapStyle.json';
import { UserMarker } from './UserMarker';
/* useJsApiLoader */


export const Map2 = ({children}) => {
    const [myMap, setMyMap] = useState(null);

    const handleApiLoaded = (map, maps) => {
       setMyMap(map);
    }
    
    const center = {
        lat: 46.48817164741405,
        lng: 30.720326038516703
      }
    const mapOptions = {
        styles:mapstyle,
        disableDefaultUI: true
    }
    return(

        <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDnaa2Zu65mbcgTLFMYGd7DOiEiBffwtAE' }}
        defaultCenter={center}
        defaultZoom={10}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <UserMarker 
        lat= {46.48817164741405}
        lng= {30.720326038516703}
        />
        </GoogleMapReact>
    )
}