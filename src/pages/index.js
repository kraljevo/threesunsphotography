import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import PagesGallery from '../components/PagesGallery'
import ContactForm from '../components/ContactForm'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'

const DEFAULT_IMAGES = [
    { id: '1', link: '/newborn', source: full01, thumbnail: thumb01, caption: 'Newborn/Maternity', description: 'baby sleeping'},
    { id: '2', link: '/couples', source: full02, thumbnail: thumb02, caption: 'Couples', description: 'couple kissing'},
    { id: '3', link: '/headshots', source: full03, thumbnail: thumb03, caption: 'Headshots/Marketing', description: 'professional headshot'},
    { id: '4', link: '/family', source: full04, thumbnail: thumb04, caption: 'Family/Lifestyle', description: 'family portrait'},
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Three Suns Photography, LLC"
        const siteDescription = "Central Indiana natural light photographer"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>This is a catchy tag line<br />
                            this is the other half of that tag line.</h2>
                        </header>
                        <p>
                            This is a paragraph that tells you enough about me to be interesting and also make you want to choose me to do your photography. It could have a lot of information, or just a little. It's really up to me. My handsome husband will put in whatever text I ask him to. I love my big, strong nerd.
                        </p>
                        <ul className="actions">
                            <li><a href="/about" className="button">Learn More</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Choose Your Shoot</h2>

                        <PagesGallery images={DEFAULT_IMAGES.map(({ id, source, link, thumbnail, caption, description }) => ({
                            source,
                            link,
                            thumbnail,
                            caption,
                            description
                        }))} />
                    </section>


                    <section id="three">
                        <ContactForm />
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex