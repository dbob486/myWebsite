import React from 'react';
import './HomePage.css'
import SocialButtonsContainer from 'react-social-media-buttons';
import { Wave } from 'react-animated-text'
import Footer from '../Footer/Footer';

const HomePage = () => {
    return (
        <div className='CenterText'>
            <div className='TextName'>
                <Wave
                    text="Daniel Garcia"
                    effect="verticalFadeIn"
                    effectChange={.2}
                    effectDirection='up'
                    iterations={1}
                />
            </div>
            <div className='TextDesc'>
                <Wave
                    text="FullStack Engineer"
                    delay={10}
                    effect="verticalFadeIn"
                    effectChange={.2}
                    effectDirection='up'
                    iterations={1}
                />
            </div>
            <SocialButtonsContainer
                className="Socials"
                links={['https://www.linkedin.com/in/daniel-garcia-1985201ba/', 'https://github.com/dbob486']}
                buttonStyle={{ width: '69px', height: '69px', margin: '30px 40px', backgroundColor: '#cce7ff', borderRadius: '30%', border: '3px solid #bfbfbf' }}
                iconStyle={{ color: '#134d8b' }}
                openNewTab={true}
            />
            <Footer/>
        </div>
    )
}

export default HomePage;