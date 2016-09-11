import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setDateToday } from '../../actions'

import WordDay from './wordDay'
import NumDay from './numDay'

class Digital extends Component {
  componentDidMount() {
    this.props.setDateToday();
  };

  render() {
    return (
      <div className="digitalContainer">
        <WordDay date={this.props.date} />
        <NumDay date={this.props.date} />
      </div>
    );
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setDateToday: setDateToday,
  }, dispatch)
}

function mapStateToProps(state) {
  return {
    date: state.date,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Digital);
