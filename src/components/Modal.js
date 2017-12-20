import React, { Component } from 'react';
import '../styles/components/Modal.css';

class Modal extends Component {
  render() {
    if(!this.props.show) {
      return null;
    }
    return (
      <div className='modal-backdrop'>
        <div className='modal-container'>
        <button onClick={this.props.onClose}>x</button>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;