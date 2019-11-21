import React, { Component } from 'react'
import MapContainer from './MapContainer/MapContainer'
import SearchBox from './SearchBox';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state= {
      lat:0,
      lng:0
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(info => {
      this.setState({lat:info.coords.latitude,lng:info.coords.longitude})
    })
  }

  render() {
    return (
      <div style={{height:'100vh',width:'100%'}}>
        <div className='map' style={{height:'360px',width:'500px'}}>
        <MapContainer  lat={this.state.lat} long={this.state.lng}/>
        </div>
        <SearchBox />
      </div>
    )
  }
}
