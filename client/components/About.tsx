import React from 'react'
import john from '../images/john-doe.jpg'

import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>I am a qualified Software Developer, working in the Wellington Region, in New Zealand. </p>
                    <p>Following 4 years in Banking I choose to transition to be a Software Developer, this site is to showcase my skills and abilities. </p>
                </div>
                <img src={john} alt='john' width="550" height="auto" />
            </div>
        </div>

        )

}
export default About 