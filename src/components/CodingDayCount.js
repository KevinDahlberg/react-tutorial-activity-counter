import React from 'react'
import '../stylesheets/ui.scss'

export const CodingDayCount = React.createClass({
  render() {
    return (
      <div className="coding-day-count">
        <div className="total-days">
          <span>5 days</span>
        </div>
        <div className="home-days">
          <span>2 days</span>
        </div>
        <div className="out-days">
          <span>3 days</span>
        </div>
      </div>
    )
  }
})
