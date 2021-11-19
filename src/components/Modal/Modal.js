import React, { Component } from 'react'
import './Modal.css'
import resume from '../../assets/images/resume.jpg'
import dlResume from '../../assets/images/resume.pdf'

const Modal = props => (
  <section id="one" className='modal'>
  <a download='brendan-ryan-resume.pdf' href={dlResume}><button className='action-btn'>Download</button></a>
  { props.canClose &&
    <button className='action-btn' onClick={ props.onClose }>
    Close
    </button>}
    <section className='__modalcontent'>
      <img src={resume} />
    <section className='__modalactions'>
    </section>
    </section>
  </section>
)


export default Modal;
