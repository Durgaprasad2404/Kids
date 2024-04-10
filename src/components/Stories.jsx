import React from 'react'

function Stories() {
  return (
    <div className='BG-con'>
      <div className='headingCon'>
        <h1 className='MainHeading'>STORIES</h1>
      </div>
        <div className='storiesCon'>
            <div className="storiesCon1">
                <div>
                    <img src="./images/s1.png" alt="#" className="stories" />
                </div>
                <div>
                    <img src="./images/s2.png" alt="#" className="stories" />
                </div>
                <div>
                    <img src="./images/s3.png" alt="#" className="stories" />
                </div>
            </div>
            <div className="storiesCon2">
                <div>
                    <img src="./images/s4.png" alt="#" className="stories2" />
                </div>
                <div>
                    <img src="./images/s5.png" alt="#" className="stories2" />
                </div>
            </div>
      </div>
      <p className='stories-para'>Stories are a fundamental part of human communication and have been used 
        throughout history to convey cultural values, traditions, and knowledge. 
        They serve as a means of entertainment, education, and reflection, allowing individuals to 
        connect with their own experiences and the experiences of others. Additionally, stories can be
         powerful tools for conveying emotions, exploring complex themes, and fostering empathy.</p>     
    </div>
  )
}

export default Stories
