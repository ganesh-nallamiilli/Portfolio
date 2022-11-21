import React from 'react'
import Lottie from 'react-lottie-player'
import anime from '../animation/about.json'
function About() {
  return (
    <div className='container' style={{background:"#181818"}} id='about'>
        <div className='row py-5 align-items-center ' style={{height:"100vh"}} >
          <div className='col-md-8'>
              <h1 className='text-light'><span id='name_'>N U N Ganesh Reddy</span><br/>I love to build responsive web applications.</h1>
                <p className='m-0 p-0 text-muted'>I'm a front-end developer and a free-lancer</p>
          </div>
          <div className='col-md-4 d-none d-md-flex justify-content-center '>
          <Lottie
      loop
      animationData={anime}
      play
      style={{ width: 150, height: 150 }}
    />
          </div>
        </div>
    </div>
  )
}

export default About;