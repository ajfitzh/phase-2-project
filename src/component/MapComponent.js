import React, {useState} from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Typography from "@material-ui/core/Typography";
import { textAlign } from '@mui/system';

function MapContainer() {
const [selected, setSelected ] = useState({})

const onSelect = item => {
    setSelected(item);
  }
    const mapStyles = {
        height: "30vh",
        width: "100%"
    };

    const defaultCenter = {
        lat: 36.877939, lng: -76.147505
    };

    const locations = [
        {
        name: "Mike's Bikes 757",
        phone: "540.898.5421",
        address: "Haygood Neighborhood",
        location: {
            lat: 36.877939, lng: -76.147505
            },
        }
];

    return (
        <LoadScript
            googleMapsApiKey='AIzaSyD4gA79P9ktv22eddp_M93LCTZXp5_5N8A'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={9}
          center={defaultCenter}>
         {
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location} onClick={() => onSelect(item)}
              />
              )
            })
         }
         {
           selected.location && 
           (
             <InfoWindow
             position={selected.location}
             clickable={true}
             onCloseClick={() => setSelected({})}
            >
                <div>
                <p>{selected.name}</p>
                <p>{selected.address}</p>
                <p>{selected.phone}</p>
                      
                </div>
             
           </InfoWindow>
           )  
         }
     </GoogleMap>
  )
        </LoadScript>
    );
}

export default MapContainer;