import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import './map.scss';
import mapstyle from './mapStyle.json';
import UserMarker from '../../images/usericon.svg';
/* useJsApiLoader */


export const Map = ({location}) => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.MAP_API
      })
    const markerClick = () => {
        console.log('click')
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
        <>
        {isLoaded? <GoogleMap
        center={location}
        zoom={10}
        mapContainerClassName='mapcontainer'
        options={mapOptions}
      >
        <Marker 
            onContextMenu = {markerClick}
            position={location} 
            icon={{url:UserMarker}}
        />
        </GoogleMap>
        : <p>Loading....</p>}
        </>
    )
}