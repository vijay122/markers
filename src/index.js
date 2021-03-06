import { React, Inferno, Component } from './infact'
import PropTypes from 'prop-types'

import redPin from './img/location.svg'
import greenFlag from './img/green-flag.png'
import pin from './img/pin.png'
import pinRetina from './img/pin@2x.png'
import pinHover from './img/pin-hover.png'
import pinHoverRetina from './img/pin-hover@2x.png';

const imageOffset = {
  left: 15,
  top: 31
}

const numberCircle= {
  borderRadius: '50%',
  //behavior: url(PIE.htc);
  /* remove if you don't care about IE8  */
  width: '18px',
  height: '18px',
  padding: '8px',
  background: '#fff',
  border: '2px solid #666',
  color: '#666',
  textAlign: 'center',
  font: '22px Arial, sans-serif'
}

const stepLabel= {
  //behavior: url(PIE.htc);
  /* remove if you don't care about IE8  */
  width: '20px',
  height: '20px',
  background: '#fff',
  color: 'cornflowerblue',
  textAlign: 'center',
  font: '14px Arial, sans-serif',
  left: '7px',
  top:'-7px',
  position: 'absolute',
  borderRadius: '50%',
  zIndex:'1'
}

const pinMarker= {
  width: '34px',
  height: '34px',
  textAlign: 'center',
  font: '22px Arial, sans-serif',
  position: 'absolute',
    top: '-10px',
}

const hoverStyle={
  background:'white',
  color:'darkgreen',
  bottom: '15px',
  position: 'absolute',
  borderRadius:'10px',
  textTransform:'lowercase',
  border:'3px solid aliceblue',
  paddingLeft:'10px',
  paddingRight:'10px',
}

export default class Marker extends Component {
  static propTypes = process.env.BABEL_ENV === 'inferno' ? {} : {
    // input, passed to events
    anchor: PropTypes.array.isRequired,
    payload: PropTypes.any,

    // optional modifiers
    hover: PropTypes.bool,

    // callbacks
    onClick: PropTypes.func,
    onContextMenu: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,

    // pigeon variables
    left: PropTypes.number,
    top: PropTypes.number,

    // pigeon functions
    latLngToPixel: PropTypes.func,
    pixelToLatLng: PropTypes.func,
    markerType: PropTypes.string,
    label: PropTypes.string,

  }

  constructor (props) {
    super(props)

    this.state = {
      hover: false
    }
  }

  // what do you expect to get back with the event
  eventParameters = (event) => ({
    event,
    anchor: this.props.anchor,
    payload: this.props.payload
  })

  // controls
  isRetina () {
    return typeof window !== 'undefined' && window.devicePixelRatio >= 2
  }

  // modifiers
  isHover () {
    return typeof this.props.hover === 'boolean' ? this.props.hover : this.state.hover
  }

  image () {
    if(this.props.markerType=='plot')
    {
      return redPin;
    }
    if(this.props.markerType=='finish')
    {
      return greenFlag;
    }
    return this.isRetina() ? (this.isHover() ? pinHoverRetina : pinRetina) : (this.isHover() ? pinHover : pin)
  }

  // lifecycle

  componentDidMount () {
    let images = this.isRetina() ? [
      pinRetina, pinHoverRetina
    ] : [
      pin, pinHover
    ]

    images.forEach(image => {
      let img = new window.Image()
      img.src = image
    })
  }

  // delegators

  handleClick = (event) => {
    this.props.onClick && this.props.onClick(this.eventParameters(event))
  }

  handleContextMenu = (event) => {
    this.props.onContextMenu && this.props.onContextMenu(this.eventParameters(event))
  }

  handleMouseOver = (event) => {
    this.props.onMouseOver && this.props.onMouseOver(this.eventParameters(event))
    this.setState({ hover: true })
  }

  handleMouseOut = (event) => {
    this.props.onMouseOut && this.props.onMouseOut(this.eventParameters(event))
    this.setState({ hover: false })
  }

  // render

  render () {
    const { left, top, onClick } = this.props

    const style = {
      position: 'absolute',
      transform: `translate(${left - imageOffset.left}px, ${top - imageOffset.top}px)`,
      cursor: onClick ? 'pointer' : 'default'
    }

    return (
      <div style={style}
           className='pigeon-click-block'
           onClick={this.handleClick}
           onContextMenu={this.handleContextMenu}
           onMouseOver={this.handleMouseOver}
           onMouseOut={this.handleMouseOut}>
           <div>
           {this.state.hover &&  <div style={hoverStyle}> {this.props.hoverText} </div>}
           <div style={stepLabel}>{this.props.label}</div>
        <img src={this.image()} style={pinMarker} alt='' />
        </div>
      </div>
    )
  }
}
