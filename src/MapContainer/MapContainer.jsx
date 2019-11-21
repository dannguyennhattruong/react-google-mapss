import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={11} defaultCenter={{ lat: 10.770377, lng: 106.671611 }}>
      {props.isMarkerShown && <Marker label={`User nè`} position={{ lat: Number(props.lat), lng: Number(props.long) }} />}
      {props.isMarkerShown && (
        <div hidden={props.latEnd === 0}>
          <Marker position={{ lat: Number(props.latEnd), lng: Number(props.longEnd) }} label={`Điểm đến`} />
        </div>
      )}
    </GoogleMap>
  ))
)

const MapContainer = props => {
  const [latEnd, setLatEnd] = React.useState(0)
  const [longEnd, setLongEnd] = React.useState(0)
  let latlng = localStorage.getItem('latLng');
  let latLong = JSON.parse(latlng) || { lat: null, lng: null }
  let latend = latLong.lat
  let lngend = latLong.lng
  // console.log(props.driver)
  React.useEffect(
    () => {
      if (latend!==0 && lngend !==0) {
        setLatEnd(latend)
        setLongEnd(lngend)
      }
    },
    [latend, lngend]
  )

  return (
    <Map
      latEnd={latEnd}
      longEnd={longEnd}
      long={props.long}
      lat={props.lat}
      driver={props.driver}
      isMarkerShown
      googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBg4OgaTYn02ZESKX2DuQ70wzORVCrsVRM'
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  )
}

export default MapContainer
