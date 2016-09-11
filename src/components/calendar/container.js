import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Weekdays from './weekdays';
import DaysOfMonth from './daysOfMonth';

class Calendar extends Component {
  render () {
    return (
      <div>
        <Weekdays />
        <DaysOfMonth date={this.props.date} />
      </div>
    )
  };
};

function mapStateToProps(state) {
  return {
    date: state.date,
  }
}

export default connect(mapStateToProps)(Calendar);
