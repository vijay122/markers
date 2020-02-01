import { React, Inferno, Component } from '../src/infact'

import Map from 'pigeon-maps/infact'
import Marker from '../lib/react/index';
import Overlay from 'pigeon-overlay';

const Line = ({ mapState: { width, height }, latLngToPixel, coordsArray, style = { stroke: 'rgb(255,0,0)', strokeWidth: 2 } }) => {
  if (coordsArray.length < 2) {
    return null
  }

  let lines = []
  let pixel = latLngToPixel(coordsArray[0])

  for (let i = 1; i < coordsArray.length; i++) {
    let pixel2 = latLngToPixel(coordsArray[i])
    lines.push(<line key={i} x1={pixel[0]} y1={pixel[1]} x2={pixel2[0]} y2={pixel2[1]} style={style} />)
    pixel = pixel2
  }

  return (
    <svg width={width} height={height} style={{ top: 0, left: 0 }}>
      {lines}
    </svg>
  )
}

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

  latLngToPixelFun=(latlang,center,zoom)=>{
    debugger;
return latlang;
  }
   
  render () {
    const { center, zoom } = this.state

     return (
      <div style={{textAlign: 'center', marginTop: 50}}>
        <Map center={center}
             zoom={zoom}
             width={600}
             height={400}>
                <Marker markerType="plot" hoverText={"erode mahal anddd"} label={"4"} anchor={[50.899, 4.697] } onMouseOut={this.mouseOut} onMouseOver={this.mouseOver} payload={1} onClick={this.handleMarkerClick} />
          
                <Marker markerType="plot" hoverText={"erode mahal anddd"} label={"4"} anchor={[50.889, 4.697] } onMouseOut={this.mouseOut} onMouseOver={this.mouseOver} payload={1} onClick={this.handleMarkerClick} />
          
                <Marker markerType="plot" hoverText={"erode mahal anddd"} label={"3"} anchor={[50.889, 4.687] } onMouseOut={this.mouseOut} onMouseOver={this.mouseOver} payload={1} onClick={this.handleMarkerClick} />
          <Marker markerType="plot" hoverText={"erode mahal anddd"} label={"1"} anchor={[50.879, 4.6997] } onMouseOut={this.mouseOut} onMouseOver={this.mouseOver} payload={1} onClick={this.handleMarkerClick} />
          <Marker label={"2"} hoverText={"madrasdsfsdfsdfsdfsdf"} anchor={[50.874, 4.6947]} payload={2} onClick={this.handleMarkerClick} />
          <Overlay anchor={[50.879, 4.6997] }  offset={[60, 39]} style={{ boxShadow: '3px 3px 5px rgba(0,0,0,0.5)' }}>
          <Line mapState={{width:600,height:400}} latLngToPixel={this.latLngToPixelFun}  coordsArray={[50.879, 4.6997, 50.874, 4.6947]} />
          </Overlay>
        </Map>
      </div>
    )
  }
}
