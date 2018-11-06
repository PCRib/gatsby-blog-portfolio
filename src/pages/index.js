import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Welcome to my Portfolio Blog</h1>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      {/* <Image /> */}
    </div>
    <div style={{
      display:'flex',
      justifyContent:'space-between'
    }}>
        <Link style={{
          width: "30%",
        }} to="/blog">
          <div style={{
              boxShadow: "0px 4px 15px -4px rgba(0,0,0,0.75)",
              // padding: "0px 25px",
              minHeight:'15em',
              display: "flex",
              flexDirection: "column",
              justifyContent: 'space-evenly',
              borderRadius:'10px',
              padding: "2em"
            }}>
            <h3> Blog</h3>
              <p>Read about what I've been up to</p>
              <p>Learn more</p>
          </div>
        </Link>
        <Link style={{
          width: "30%",
        }}to="/about">
          <div style={{
              boxShadow: "0px 4px 15px -4px rgba(0,0,0,0.75)",
              // padding: "0px 25px",
              minHeight:'15em',
              display: "flex",
              flexDirection: "column",
              justifyContent: 'center',
              borderRadius:'10px',
              padding: "2em"
            }}>
            <h3>About</h3>
              <p>A little about me and how I strive to be more in this field</p>
              <p>Learn more</p>
          </div>
        </Link>
        <Link style={{
          width: "30%",
        }} to="/contact">
          <div style={{
              boxShadow: "0px 4px 15px -4px rgba(0,0,0,0.75)",
              // padding: "0px 25px",
              minHeight:'15em',
              display: "flex",
              flexDirection: "column",
              justifyContent: 'center',
              borderRadius:'10px',
              padding: "2em"
            }}>
            <h3>Contact</h3>
            <p>Get info on how to reach me</p>
            <p>Learn more</p>
          </div>
        </Link>
    </div>
  </Layout>
)

export default IndexPage
