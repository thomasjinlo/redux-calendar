import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setDateToday, changeDateInMonth, setActiveToday } from '../../actions';

import './calendar.css';
import Weekdays from './weekdays';
import DaysOfMonth from './daysOfMonth';

class Calendar extends Component {
  componentDidMount() {
    this.props.setDateToday();
  };

  render () {
    return (
      <div className="calendarContainer">
        <Weekdays />
        <DaysOfMonth {...this.props} />
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
