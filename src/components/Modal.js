import React, { Component } from 'react';
import '../styles/components/Modal.css';

class Modal extends Component {
  render() {
    if(!this.props.show) {
      return null;
    }
    return (
      <div>
        <div className='modal-backdrop' onClick={this.props.onClose}></div>
        <div className='modal-container'>
            <button onClick={this.props.onClose}>x</button>
            <div className='modal-content'>
              {this.props.children}
            </div>
        </div>
      </div>

    );
  }
}

export default Modal;