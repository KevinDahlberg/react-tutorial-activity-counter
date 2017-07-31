import React from 'react'
import '../stylesheets/ui.scss'

export const CodingDayCount = React.createClass({
  percentToDecimal(decimal) {
    return ((decimal * 100) + '%')
  },
  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total/goal)
  },
  render() {
    return (
      <div className="coding-day-count">
        <div className="total-days">
          <span>{this.props.total}</span>
          <span>days</span>
        </div>
        <div className="home-days">
          <span>{this.props.home}</span>
          <span>days</span>
        </div>
        <div className="out-days">
          <span>{this.props.out}</span>
          <span>days</span>
        </div>
        <div>
          <span>{this.calcGoalProgress(this.props.total, this.props.goal)}</span>
        </div>
      </div>
    )
  }
})
