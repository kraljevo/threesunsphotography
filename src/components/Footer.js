import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.facebook.com/ThreeSunsPhoto" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                        <li><a href="https://www.instagram.com/threesunsphoto/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="mailto: threesunsphoto@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Three Suns Photography, LLC</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
