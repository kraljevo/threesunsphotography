import React from 'react'

import Layout from '../components/layout'
import ContactForm from '../components/ContactForm'

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
                    </section>

                    <section id="two">
                        <h2>My family</h2>

                        <p>
                            This is a paragraph that tells you my family. There will probably be stuff about my children (I have 3!) and my dogs (I have 2!) and my husband (I have 1!). My goal here is to provide enough to be funny and informative without allowing a serial killer to find me and murder me.
                        </p>
                        
                    </section>

                    <section id="three">
                        <ContactForm />
                    </section>

                </div>

            </Layout>
        )
    }
}

export default About