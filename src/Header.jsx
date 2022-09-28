import React from 'react'
import "./index.css"

const Header = ({ count = 0}) => (<header>
        <p>Remote header / count: {count}</p>
    </header>)

export default Header;