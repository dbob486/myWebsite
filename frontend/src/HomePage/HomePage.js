import React from 'react';
import './HomePage.css'
import SocialButtonsContainer from 'react-social-media-buttons';
import { Wave } from 'react-animated-text'
import Boxes from '../Footer/Boxes';

const HomePage = () => {
    return (
        <div >
            <div className='HomePage'>
                <div className='MyName'>
                    <Wave
                        text="Daniel Garcia"
                        effect="verticalFadeIn"
                        effectChange={.2}
                        effectDirection='up'
                        iterations={1}
                    />
                </div>
                <div className='Job'>
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
                    buttonStyle={{ width: '79px', height: '79px', margin: '30px 40px', backgroundColor: 'white', borderRadius: '30%', border: '3px solid  #DDDDDD' }}
                    iconStyle={{ color: '#134d8b' }}
                    openNewTab={true}
                />
                <Boxes className='Boxes' />
            </div>
        </div>
    )
}

export default HomePage;