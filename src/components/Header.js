import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="/" className="image avatar"><img src={avatar} alt="" /></a>
                    <a href="/" ><h1><strong>Three Suns</strong> Photography</h1><br /></a>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
