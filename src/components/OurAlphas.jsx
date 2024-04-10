import React from 'react'

function OurAlphas() {
  return (
      <div className='OurAlpha-BG'>
            <div style={{textAlign:'center'}}>
                <img src="./images/kids.png" alt="#" className='OurAlpha-img' />
            </div>
        <div className='OurAlphaContainer'>
            <div className='kidsImgCon'>
                <img src="./images/mainimg.png" alt="#" className='kids-img' />
            </div>
            <div>
                <div className='OurAlpha-con1'>
                    <div className='TeluguCon'>
                        <img src="./images/telugu.png" alt="#" className='Alpha-img' />
                        <h3>Telugu</h3>
                        <p className='get-para'>Telugu is a Dravidian language that is native to the Indian states of Andhra Pradesh and Telangana</p>
                       <button className="getBtn">Get Alphabets</button>
                    </div>
                    <div className='EnglishCon'>
                        <img src="./images/eng.png" alt="#" className='Alpha-img' />
                        <h3>English</h3>
                        <p className='get-para'>According to the Collins Dictionary, English can mean relating to England, its people, or its language.It can also mean relating to Great Britain, even though many people object to this...etc</p>
                        <button className="getBtn">Get Alphabets</button>
                    </div>
                </div>
                <div className='OurAlpha-con2'>
                    <div className='HindiCon'>
                        <img src="./images/hindi.png" alt="#" className='Alpha-img' />
                        <h3>Hindi</h3>
                        <p className='get-para'>Hindi is an Indo-Aryan language spoken chiefly in North India, and serves as the lingua franca of the Hindi Belt region encompassing parts of northern, central, eastern, and western India.</p>
                        <button className="getBtn">Get Alphabets</button>
                    </div>
                    <div className='NumbersCon'>
                        <img src="./images/nums.png" alt="#" className='Alpha-img' />
                        <h3>Numbers</h3>
                        <p className='get-para'>A number is an arithmetic value used for representing the quantity and used in making calculations. A written symbol like “3” which represents a number is known as numerals.</p>
                        <button className="getBtn">Get Alphabets</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default OurAlphas
