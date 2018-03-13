import React, { Component } from 'react'
import Header from '../components/Header'

import './global.scss'

class Template extends Component {
  render() {
    const { location, children } = this.props

    return (
      <div>
        Example layout component.
        <Header />
        {children()}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
