import { React, Inferno, Component } from '../src/infact'

import Map from 'pigeon-maps/infact'
import Marker from '../lib/react/index';

export default class Demo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      center: [50.879, 4.6997],
      zoom: 12
    }
  }

  handleMarkerClick = ({ event, payload, anchor }) => {
    console.log(`Marker #${payload} clicked at: `, anchor)
  }

  mouseOver=()=>{
    <div><label>{"hovered"}</label></div>
  }

  mouseOut=()=>{
    debugger;
    return "over out"
  }

  render () {
    const { center, zoom } = this.state

     return (
      <div style={{textAlign: 'center', marginTop: 50}}>
        <Map center={center}
             zoom={zoom}
             width={600}
             height={400}>
          <Marker markerType="plot" hoverText={"erode"} label={"1"} anchor={[50.879, 4.6997] } onMouseOut={this.mouseOut} onMouseOver={this.mouseOver} payload={1} onClick={this.handleMarkerClick} />
          <Marker label={"2"} hoverText={"madras"} anchor={[50.874, 4.6947]} payload={2} onClick={this.handleMarkerClick} />
        </Map>
      </div>
    )
  }
}
