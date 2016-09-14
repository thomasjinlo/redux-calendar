import React, { Component } from 'react';
import { connect } from 'react-redux';

import WordDay from './wordDay'
import NumDay from './numDay'
import './digital.css';

class Digital extends Component {
  render() {
    console.log(this.props.date)
    return (
      <div className="digitalContainer">
        <WordDay date={this.props.date} />
        <NumDay date={this.props.date} />
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    date: state.date,
  }
}

export default connect(mapStateToProps)(Digital);
