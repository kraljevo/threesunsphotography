import React from 'react'

import Layout from '../components/layout'
// import Lightbox from 'react-images'

class About extends React.Component {

    render() {

        return (
            <Layout>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Get to know me<br />
                            so I can get to know you</h2>
                        </header>
                        <p>
                            This is a paragraph that tells you more specific stuff about me. It might explain how I got into photography and all my personal goals (fulltime photographer!), loves (sexy husband), and fears (getting murdered, etc.). We'll see! (FYI: don't forget to go into the enneagram stuff)
                        </p>
                        <ul className="actions">
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.enneagraminstitute.com/type-descriptions" className="button">Find Your Enneagram</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>My family</h2>

                        <p>
                            This is a paragraph that tells you my family. There will probably be stuff about my children (we have 3!) and my dogs (we have 2!) and my husband (I have 1!). My goal here is to provide enough to be funny and informative without allowing a serial killer to find me and murder me.
                        </p>
                        
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>Have questions? Concerned about the fine details? Let's talk about it! I can't wait to hear from you!</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    {/*
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        1234 Somewhere Rd.<br />
                                        Nashville, TN 00000<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        000-000-0000
                                    </li>
                                    */}
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto: threesunsphoto@gmail.com">threesunsphoto@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default About