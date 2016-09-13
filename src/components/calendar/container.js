import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setDateToday, changeDateInMonth, setActiveToday, changeMonth } from '../../actions';

import './calendar.css';
import Weekdays from './weekdays';
import DaysOfMonth from './daysOfMonth';
import MonthYear from './monthYear';

class Calendar extends Component {
  componentDidMount() {
    this.props.setDateToday();
  };

  render () {
    return (
      <div>
        <MonthYear date={this.props.date}
                   changeMonth={this.props.changeMonth} />
        <div className="calendarContainer">
          <Weekdays />
          <DaysOfMonth {...this.props} />
        </div>
      </div>
    )
  };
};

function mapStateToProps(state) {
  return {
    date: state.date,
    activeID: state.activeID,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setDateToday: setDateToday,
    setActiveToday: setActiveToday,
    changeDateInMonth: changeDateInMonth,
    changeMonth: changeMonth,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
