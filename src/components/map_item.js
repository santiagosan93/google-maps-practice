import React from 'react'
import GoogleMapReact from 'google-map-react';
import Marker from './marker'


const Flat = (props) => {
  // TODO: return de card component
  if (props.center.lng === 0) {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAwmmlUykoiFOD_yNDpXKTlUUz3WCJ-5LQ'}}
          center={props.center}
          zoom={props.zoom}
        />
      </div>
    );
  }else {
      console.log(props.zoom)
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAwmmlUykoiFOD_yNDpXKTlUUz3WCJ-5LQ'}}
          center={props.center}
          zoom={props.zoom}
        >
          <Marker
            lat={props.center.lat}
            lng={props.center.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Flat
