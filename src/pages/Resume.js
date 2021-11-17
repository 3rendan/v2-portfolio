import React, { Component } from 'react';
import Modal from '../components/Modal/Modal'
import Backdrop from '../components/Backdrop/Backdrop'
import resume from '../assets/images/resume.jpg'
import dlResume from '../assets/images/resume.pdf'
/**
 * Events
 */
class Resume extends Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    display: false
  }
  startCreateEventHandler = () => {
    this.setState({display: true})
  }
  modalCloseHandler = () => {
    this.setState({display: false})
  }
  render() {
    return (
      <React.Fragment>
        {this.state.display && <Backdrop />}
        {this.state.display && <Modal canClose onClick={this.startCreateEventHandler} onClose={this.modalCloseHandler}>
          <p>Modal content</p>
        </Modal>}
        {this.props.id === 'header'
          ? <span className="logo icon fa-file" onClick={this.startCreateEventHandler}></span>
          : <button type='submit' className='button' onClick={this.startCreateEventHandler}>Resume</button>
        }
      </React.Fragment>
    );
  }
}


export default Resume;
