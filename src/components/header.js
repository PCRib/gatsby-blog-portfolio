import React from 'react'
import { Link } from 'gatsby'
import Menu from './menu' 
import './header.css'

const Header = ({ siteTitle }) => (
  <div
    style={{
      // background: '#333',
      marginBottom: '0',
    }}
  >
    <div
      style={{
        // margin: '0 auto',
        // maxWidth: 960,
        padding: '1.45rem 2rem 1.0875rem 7rem',
        display: 'flex',
        justifyContent: 'space-between',
        margin: "0 0 2.5em 0"
      }}
    >
      <h1 style={{ 
        margin: 0, 
        color: '#fff',
        }}>
        <Link
          to="/"
          style={{
            textDecoration: 'none'
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Menu />
    </div>
  </div>
)

export default Header
