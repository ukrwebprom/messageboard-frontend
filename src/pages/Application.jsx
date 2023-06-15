import React, { useState, useEffect} from 'react'
import LayoutA from "../components/Layouts/LayoutA";
/* import { useGeolocation } from "@uidotdev/usehooks"; */
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
const GM_API_KEY = 'AIzaSyDLnQlza59GeNnBneUvnJkxC6FMVV_iD6Y';

const containerStyle = {
    width: '100%',
    height: '90vh'
  };

export const Application = () => {
    const [map, setMap] = useState(null);

    const geo = navigator.geolocation;

    const locateme = () => {
        if(geo) {
            geo.getCurrentPosition(position => {
                const center = {
                    lat: Number(position.coords.latitude), 
                    lng:Number(position.coords.longitude)
                }
                map.setCenter(center);
                const bounds = new window.google.maps.LatLngBounds(center);
                map.fitBounds(bounds);
                console.log('center is defined')
            }, (error) => alert(error), {maximumAge: 30000, timeout: 10000, enableHighAccuracy: true});
        } else {alert("no geolocation")}
        
    }
    

/*     useEffect(() => {
        if(pos && map) map.setCenter(pos);
    }, [pos, map]) */
/*     const center = {
        lat: 100,
        lng: 100
      }; */
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: GM_API_KEY
      })
    
    const onLoad = React.useCallback(function callback(map) {
        /* const bounds = new window.google.maps.LatLngBounds(center); */
/*         map.fitBounds(bounds); */
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])
    return(
        <LayoutA>
            {isLoaded && 
            <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={null}
                    zoom={10}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                    { /* Child components, such as markers, info windows, etc. */ }
                    <></>
            </GoogleMap>
            }
            <button onClick={locateme}>Put me</button>
        </LayoutA> 
    )
}