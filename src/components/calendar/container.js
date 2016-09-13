import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeDateInMonth } from '../../actions';

import './calendar.css';
import Weekdays from './weekdays';
import DaysOfMonth from './daysOfMonth';

class Calendar extends Component {
  render () {
    return (
      <div className="calendarContainer">
        <Weekdays />
        <DaysOfMonth date={this.props.date}
                     changeDateInMonth={this.props.changeDateInMonth} />
      </div>
    )
  };
};

function mapStateToProps(state) {
  return {
    date: state.date,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeDateInMonth: changeDateInMonth,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
