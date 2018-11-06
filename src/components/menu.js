import React from 'react'
import {Link} from 'gatsby'

const Menu = () => (
    <div style ={{
        // background:'#f4f4f4',
        paddingTop:'10px',
        width: '33%'
    }}>
        <ul style={{
            listStyle:'none',
            display:'flex',
            justifyContent:'space-evenly',
            margin:'0'
        }}>
            <li style={{color: '#FFF'}}>
                <Link to="/">Home</Link>
            </li>
            <li style={{color: '#FFF'}}>
                <Link to="/blog">Blog</Link>
            </li>
            <li style={{color: '#FFF'}}>
                <Link to="/about">About</Link>
            </li>
            <li style={{color: '#FFF'}}>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </div>
  )


export default Menu