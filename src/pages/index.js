import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import GalleryStyle from '../styles/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Brendan Ryan | Software Developer'
  const siteDescription = 'Site description'
  const mailForm = () =>{

  }

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              Software developer with professional experience
              <br />
              in a number of fields.
            </h2>
          </header>
          <p>
            Software developer fluent in Javascript, React, Rails, GraphQL, and a host of other technologies eager to begin a career in the field having a course in software engineering at General Assembly. My professional experience combined with a passion for software development and lifelong learning will prove beneficial on this new path. I am open to remote and hybrid work in Massachusetts and Rhode Island.<br /><br />


            Technologies:
            React JS || Javascript || HTML5 || Ruby on Rails || Rails || Git || Gatsby JS || GraphQL || Bootstrap || Node.js || MongoDB || Express || CSS || PHP
          </p>
          <ul className="actions">
            <li>
              <a href="#" className="button">
                Resume
              </a>
            </li>
          </ul>
        </section>

        <section id="two">
          <h2>Projects</h2>

          <Gallery />

          <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Portfolio
              </a>
            </li>
          </ul>
        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <p>
            I'd love to hear from you. Let's start a conversation.
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" action="https://getform.io/f/dea8ba39-ea8c-497a-afb0-48ef1daf5acf">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <button onclick="mailForm()">Send Message</button>
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  8 Hopedale St.
                  <br />
                  Providence, RI 02903
                  <br />
                  United States
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  401.556.0600
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="mailto:brendan.ryan@pm.me">brendan.ryan@pm.me</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
