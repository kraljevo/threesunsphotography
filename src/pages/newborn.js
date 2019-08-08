import React from 'react'

import Layout from '../components/layout'
import ImageGallery from '../components/ImageGallery'
import ContactForm from '../components/ContactForm';

import thumb01 from '../assets/images/thumbs/newborn/01.jpg'
import thumb02 from '../assets/images/thumbs/newborn/02.jpg'
import thumb03 from '../assets/images/thumbs/newborn/03.jpg'
import thumb04 from '../assets/images/thumbs/newborn/04.jpg'
import thumb05 from '../assets/images/thumbs/newborn/05.jpg'
import thumb06 from '../assets/images/thumbs/newborn/06.jpg'
import thumb07 from '../assets/images/thumbs/newborn/07.jpg'
import thumb08 from '../assets/images/thumbs/newborn/08.jpg'
import thumb09 from '../assets/images/thumbs/newborn/09.jpg'
import thumb10 from '../assets/images/thumbs/newborn/10.jpg'
import thumb11 from '../assets/images/thumbs/newborn/11.jpg'
import thumb12 from '../assets/images/thumbs/newborn/12.jpg'
import thumb13 from '../assets/images/thumbs/newborn/13.jpg'
import thumb14 from '../assets/images/thumbs/newborn/14.jpg'
import thumb15 from '../assets/images/thumbs/newborn/15.jpg'
import thumb16 from '../assets/images/thumbs/newborn/16.jpg'
import thumb17 from '../assets/images/thumbs/newborn/17.jpg'

import full01 from '../assets/images/fulls/newborn/01.jpg'
import full02 from '../assets/images/fulls/newborn/02.jpg'
import full03 from '../assets/images/fulls/newborn/03.jpg'
import full04 from '../assets/images/fulls/newborn/04.jpg'
import full05 from '../assets/images/fulls/newborn/05.jpg'
import full06 from '../assets/images/fulls/newborn/06.jpg'
import full07 from '../assets/images/fulls/newborn/07.jpg'
import full08 from '../assets/images/fulls/newborn/08.jpg'
import full09 from '../assets/images/fulls/newborn/09.jpg'
import full10 from '../assets/images/fulls/newborn/10.jpg'
import full11 from '../assets/images/fulls/newborn/11.jpg'
import full12 from '../assets/images/fulls/newborn/12.jpg'
import full13 from '../assets/images/fulls/newborn/13.jpg'
import full14 from '../assets/images/fulls/newborn/14.jpg'
import full15 from '../assets/images/fulls/newborn/15.jpg'
import full16 from '../assets/images/fulls/newborn/16.jpg'
import full17 from '../assets/images/fulls/newborn/17.jpg'

const DEFAULT_IMAGES = [
    { id: '1', source: full01, thumbnail: thumb01, description: 'baby sleeping'},
    { id: '2', source: full02, thumbnail: thumb02, description: 'baby sleeping'},
    { id: '3', source: full03, thumbnail: thumb03, description: 'baby sleeping'},
    { id: '4', source: full04, thumbnail: thumb04, description: 'baby sleeping'},
    { id: '5', source: full05, thumbnail: thumb05, description: 'baby sleeping'},
    { id: '6', source: full06, thumbnail: thumb06, description: 'baby sleeping'},
    { id: '7', source: full07, thumbnail: thumb07, description: 'baby sleeping'},
    { id: '8', source: full08, thumbnail: thumb08, description: 'baby sleeping'},
    { id: '9', source: full09, thumbnail: thumb09, description: 'baby sleeping'},
    { id: '10', source: full10, thumbnail: thumb10, description: 'baby sleeping'},
    { id: '11', source: full11, thumbnail: thumb11, description: 'baby sleeping'},
    { id: '12', source: full12, thumbnail: thumb12, description: 'baby sleeping'},
    { id: '13', source: full13, thumbnail: thumb13, description: 'baby sleeping'},
    { id: '14', source: full14, thumbnail: thumb14, description: 'baby sleeping'},
    { id: '15', source: full15, thumbnail: thumb15, description: 'baby sleeping'},
    { id: '16', source: full16, thumbnail: thumb16, description: 'baby sleeping'},
    { id: '17', source: full17, thumbnail: thumb17, description: 'baby sleeping'},
];

class Newborn extends React.Component {

    render() {

        return (
            <Layout>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Newborn & Maternity<br /></h2>
                        </header>
                        <p>
                            
                        Let me help you and baby look your best, before and after birth. As a mother of three, I know how significent every little detail is when it comes to your little ones. Let me help you see those details again and again, from the first flutter in your tummy to their first week in the world.

                        </p>
                    </section>

                    <section id="two">
                        
                        <ImageGallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, description }) => ({
                                source,
                                thumbnail,
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

export default Newborn