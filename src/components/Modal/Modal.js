import React from 'react'
import './Modal.css'
import resume from '../../assets/images/resume.jpg'
import dlResume from '../../assets/images/resume.pdf'

const Modal = props => (
  <div className='modal'>
    <section className='__modalcontent'>
      <img className='img-responsive resume' src={resume} />
    <section className='__modalactions'>
    <a download='resume.pdf' href={dlResume}><button className='action-btn'>Download</button></a>
    { props.canClose &&
      <button className='action-btn' onClick={ props.onClose }>
      Close
      </button>}
    </section>
    </section>
  </div>
)


export default Modal;
