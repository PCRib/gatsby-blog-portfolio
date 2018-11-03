import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>  
        <div>
            <h1>About Me</h1>
            <p>I'm a Full Stack Development</p>
            <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
            </div>
            <Link to="/">Go to Homepage</Link>
        </div>
    </Layout>
  )
}

export default AboutPage