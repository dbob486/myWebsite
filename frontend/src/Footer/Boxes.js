import React from 'react';
import './Boxes.css';

const Boxes = () => {
    return (
        <div className='Boxes'>
            <div className='BoxTwo'>
                <h2> About me -- Self-Taught developer. </h2>
                <div className='Description'>
                    <p> After attending University for 2 years I struggled financially hindering my continuation. <br/>
                        That is when I began the tough road of self-teaching. 
                        Along the way I realized the difficulty of not being able to ask anyone other than google for help.
                        So I decided to attend a Software Engineering bootcamp called 42 in Silicon Valley. This is where I learned how
                        to coordinate in teams articulating solutions for various problems through a project based curriculum.
                        After sometime I realized that I wanted to continue along the web development path.  
                        So utitlizing online resources such as Udemy and other training courses I was able to learn and will continue advancing in
                        FullStack development.
                    </p>
                </div>
            </div>
            <div className='BoxOne'>
                <h2> Contact me: </h2>
                <a className='Email' href="mailto:daniel.garcia.programming@gmail.com">daniel.garcia.programming@gmail.com </a>
            </div>
        </div>
    )
}

export default Boxes;