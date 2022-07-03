import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Gmap (){
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAI39ZlbG4IZdJ7QfJ0vEPUyHzG2d4AbkI"
    });

    if( !isLoaded ) return <div> Loading.. </div>
  return <Map/>
}

function Map(){
    const center=useMemo(()=>({lat:48, lng:10}), []);
    return <GoogleMap zoom={10} center={center} mapContainerClassName="map-container" >

        <Marker key={1} id={1} position={center} />
    </GoogleMap>;

}

