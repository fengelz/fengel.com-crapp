import React from 'react'

class SwipeArea extends React.Component {
  nothing() {}
  componentDidMount() {
    let touchstartX = 0
    let touchendX = 0
    let treshold = this.props.treshold || 50
    const gestureZone = this._swipeArea

    gestureZone.addEventListener(
      'touchstart',
      function(event) {
        touchstartX = event.changedTouches[0].screenX
      },
      false
    )

    gestureZone.addEventListener(
      'touchend',
      function(event) {
        touchendX = event.changedTouches[0].screenX
        handleGesture()
      },
      false
    )
    const handleGesture = () => {
      if (touchendX < touchstartX && this.props.swipedLeft) {
        const pixelsSwiped = Math.round((touchendX - touchstartX) * -1)
        if (pixelsSwiped >= treshold) {
          this.props.swipedLeft()
        }
      }

      if (touchendX > touchstartX && this.props.swipedRight) {
        const pixelsSwiped = Math.round((touchstartX - touchendX) * -1)
        if (pixelsSwiped >= treshold) {
          this.props.swipedRight()
        }
      }
    }
  }

  render() {
    return (
      <div
        className={`swipe-area ${this.props.className || ''}`}
        style={this.props.style || {}}
        ref={(swipeArea) => {
          this._swipeArea = swipeArea
        }}>
        {this.props.children}
      </div>
    )
  }
}

export default SwipeArea
