import React from 'react'
import Profile from './Profile'
import LeftMenu from './LeftMenu';
import '../Resources/StyleSheet/Profile.css'

function About() {
  return (
    <>
        <div className='row m-5 d-flex justify-content-between'>
            <div className='col-lg-4 left-menu'>
                <LeftMenu/>
            </div>
            <div className='col-lg-8 p-2 right-menu'>
                <Profile></Profile>
            </div>
        </div>
    </>
  )
}

export default About