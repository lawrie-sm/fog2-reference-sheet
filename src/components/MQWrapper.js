import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/MQWrapper.css'

class MQWrapper extends Component {
  render() {
    return (
      <div className={`MQWrapper-${this.props.size}`}>
        {this.props.children}
      </div>
    )
  }
}

MQWrapper.defaultProps = {
  size: 'mobile'
}

MQWrapper.propTypes = {
  size: PropTypes.oneOf(['mobile', 'desktop'])
}

export default MQWrapper;