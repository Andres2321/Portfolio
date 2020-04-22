import React from 'react'
import Header2 from './Header2'

function Projects() {

  return (
    <>
      <div className='projects-container'>
      <Header2 />
        <div className='card-container flex row'>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front flex column">
                <h1>Random Trivia</h1>
                <hr />
                <div className='image-div project1 background border'></div>
                <hr />
                <div className='technologies'></div>
              </div>
              <div className="flip-card-back">
                <h1>Random Trivia</h1>
                <p>A quick and fun random trivia game, built with vanilla JavaScript. Click on start, and try to answer as many questions correctly as you can. There is a total of 15 questions, and at the end of the quiz, you can find out how you did.</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front flex column">
                <h1>Get Schwifty</h1>
                <hr />
                <div className=" image-div project2 background border"></div>
                <hr />
                <div className='technologies'></div>
              </div>
              <div className="flip-card-back">
                <h1>Get Schwifty</h1>
                <p>This project was inspired by the Uber website. It is a interplanetary transportation service. You choose your location, and drivers based on their ratings. Funds are deducted from your e-wallet automatically.</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front flex column">
                <h1>Buy Stuff Here</h1>
                <hr />
                <div className=' image-div project3 background border'></div>
                <hr />
                <div className='technologies'></div>
              </div>
              <div className="flip-card-back">
                <h1>Buy Stuff Here</h1>
                <p>E-commerce website, with complete CRUD capability. It includes a hand-rolled jwt authentication system. Post your items with a short discription and dont forget to include the price.</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner flex column">
              <div className="flip-card-front flex column">
                <h1>Animal Rescue</h1>
                <hr />
                <div className='image-div project4 background border'></div>
                <hr />
                <div className='technologies'></div>
              </div>
              <div className="flip-card-back">
                <h1>Animal Rescue</h1>
                <p>A mock website of my local animal shelter. This is a work in progress, as I would like to donate to the organization. It has full CRUD capability, with a sign in and register capability.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects