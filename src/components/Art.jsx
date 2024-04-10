import React from 'react'

function Art() {
  return (
    <div className='BG-con'>
        <div className='headingCon'>
            <h1 className='MainHeading'>ARTS</h1>
        </div>
        <div className='ArtCon'>
            <div className='ArtCon1'>
                <div className="poly">
                    <img src="./images/s3.png" alt="#" />
                </div>
                <div className="poly">
                    <img src="./images/s3.png" alt="#" />
                </div>
            </div>
            <div className="poly">
                    <img src="./images/s3.png" alt="#" />
                </div>
            <div className='ArtCon2'>
                <div className="poly">
                    <img src="./images/s3.png" alt="#" />
                </div>
                <div className="poly">
                    <img src="./images/s3.png" alt="#" />
                </div>
            </div>
            <button className='artBtn'>DRAW YOUR OWN ART</button>
        </div> 
        <div>
            <p className='arts-para'>
                A drawing in art is a visual depiction of a real or fictitious
                 object or objects made using tools such as a pen or pencil. Drawing,
                  unlike painting, is more focused on capturing 
                  the form of the object using lines
            </p>
            <p className='arts-para'>
                Drawing is one of the oldest forms of 
                human expression within the visual arts. It is generally 
                concerned with the marking of lines and areas of tone onto paper/other material, 
                where the accurate representation of the visual 
                world is expressed upon a plane surface.
            </p>
        </div>  
    </div>
  )
}

export default Art
