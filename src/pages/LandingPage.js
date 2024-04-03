import React from 'react'
import NavBar from '../components/login_page/NavBar'
import banner from '../components/LandingPage/bg1.png'
import mumbai from '../components/LandingPage/Gateway-of-India-Mumai-monument-2012.webp'
import delhi from '../components/LandingPage/fb-img-1502472371491.jpg'
import bangalore from '../components/LandingPage/Featured-image-The-Vidhana-Soudha-in-Bangalore-1244x700.jpg'
import '../components/LandingPage/LandingPage.css'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='bod'>
      
      <NavBar />
      <img src={banner} alt='Banner' className='banner' />
      <center>
      <b style={{ position: 'absolute', top: '50%',left:'50%',transform: 'translate(-50%, -50%)', color: 'white',fontSize:60}}>MANIPAL RESORTS</b>
      </center>
      <div className='container'>
        <div className='locations-heading'>
          <h1>Locations</h1>
        </div>
        <div className='image-container'>
            <div>
              <Link to="/home/1">
                <img src={mumbai} alt='Mumbai' className='image'></img>
              </Link>
              <center>
              <h2>Mumbai</h2>
              </center>
            </div>
            <div>
              <Link to="/home/2">
                <img src={delhi} alt='Delhi' className='image'></img>
              </Link>
              <center>
              <h2>Delhi</h2>
              </center>
            </div>
            <div>
              <Link to="/home/3">
                <img src={bangalore} alt='Bangalore'className='image'></img>
              </Link>
              <center>
              <h2>Bangalore</h2>
              </center>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
