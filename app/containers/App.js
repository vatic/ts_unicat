import React, { Component } from 'react';
import { connect } from 'react-redux'
import classNames from 'classnames'

import { testUi } from '../actions/ui'


class App extends Component {

  componentDidMount() {
    this.props.dispatch(testUi())
  }

  render() {

    return (

      <div id="ts_main">
        <h1>Hello Unicat</h1>
      </div>

    )
  }
}

function mapStateToProps(state) {
  const { ui, cities, weather} = state

  return {
    ui,
    cities,
    weather
  }
}

export default connect(mapStateToProps)(App)

