import React from 'react'

function HomePage() {
  return (
    <>
    <div className='bg-homepage' style={{backgroundImage:"url('./images/homeBG.jpeg')",backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
      <div className='homepage-container1'>
        <h1 className='homepage-heading'>EDUCATION IS POWER</h1>
        <p className='home-para'>Education is the most powerful weapon which you can use to change the world</p>
        <p className='home-para'>Online education provides access to a wide range of courses and programs, often allowing students to learn from anywhere in the world.</p>
        <button className='home-button'>Let's Start...</button>
      </div>
      <div className='homepage-container2'>
        <h2>The Transformative <span className='spanEl'>Power of Online Education</span> for Children</h2>
        <p className='home-para2'>In the dynamic landscape of education, online platforms have emerged as powerful tools, offering an array of opportunities for children to learn and grow</p>
        <button className='btnEl'>Learn more...</button>
      </div>
    </div>
    
    </>
  )
}

export default HomePage
