import React from 'react'
import "./Content.css"

const Content = () => {
  return (
    <div className='contentContainer'>
        <div className='card'>
            <img src="./images/japan.jpg"></img>
            <div className="cardboard">
            <h3>Japan</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis eaque cumque iste fugiat amet qui nostrum magnam eius nobis inventore!</p>
            </div>
        </div>
        <div className='card'>
            <img src="./images/venice.jpg"></img>
            <div className="cardboard">
            <h3>Venice</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis eaque cumque iste fugiat amet qui nostrum magnam eius nobis inventore!</p>
            </div>
        </div>
        <div className='card'>
            <img src="./images/fiji.jpg"></img>
            <div className="cardboard">
            <h3>Fiji</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis eaque cumque iste fugiat amet qui nostrum magnam eius nobis inventore!</p>
            </div>
        </div>
  
    </div>
    
  )
}

export default Content