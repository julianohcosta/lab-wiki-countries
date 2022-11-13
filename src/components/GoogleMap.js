import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}<img src='https://cdn-icons-png.flaticon.com/512/684/684908.png'
                                                        alt='' width='30px' /></div>;

function GoogleMap({ latlng }) {
  const defaultProps = {
    center: {
      lat: latlng[0],
      lng: latlng[1]
    },
    zoom: 4
  };

  return (
    <div style={{ height: '300px', width: '400px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        center={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          text=''
        />
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMap;