import React from 'react'
import {HeaderImg} from './components/styled/Header.styled'
import headerImage from './assets/tu-header-image.jpeg'
import About from './components/About';

function Home() {
  return (
    <>
      <div className='background'>
      <HeaderImg alt='fly-fishing man' src={headerImage}/>
      <section style={{'text-align': 'center'}}>
        <h2>Welcome to Snowy Mountain Trout Unlimited! Watch for our April board meeting and May Annual Meeting!</h2>
        <h4>To learn more, checkout the links to our various pages below to find the information you need</h4>
      </section>
        <About />
      </div>
    </>
  )
}

export default Home