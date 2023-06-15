import React, { useState, useEffect} from 'react';
import LayoutA from "../components/Layouts/LayoutA";
import { useUser } from "../utils/useUser";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const MAP_API = 'AIzaSyDLnQlza59GeNnBneUvnJkxC6FMVV_iD6Y';

export const Intro = () => {
    const { myLocation, setLocation } = useUser();
    const [map, setMap] = useState(null);
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: MAP_API
      })
    
    const defaultCenter = {
        lat: 20, 
        lng: 20
    }
    const onLoad = React.useCallback(function callback(map) {
        setMap(map);
        
    }, [])

    useEffect(() => {
        if(map) {
            if(myLocation) map.setCenter(myLocation)
            else {
            navigator.geolocation.getCurrentPosition(position => {
                const center = {
                    lat: Number(position.coords.latitude), 
                    lng:Number(position.coords.longitude)
                }
                map.setCenter(center);
                setLocation(center)
            });}
        }
        

    }, [map, myLocation])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    

    return(
        <LayoutA>
        {isLoaded && 
        <GoogleMap
        mapContainerStyle={{width:'100%', height:'450px'}}
        center={defaultCenter}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        ></GoogleMap>
        }    
        </LayoutA>
    )
}